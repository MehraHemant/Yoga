"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import VideoFacade from "@/components/VideoFacade";
import { testimonials, type Story } from "@/lib/content";

const { stories } = testimonials;
const pad = (n: number) => String(n).padStart(2, "0");

function Avatar({ story, size }: { story: Story; size: number }) {
  return story.image ? (
    <Image
      src={story.image}
      alt=""
      width={130}
      height={130}
      quality={90}
      style={{ width: size, height: size }}
      className="rounded-full object-cover"
    />
  ) : (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      className="flex items-center justify-center rounded-full bg-forest font-display text-white"
    >
      {story.name.charAt(0)}
    </span>
  );
}

function Byline({ story }: { story: Story }) {
  return (
    <div className="flex items-center gap-4">
      <span className="rounded-full p-0.75 ring-2 ring-forest/20">
        <Avatar story={story} size={58} />
      </span>
      <span className="leading-snug">
        <strong className="block text-lg font-bold">{story.name}</strong>
        <span className="text-base text-muted">
          {story.course} · {story.date}
        </span>
      </span>
    </div>
  );
}

/** The full story opens in a modal, so "Read more" never changes the section's layout. */
function StoryDialog({
  story,
  onClose,
}: {
  story: Story | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (story && !d.open) d.showModal();
    if (!story && d.open) d.close();
  }, [story]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="story-title"
      className="m-auto max-h-5/6 w-11/12 max-w-180 flex-col open:flex overflow-hidden rounded-2xl bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      {story && (
        <>
          <header className="flex items-start justify-between gap-6 border-b border-line bg-white px-6 py-5 sm:px-9">
            <Byline story={story} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close story"
              className="-mr-2 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-muted transition hover:bg-white hover:text-ink"
            >
              ×
            </button>
          </header>
          <div className="overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
            <h3 id="story-title" className="mb-5 text-3xl text-ink">
              {story.title ?? `${story.name.split(" ")[0]}’s story`}
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-ink">
              {story.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [reading, setReading] = useState<Story | null>(null);
  const go = (d: number) =>
    setActive((i) => (i + d + stories.length) % stories.length);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Video + intro */}
      <div className="lg:col-span-5">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <VideoFacade
            id={testimonials.videoId}
            poster={testimonials.videoPoster}
            title="YVM Testimonial"
          />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Real words from students who came to Rishikesh for a course and left
          with a second home. Press play to hear one of them, or read their
          stories alongside.
        </p>
      </div>

      {/* Story card */}
      <div className="rounded-3xl bg-forest/5 p-7 sm:p-10 lg:col-span-7 lg:p-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <svg
            viewBox="0 0 32 32"
            className="h-10 w-10 text-forest"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13 7C7.5 8.6 4 13 4 18.5V25h9v-9H8.4c.4-3.3 2.5-5.7 5.6-6.9zm15 0c-5.5 1.6-9 6-9 11.5V25h9v-9h-4.6c.4-3.3 2.5-5.7 5.6-6.9z" />
          </svg>
          <span className="text-base text-muted">
            <span className="font-semibold text-ink">{pad(active + 1)}</span> /{" "}
            {pad(stories.length)}
          </span>
        </div>

        {/* All slides share one grid cell, so the card is always as tall as the longest one: no jumping. */}
        <div className="grid" aria-live="polite">
          {stories.map((s, i) => {
            const on = i === active;
            return (
              <figure
                key={s.name}
                aria-hidden={!on}
                inert={!on}
                className={`col-start-1 row-start-1 flex flex-col transition-all duration-500 ${
                  on
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                {s.title && (
                  <p className="mb-3 line-clamp-2 font-display text-2xl font-semibold sm:text-3xl">
                    {s.title}
                  </p>
                )}
                <blockquote className="text-lg leading-relaxed text-ink">
                  <p className={s.title ? "line-clamp-4" : "line-clamp-6"}>
                    {s.text.join(" ")}
                  </p>
                </blockquote>
                <button
                  type="button"
                  onClick={() => setReading(s)}
                  className="group mt-3 inline-flex w-fit cursor-pointer items-center gap-2 font-semibold text-forest"
                >
                  <span className="underline decoration-forest/30 underline-offset-4 group-hover:decoration-forest">
                    Read full story
                  </span>
                  <span
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
                <figcaption className="mt-auto pt-7">
                  <Byline story={s} />
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-forest/10 pt-6">
          <div
            className="flex -space-x-2"
            role="group"
            aria-label="Choose a student story"
          >
            {stories.map((s, i) => (
              <button
                key={s.name}
                type="button"
                aria-pressed={i === active}
                aria-label={`${s.name}, ${s.course}`}
                title={s.name}
                onClick={() => setActive(i)}
                className={`cursor-pointer rounded-full border-3 border-white transition duration-300 hover:z-10 hover:-translate-y-1 ${
                  i === active
                    ? "z-10 -translate-y-1 ring-2 ring-forest"
                    : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                }`}
              >
                <Avatar story={s} size={42} />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {[
              { d: -1, label: "Previous story", icon: "M15 6l-6 6 6 6" },
              { d: 1, label: "Next story", icon: "M9 6l6 6-6 6" },
            ].map((b) => (
              <button
                key={b.d}
                type="button"
                onClick={() => go(b.d)}
                aria-label={b.label}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-forest shadow-sm ring-1 ring-forest/15 transition hover:bg-forest hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path
                    d={b.icon}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      <StoryDialog story={reading} onClose={() => setReading(null)} />
    </div>
  );
}
