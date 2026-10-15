import { NextResponse } from "next/server";

// Receives the sign-up form. The details are forwarded to WAITLIST_WEBHOOK_URL (a Google
// Sheet script, Zapier, Make, the back end...) when it is set. Without it the request is
// only validated, so the form works but nothing is stored: set the variable in production.

const LISTS = ["user", "amb"];

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Robots fill in the hidden field: pretend it worked, store nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true }, { status: 202 });

  const list = clean(body.list, 10);
  const firstName = clean(body.firstName, 60);
  const country = clean(body.country, 12);
  const digits = clean(body.whatsapp, 30).replace(/[\s.\-()]/g, "");

  if (
    !LISTS.includes(list) ||
    !firstName ||
    !/^[A-Z]{2} \+\d{1,3}$/.test(country) ||
    !/^\d{8,12}$/.test(digits)
  ) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 422 });
  }

  const utm: Record<string, string> = {};
  if (body.utm && typeof body.utm === "object") {
    for (const [key, value] of Object.entries(body.utm)) {
      if (key.startsWith("utm_")) utm[key] = clean(value, 100);
    }
  }

  const lead = {
    list,
    firstName,
    country: country.slice(0, 2),
    whatsapp: `${country.split(" ")[1]}${digits.replace(/^0+/, "")}`,
    intent: clean(body.intent, 100),
    page: clean(body.page, 200),
    eventId: clean(body.eventId, 64),
    utm,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error(`webhook ${response.status}`);
    } catch {
      return NextResponse.json({ error: "storage_failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true }, { status: 202 });
}
