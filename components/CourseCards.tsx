import Image from "next/image";
import { img } from "@/lib/images";
import type { Course } from "@/lib/content";

/** Round Yoga Alliance seal for a course: RYS 200/300/500, or YACEP for CE-hour retreats. */
function sealFor(c: Course) {
  const n = c.certification?.match(/\d+/)?.[0];
  return n
    ? {
        src: img[`badge-rys-${n}` as "badge-rys-200" | "badge-rys-300" | "badge-rys-500"],
        alt: `Yoga Alliance ${c.certification}`,
      }
    : {
        src: img["badge-yacep"],
        alt: "Yoga Alliance Continuing Education Provider",
      };
}

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14m-5-5l5 5-5 5" />
    </svg>
  );
}

export default function CourseCards({
  courses,
  detailed = false,
  cta = "Explore Program",
}: {
  courses: Course[];
  detailed?: boolean;
  cta?: string;
}) {
  return (
    <ul className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((c, i) => {
        const tag = c.hours ? `${c.hours} Hour` : c.days;
        const eyebrow = c.certification
          ? `${c.certification.replace(" ", "-")} · Yoga Alliance`
          : c.tag;
        const seal = sealFor(c);

        return (
          // The middle card sits a little lower on desktop, for rhythm.
          <li key={c.href} className={i % 3 === 1 ? "lg:mt-12" : ""}>
            <a
              href={c.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-forest"
            >
              {/* Photo with hours tag and Yoga Alliance seal */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-forest px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  {tag}
                </span>
                <span className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white p-1 shadow-md">
                  <Image
                    src={seal.src}
                    alt={seal.alt}
                    width={160}
                    height={160}
                    className="h-full w-full"
                  />
                </span>
              </div>

              {/* Details panel overlapping the photo */}
              <div className="relative -mt-8 mx-4 flex flex-1 flex-col rounded-t-xl bg-white px-5 pb-5 pt-5">
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-forest">
                  <span className="shrink-0">{eyebrow}</span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  <span className="shrink-0 font-display text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </p>
                <h3 className="mt-3 line-clamp-2 text-xl font-semibold leading-snug transition-colors group-hover:text-forest">
                  {c.title}
                </h3>

                {/* Duration | Level | Price */}
                <dl className="mt-5 grid grid-cols-3 divide-x divide-line border-y border-line text-sm">
                  <div className="py-3 pr-3">
                    <dt className="text-xs font-bold uppercase tracking-widest">
                      Duration
                    </dt>
                    <dd className="mt-1 text-ink">{c.days}</dd>
                  </div>
                  <div className="px-3 py-3">
                    <dt className="text-xs font-bold uppercase tracking-widest">
                      Level
                    </dt>
                    <dd className="mt-1 leading-snug text-ink">
                      {c.level.replace(" - ", " to ")}
                    </dd>
                  </div>
                  <div className="py-3 pl-3 text-right">
                    <dt className="text-xs font-bold uppercase tracking-widest">
                      From
                    </dt>
                    <dd className="mt-1 font-display text-xl font-semibold text-forest">
                      {c.price.replace("$ ", "")} USD
                    </dd>
                  </div>
                </dl>

                {detailed && c.highlights && c.highlights.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-widest">
                      Key outcomes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {c.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex min-w-0 items-center gap-2 text-sm"
                        >
                          <span
                            className="h-px w-3 shrink-0 bg-forest"
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer bar */}
              <div className="mt-auto flex items-center justify-between border-t border-line px-6 py-4 transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                <span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
                  <span className="h-px w-6 bg-current" aria-hidden="true" />
                  {cta}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white transition duration-300 group-hover:bg-white group-hover:text-forest">
                  <Arrow />
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
