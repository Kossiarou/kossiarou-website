import { notFound } from "next/navigation";

// Catches every unknown path under /fr and /en so the localized not-found page is
// used (Next only calls a segment's not-found.tsx when notFound() is thrown).
export default function CatchAll() {
  notFound();
}
