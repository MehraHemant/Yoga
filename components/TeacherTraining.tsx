import Image from "next/image";
import { img } from "@/lib/images";
import CourseCards from "@/components/CourseCards";
import { contact, ttc } from "@/lib/content";

const WRAP = "mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12";
const EYEBROW = "mb-4 text-sm font-bold uppercase tracking-widest text-forest";
const BTN =
  "inline-block rounded-full bg-forest px-8 py-3.5 text-lg font-semibold text-white transition hover:bg-forest-dark";
const BTN_LINE =
  "inline-block rounded-full border-2 border-ink px-8 py-3 text-lg font-semibold text-ink transition hover:bg-ink hover:text-white";

const FACTS = [
  { value: "200 · 300 · 500", label: "Hour training paths" },
  { value: "Yoga Alliance", label: "Registered school (USA)" },
  { value: "Residential", label: "Stay, meals & excursions" },
];

const CHECK = "M5 12.5l4.5 4.5L19 7.5";

/** Line icons for each curriculum topic (24×24 stroke paths). */
const TOPIC_ICONS: Record<string, string> = {
  Pranayama: "M3 8h10a3 3 0 10-3-3M3 12h15a3 3 0 11-3 3M3 16h7",
  "Yoga Philosophy":
    "M4 19V5a2 2 0 012-2h13v14H6a2 2 0 00-2 2zm0 0a2 2 0 002 2h13M8 7h7",
  "Yoga Anatomy":
    "M12 6a2 2 0 100-4 2 2 0 000 4zM5 9l7 2 7-2M12 11v5m0 0l-3 6m3-6l3 6",
  "Hatha Yoga":
    "M12 16a4 4 0 100-8 4 4 0 000 8zM12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  "Ashtanga Yoga":
    "M12 22c4 0 7-2.7 7-6.5 0-3.5-2.5-5.5-4-8-1 2.5-2.5 3.5-3.5 3.5C11 8 12 5 10 2 7 5 5 9 5 13c0 5 3 9 7 9z",
  "Yoga Nidra": "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z",
  Meditation:
    "M12 20c-4-2-6-5-6-8 3 0 5 2 6 4 1-2 3-4 6-4 0 3-2 6-6 8zm0-4c-1.5-2-2-4-2-6s1-4 2-6c1 2 2 4 2 6s-.5 4-2 6z",
  Ayurveda: "M5 21c0-9 5-15 15-16-1 10-7 15-15 16zm0 0l8-8",
  "Sound Healing": "M3 12h2m3-5v10m4-13v16m4-11v6m4-4v2",
  default: "M5 12.5l4.5 4.5L19 7.5",
};

export default function TeacherTraining() {
  // Each course card gets the name of its training path.
  const courses = ttc.courses.map((c, i) => ({
    ...c,
    subtitle: ttc.levels[i]?.name,
  }));

  return (
    <section id="teacher-training" className="bg-white py-14 lg:py-20">
      {/* ── Opening ── */}
      <div
        className={`${WRAP} grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16`}
      >
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className={EYEBROW}>Residential Yoga TTC</p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Yoga Teacher Training in Rishikesh, India
          </h2>
          <p className="mt-6 text-xl leading-relaxed">{ttc.lead}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {ttc.intro[0]}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.label} className="rounded-2xl bg-forest/5 px-5 py-4">
                <dt className="font-display text-lg font-semibold leading-snug">
                  {f.value}
                </dt>
                <dd className="mt-1 text-sm text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className={BTN} href="#ttc-courses">
              View Courses
            </a>
            <a className={BTN_LINE} href={contact.enquire}>
              Enquire
            </a>
          </div>
        </div>

        <div className="relative min-h-96 overflow-hidden rounded-3xl lg:col-span-6 lg:min-h-0">
          <Image
            src={img["lawn-class"]}
            alt="Morning yoga class on the lawn of the school in Rishikesh"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
            aria-hidden="true"
          />
          <p className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur">
            Morning practice on the school lawn, Tapovan
          </p>
        </div>
      </div>

      {/* ── Courses ── */}
      <div className={`${WRAP} mt-20 lg:mt-28`} id="ttc-courses">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className={EYEBROW}>Choose your path</p>
            <h3 className="text-3xl font-semibold sm:text-4xl">
              {ttc.levelsLead}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {ttc.coursesLead}
            </p>
          </div>
          <a className={`${BTN_LINE} hidden sm:inline-block`} href={ttc.all}>
            All TTC in Rishikesh
          </a>
        </div>
        <CourseCards courses={courses} detailed />
        <p className="mt-10 text-center sm:hidden">
          <a className={BTN_LINE} href={ttc.all}>
            All TTC in Rishikesh
          </a>
        </p>
      </div>

      {/* ── Curriculum ── */}
      <div className={`${WRAP} mt-20 lg:mt-28`}>
        <div className="rounded-2xl bg-forest/5 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className={EYEBROW}>What you will study</p>
                <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  A holistic curriculum rooted in tradition
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  {ttc.curriculumLead}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                    <dt className="text-sm text-muted">Core subjects</dt>
                    <dd className="font-display text-2xl font-semibold text-forest">
                      {ttc.curriculum.length}
                    </dd>
                  </div>
                  <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                    <dt className="text-sm text-muted">Certified by</dt>
                    <dd className="font-display text-lg font-semibold leading-tight text-forest">
                      Yoga Alliance
                    </dd>
                  </div>
                </dl>

                <div className="relative mt-7 hidden aspect-4/3 overflow-hidden rounded-xl lg:block">
                  <Image
                    src={img["gallery-school"]}
                    alt="The yoga school campus in the hills of Rishikesh"
                    fill
                    placeholder="blur"
                    sizes="33vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                    Learning in the Himalayan valley
                  </p>
                </div>
              </div>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
              {ttc.curriculum.map((topic, i) => (
                <li
                  key={topic.name}
                  className="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 sm:block sm:p-6 hover:bg-forest hover:text-white hover:shadow-xl"
                >
                  <div className="flex shrink-0 items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest transition duration-300 group-hover:bg-white/15 group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          d={TOPIC_ICONS[topic.name] ?? TOPIC_ICONS.default}
                        />
                      </svg>
                    </span>
                    <span className="hidden font-display text-sm font-semibold text-muted transition group-hover:text-white/70 sm:inline">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold sm:mt-5 sm:text-xl">
                      {topic.name}
                    </h4>
                    <p className="mt-1 text-base leading-relaxed text-muted transition group-hover:text-white/80 sm:mt-2">
                      {topic.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ── Life on campus ── */}
      <div
        className={`${WRAP} mt-20 grid items-center gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-16`}
      >
        <div className="grid grid-cols-2 gap-4 lg:col-span-6">
          <div className="relative col-span-2 aspect-video overflow-hidden rounded-3xl">
            <Image
              src={img["meditation-hall"]}
              alt="Students seated in meditation inside the yoga hall"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src={img["graduation"]}
              alt="Graduating students celebrating together"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src={img["gallery-meals"]}
              alt="Fresh vegetarian meals served at the school"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className={EYEBROW}>A complete immersion</p>
          <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Live, study, and practice yoga on campus
          </h3>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
            {ttc.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-5">
            {ttc.includes.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path
                      d={CHECK}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-base leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
