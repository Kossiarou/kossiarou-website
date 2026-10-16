import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LABELS, getLandingPage, type LandingPage as LandingPageContent } from "@/content/landing-fr";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";
import { CONTACT, absoluteUrl } from "@/lib/site";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { SignupForm } from "./SignupForm";

const eyebrow = "font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase";
const h2 = "text-[clamp(26px,3.4vw,36px)] leading-[1.1] font-bold tracking-[-0.025em]";
const SEPARATOR = "›";

export function LandingPage({
  lang,
  dict,
  page,
}: {
  lang: Locale;
  dict: Dictionary;
  page: LandingPageContent;
}) {
  const basePath = `/${lang}`;
  const pageUrl = absoluteUrl(lang, page.slug);
  const related = page.related
    .map((slug) => getLandingPage(slug))
    .filter((item): item is LandingPageContent => Boolean(item));

  const schema = graph(
    breadcrumbSchema([
      { name: LABELS.home, url: absoluteUrl(lang) },
      { name: page.crumb, url: pageUrl },
    ]),
    ...(page.kind === "usage" ? [serviceSchema(dict.meta.schema, pageUrl)] : []),
    ...(page.faq.length > 0 ? [faqSchema(page.faq)] : []),
  );

  return (
    <div className="min-h-screen bg-cream">
      <a
        href="#contenu"
        className="sr-only rounded-xl bg-ink px-4 py-3 text-base font-bold text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        {dict.header.skip}
      </a>
      <Header lang={lang} dict={dict.header} basePath={basePath} />
      <JsonLd data={schema} />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <article className="mx-auto flex max-w-[860px] flex-col gap-10 px-[clamp(16px,4vw,40px)] pt-10 pb-[72px]">
          <header className="flex flex-col gap-4">
            <nav aria-label={LABELS.breadcrumbLabel}>
              <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
                <li>
                  <Link href={basePath} className="underline">
                    {LABELS.home}
                  </Link>
                </li>
                <li aria-hidden="true">{SEPARATOR}</li>
                <li aria-current="page">{page.crumb}</li>
              </ol>
            </nav>
            <h1 className="text-[clamp(36px,5.4vw,58px)] leading-[1.02] font-bold tracking-[-0.035em]">
              {page.h1}
            </h1>
            <p className="text-[19px] leading-[1.55] text-ink">{page.answer}</p>
            <p className="font-mono text-xs text-ink-soft">{LABELS.updated}</p>
            {!page.hideSignup && (
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="#inscription"
                  className="rounded-xl bg-gold px-[22px] py-3.5 text-base font-bold text-ink hover:bg-gold-hover"
                >
                  {LABELS.signupCta}
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_whatsapp"
                  className="rounded-xl border border-border-soft bg-cream-soft px-[22px] py-[13px] text-base font-bold hover:bg-white"
                >
                  {LABELS.whatsappCta}
                </a>
              </div>
            )}
          </header>

          {page.sections.map((section) => (
            <section key={section.title} className="flex flex-col gap-4">
              <h2 className={h2}>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-[1.6] text-ink-soft">
                  {paragraph}
                </p>
              ))}
              {section.list &&
                (section.ordered ? (
                  <ol className="flex list-decimal flex-col gap-2.5 pl-6 text-[17px] leading-[1.55] marker:font-bold">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="flex list-disc flex-col gap-2.5 pl-6 text-[17px] leading-[1.55] text-ink-soft">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              {section.example && (
                <p className="rounded-xl border border-border-soft bg-cream-soft p-4 text-[15px] leading-[1.55] text-ink-soft">
                  {section.example}
                </p>
              )}
            </section>
          ))}

          {page.showCompare && (
            <section className="flex flex-col gap-4">
              <h2 className={h2}>{LABELS.compareTitle}</h2>
              <div className="overflow-x-auto rounded-xl border border-border-soft bg-white">
                <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                  <caption className="sr-only">{LABELS.compareCaption}</caption>
                  <thead>
                    <tr className="bg-chip-2">
                      {LABELS.compareHeaders.map((header) => (
                        <th key={header} scope="col" className="px-4 py-3 font-bold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {LABELS.compareRows.map((row) => (
                      <tr key={row[0]} className="border-t border-border-soft">
                        {row.map((cell, i) =>
                          i === 0 ? (
                            <th key={cell} scope="row" className="px-4 py-3 font-bold">
                              {cell}
                            </th>
                          ) : (
                            <td key={cell} className="px-4 py-3 text-ink-soft">
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-ink-soft">{LABELS.compareNote}</p>

              <div className="mt-2 flex flex-col gap-3 rounded-2xl bg-ink p-6 text-cream">
                <h3 className="text-xl font-bold">{LABELS.trustTitle}</h3>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] text-dark-text-body">
                  {LABELS.trustItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {page.faq.length > 0 && (
            <section className="flex flex-col gap-2" aria-labelledby="faq-page-title">
              <h2 id="faq-page-title" className={h2}>
                {LABELS.faqTitle}
              </h2>
              <div className="mt-3 border-t border-border-soft">
                {page.faq.map((item) => (
                  <details key={item.q} className="group border-b border-border-soft">
                    <summary
                      data-track="faq_open"
                      className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-bold [&::-webkit-details-marker]:hidden"
                    >
                      {item.q}
                      <span aria-hidden="true" className="flex-none text-lg group-open:hidden">
                        +
                      </span>
                      <span aria-hidden="true" className="hidden flex-none text-lg group-open:inline">
                        −
                      </span>
                    </summary>
                    <p className="pr-8 pb-5 text-[15px] leading-[1.6] text-ink-soft">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {related.length > 0 && (
            <nav aria-labelledby="related-title" className="flex flex-col gap-3">
              <h2 id="related-title" className={eyebrow}>
                {LABELS.relatedTitle}
              </h2>
              <ul className="flex flex-wrap gap-2.5">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${basePath}/${item.slug}`}
                      className="inline-block rounded-xl border border-border-soft bg-cream-soft px-4 py-2.5 text-[15px] font-bold hover:bg-white"
                    >
                      {item.crumb}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
        {!page.hideSignup && <SignupForm dict={dict.signup} />}
      </main>
      <Footer dict={dict.footer} basePath={basePath} />
    </div>
  );
}
