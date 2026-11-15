"use client";

import { useState } from "react";
import { googleReviews } from "@/lib/content";

const LONG = 420; // characters before a review gets folded

function Review({ name, text }: { name: string; text: string[] }) {
  const foldable = text.join(" ").length > LONG;
  const [open, setOpen] = useState(false);

  return (
    <article className="mb-6 break-inside-avoid rounded-lg border border-line bg-white p-6">
      <header className="mb-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg text-white"
        >
          {name.charAt(0).toUpperCase()}
        </span>
        <div>
          <h3 className="font-sans text-lg font-semibold leading-tight">
            {name}
          </h3>
          <p className="flex items-center gap-2 text-sm text-muted">
            <span
              className="tracking-wider text-star"
              role="img"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </span>
            Posted on Google
          </p>
        </div>
      </header>
      <div
        className={
          foldable && !open
            ? "max-h-56 space-y-3 overflow-hidden text-base leading-relaxed mask-b-from-60%"
            : "space-y-3 text-base leading-relaxed"
        }
      >
        {text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {foldable && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mt-3 cursor-pointer text-base font-semibold text-saffron-dark underline underline-offset-4 hover:text-saffron"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}

export default function Reviews() {
  return (
    <div className="columns-1 gap-6 md:columns-2 xl:columns-3 2xl:columns-4">
      {googleReviews.reviews.map((r) => (
        <Review key={r.name} {...r} />
      ))}
    </div>
  );
}
