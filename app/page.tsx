import Image from "next/image";
import { img } from "@/lib/images";
import Link from "next/link";
import CourseCards from "@/components/CourseCards";
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";
import TeacherTraining from "@/components/TeacherTraining";
import Testimonials from "@/components/Testimonials";
import Welcome from "@/components/Welcome";
import {
  alliance,
  contact,
  footer,
  gallery,
  googleReviews,
  instagram,
  location,
  faq,
  retreats,
  values,
} from "@/lib/content";

const WRAP = "mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12";
const H2 = "text-4xl sm:text-5xl xl:text-5xl";
const BTN =
  "inline-block rounded-full bg-saffron px-8 py-3.5 text-lg font-bold text-white transition hover:bg-saffron-dark";
const BTN_LINE =
  "inline-block rounded-full border-2 border-ink px-8 py-3 text-lg font-bold text-ink transition hover:bg-ink hover:text-white";
const PROSE = "space-y-5 text-lg leading-relaxed text-ink lg:text-lg";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span
      className={`tracking-wider text-star ${className}`}
      role="img"
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-6 lg:gap-8">
        {/* ───────── Hero: just the photo, filling the first screen ───────── */}
        <section
          className="relative h-svh max-h-275"
          aria-label="Yoga by the Ganga in Rishikesh"
        >
          <Image
            src={img["hero"]}
            alt="Students practising a twisting pose on the sand beside the Ganga in Rishikesh"
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
        </section>

        <Welcome />

        {/* ───────── Our Values ───────── */}
        <section id="values" className="bg-white">
          <div className="relative flex h-64 items-end sm:h-80 xl:h-96">
            <Image
              src={img["circle"]}
              alt="Graduating students lying in a circle on the grass, wearing marigold garlands"
              fill
              placeholder="blur"
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className={`${WRAP} relative pb-10`}>
              <h2 className={`${H2} text-white`}>Our Values</h2>
            </div>
          </div>

          <div className={`${WRAP} py-12 lg:py-16`}>
            <ol className="grid gap-x-12 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
              {values.map((v, i) => (
                <li key={v.title} className="border-t-2 border-saffron pt-6">
                  <span className="font-display text-xl text-saffron-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 mt-1 text-2xl">
                    {v.title}
                    {v.gloss && (
                      <span className="block text-xl text-muted">
                        ({v.gloss})
                      </span>
                    )}
                  </h3>
                  <p className="text-lg leading-relaxed text-ink">{v.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── Yoga Alliance ───────── */}
        <section
          className="relative overflow-hidden bg-white py-14 lg:py-20"
          id="yoga-alliance"
        >
          {/* Bamboo & teapot artwork from the original site */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25 lg:opacity-75"
            aria-hidden="true"
          >
            <Image
              src={img["alliance-bamboo"]}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
            {/* keeps the text on the left readable over the artwork */}
            <div className="absolute inset-y-0 left-0 hidden w-3/5 bg-linear-to-r from-white via-white/85 to-transparent lg:block" />
          </div>

          <div
            className={`${WRAP} relative grid items-center gap-14 lg:grid-cols-12`}
          >
            <div className="lg:col-span-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-saffron-dark">
                Registered Yoga School in Rishikesh
              </p>
              <h2 className={H2}>
                Yoga Alliance{" "}
                <span className="text-saffron-dark">Certification</span>
              </h2>
              <div className={`${PROSE} mt-7`}>
                <p>{alliance.paragraphs[0]}</p>
                <p>{alliance.paragraphs[1]}</p>
              </div>

              <div className="my-8 border border-line bg-white px-5 py-5 sm:px-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-saffron-dark">
                  Yoga Alliance USA
                </p>
                <Image
                  src={img["yoga-alliance-badges"]}
                  alt="Yoga Alliance registration badges: RYS 200, RYS 300, RYS 500, RCYS and YACEP"
                  width={1036}
                  height={167}
                  className="h-auto w-full"
                />
              </div>

              {/* <p className="border-l-4 border-saffron pl-5 text-base leading-relaxed text-ink">
                {alliance.paragraphs[2]}
              </p> */}

              <div className="mt-9 flex flex-wrap gap-4">
                <a className={BTN} href={alliance.readMore}>
                  Read More
                </a>
                <a className={BTN_LINE} href={alliance.about}>
                  About Us
                </a>
              </div>
            </div>

            {/* Certificate photo card */}
            <div className="lg:col-span-6 lg:self-center">
              <div className="relative mx-auto w-full max-w-115 lg:ml-8">
                <div
                  className="absolute inset-3 translate-x-3 translate-y-3 border border-line bg-[#f3eee4]"
                  aria-hidden="true"
                />
                <figure className="group relative border border-line bg-white p-3 pb-0 shadow-[0_28px_60px_-32px_rgba(38,64,26,0.55)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_70px_-30px_rgba(38,64,26,0.6)] sm:p-4">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={img["certificates"]}
                      alt="Four graduates in white holding their Yoga Vidya Mandiram certificates"
                      fill
                      placeholder="blur"
                      sizes="(max-width: 1024px) 100vw, 460px"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <figcaption className="flex items-end justify-between gap-4 px-1 py-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-saffron-dark">
                        Certified graduates
                      </p>
                      <p className="mt-1 font-display text-xl leading-snug text-ink sm:text-2xl">
                        Our graduates, Rishikesh
                      </p>
                    </div>
                    <span
                      className="mb-1 hidden h-px w-12 bg-saffron sm:block"
                      aria-hidden="true"
                    />
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <TeacherTraining />

        {/* ───────── Retreats ───────── */}
        <section className="py-14 lg:py-20" id="retreats">
          <div className={WRAP}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-forest">
                  Yoga retreats
                </p>
                <h2 className={H2}>Yoga Retreats in Rishikesh, India</h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink">
                  {retreats.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {retreats.formats.map((f) => (
                    <li key={f.title} className="rounded-2xl bg-forest/5 p-5">
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <span
                          className="h-2 w-2 shrink-0 rounded-full bg-forest"
                          aria-hidden="true"
                        />
                        {f.title}
                      </h3>
                      <p className="mt-1 text-base leading-relaxed text-muted">
                        {f.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={img["aarti"]}
                    alt="Students lighting oil lamps by the Ganga at dusk"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <p className="absolute inset-x-6 bottom-6 text-white">
                    <span className="block font-display text-xl font-semibold">
                      Evening Ganga Aarti
                    </span>
                    <span className="text-sm text-white/80">
                      Lighting lamps by the river, Rishikesh
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-24">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-5 lg:mb-12">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-bold uppercase tracking-widest text-forest">
                    Find your retreat
                  </p>
                  <h3 className="text-3xl font-semibold sm:text-4xl">
                    Upcoming retreats
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    {retreats.coursesLead}
                  </p>
                </div>
                <a
                  className="group hidden items-center gap-2 text-base font-semibold text-forest sm:inline-flex"
                  href={retreats.all}
                >
                  <span className="underline decoration-forest/30 underline-offset-4 group-hover:decoration-forest">
                    All retreats in Rishikesh
                  </span>
                  <span
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
              <CourseCards
                courses={retreats.courses}
                detailed
                cta="Explore Retreat"
              />
              <p className="mt-10 text-center sm:hidden">
                <a className={BTN} href={retreats.all}>
                  All Retreats in Rishikesh
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ───────── Gallery ───────── */}
        <section className="bg-white py-14 lg:py-20" id="gallery">
          <div className={WRAP}>
            <div className="mx-auto mb-12 px-10 text-center lg:mb-16">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-forest">
                Moments from campus
              </p>
              <h2 className={H2}>Gallery</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {gallery.text}
              </p>
            </div>

            {/*
              Bento grid (desktop, 4 × 3):
              [ A A B C ]
              [ A A D C ]
              [ E F F ★ ]   ★ = "view full gallery" tile
            */}
            <ul className="grid auto-rows-44 grid-cols-2 gap-3 sm:auto-rows-56 sm:gap-4 lg:auto-rows-60 lg:grid-cols-4">
              {gallery.albums.map((a, i) => {
                const comma = a.title.lastIndexOf(",");
                const name = comma > 0 ? a.title.slice(0, comma) : a.title;
                const place = comma > 0 ? a.title.slice(comma + 1).trim() : "";
                const span =
                  [
                    "col-span-2 row-span-2",
                    "",
                    "row-span-2",
                    "",
                    "",
                    "col-span-2",
                  ][i] ?? "";
                const big = i === 0;
                return (
                  <li key={a.href} className={span}>
                    <a
                      href={a.href}
                      className="group relative block h-full overflow-hidden rounded-lg"
                    >
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        placeholder="blur"
                        sizes={
                          big
                            ? "(max-width: 1024px) 100vw, 50vw"
                            : "(max-width: 1024px) 50vw, 25vw"
                        }
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      />
                      <span
                        className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"
                        aria-hidden="true"
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur sm:right-4 sm:top-4">
                        {a.count} photos
                      </span>
                      <span className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                        {/* {place && (
                          <span className="mb-1 flex items-center gap-1 text-xs font-semibold text-white/80 sm:text-sm">
                            <svg
                              viewBox="0 0 24 24"
                              className="h-3.5 w-3.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              <path d="M12 21s6.5-5.8 6.5-11.2a6.5 6.5 0 10-13 0C5.5 15.2 12 21 12 21zm0-8.5a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z" />
                            </svg>
                            {place}
                          </span>
                        )} */}
                        <span
                          className={`flex items-end justify-between gap-3 font-display font-semibold leading-snug ${big ? "text-xl sm:text-2xl" : "text-base sm:text-xl"}`}
                        >
                          {name}
                          {/* <span
                            className="hidden h-9 w-9 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white text-base text-forest opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex"
                            aria-hidden="true"
                          >
                            ↗
                          </span> */}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}

              {/* ★ tile */}
              <li className="col-span-2 lg:col-span-1">
                <a
                  href={gallery.href}
                  className="group flex h-full flex-col justify-between rounded-lg bg-forest p-6 text-white transition hover:bg-forest-dark"
                >
                  <span className="font-display text-5xl font-semibold leading-none">
                    {gallery.albums.reduce((n, a) => n + a.count, 0)}+
                    <span className="mt-2 block text-base font-medium text-white/75">
                      photos across {gallery.albums.length} albums
                    </span>
                  </span>
                  <span className="flex items-center justify-between text-base font-semibold">
                    View full gallery
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest transition group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* ───────── Testimonials ───────── */}
        <section className="bg-white py-14 lg:py-20" id="testimonials">
          <div className={WRAP}>
            <div className="mb-10 lg:mb-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-forest">
                Student stories
              </p>
              <h2 className={H2}>Our Testimonials</h2>
            </div>
            <Testimonials />

            <div className="mt-20">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-line pb-6">
                <div>
                  <h3 className="text-3xl">Yoga Vidya Mandiram</h3>
                  <p className="mt-1 text-lg">
                    <Stars className="text-xl" />{" "}
                    <strong>{googleReviews.count}</strong>
                  </p>
                </div>
                <a className={BTN_LINE} href={googleReviews.write}>
                  Write a review
                </a>
              </div>
              <Reviews />
            </div>
          </div>
        </section>

        {/* ───────── Instagram ───────── */}
        <section className="py-14 lg:py-20" id="instagram">
          <div className={WRAP}>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-8 lg:mb-12">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-forest">
                  Follow along
                </p>
                <h2 className={H2}>Explore Special Moments on Instagram</h2>
              </div>

              {/* Profile card */}
              <a
                href={instagram.href}
                className="group flex items-center gap-4 rounded-2xl p-3 pr-5 ring-1 ring-line transition hover:shadow-lg"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-forest/20">
                  <Image
                    src={img["logo"]}
                    alt=""
                    width={192}
                    height={136}
                    className="h-auto w-12"
                  />
                </span>
                <span className="leading-snug">
                  <span className="block text-lg font-semibold">
                    @{instagram.handle}
                  </span>
                  <span className="block text-sm text-muted">
                    {instagram.bio[0]}
                  </span>
                </span>
                <span className="ml-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-forest-dark">
                  Follow
                </span>
              </a>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {instagram.posts.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="group block">
                    <span className="relative block aspect-square overflow-hidden rounded-2xl">
                      <Image
                        src={p.image}
                        alt={p.caption[0]}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span
                        className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition duration-300 group-hover:bg-black/35 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-9 w-9"
                          fill="currentColor"
                        >
                          <path
                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm4.2 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.3-3.3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="mt-3 line-clamp-2 break-words text-sm leading-relaxed text-ink sm:text-base">
                      {p.caption.join(" ")}
                      {p.tags && <span className="text-link"> {p.tags}</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Map (full width) ───────── */}
        <section
          id="location"
          className="relative"
          aria-label="Find us on the map"
        >
          <iframe
            src={location.embed}
            title="Map showing Yoga Vidya Mandiram in Tapovan, Rishikesh"
            className="block h-96 w-full border-0 lg:h-130"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none lg:absolute lg:inset-0">
            <div className={`${WRAP} flex h-full items-center lg:justify-end`}>
              <div className="pointer-events-auto w-full rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 max-lg:-mt-16 max-lg:relative sm:p-8 lg:w-96">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-forest">
                  Visit us
                </p>
                <h2 className="text-2xl font-semibold">
                  Find us in Tapovan, Rishikesh
                </h2>
                <address className="mt-4 text-base not-italic leading-relaxed text-muted">
                  {contact.address.join(" ")}
                </address>
                <ul className="mt-5 space-y-2 text-base">
                  <li>
                    <a
                      className="hover:text-forest hover:underline"
                      href={contact.phoneHref}
                    >
                      {contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-forest hover:underline"
                      href={contact.whatsappHref}
                    >
                      {contact.whatsapp} (WhatsApp)
                    </a>
                  </li>
                  <li>
                    <a
                      className="break-all hover:text-forest hover:underline"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                  </li>
                </ul>
                <a
                  href={location.directions}
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-base font-semibold text-white transition hover:bg-forest-dark"
                >
                  Get directions <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="py-14 lg:py-20" id="faq">
          <div className={`${WRAP} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-forest">
                  FAQ
                </p>
                <h2 className={H2}>Frequently asked questions</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  Everything you need to know before you join us in Rishikesh.
                  Can&apos;t find your answer? We&apos;re happy to help.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={contact.whatsappHref}
                    className="rounded-full bg-forest px-6 py-3 text-base font-semibold text-white transition hover:bg-forest-dark"
                  >
                    Ask on WhatsApp
                  </a>
                  <a
                    href={faq.href}
                    className="rounded-full border-2 border-forest px-6 py-2.5 text-base font-semibold text-forest transition hover:bg-forest hover:text-white"
                  >
                    All FAQs
                  </a>
                </div>
              </div>
            </div>

            <div className="divide-y divide-line border-y border-line lg:col-span-8">
              {faq.items.map((item, i) => (
                <details
                  key={item.q}
                  name="faq"
                  className="group"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold transition hover:text-forest sm:text-xl [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/5 text-xl text-forest transition duration-300 group-open:rotate-45 group-open:bg-forest group-open:text-white"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-14 text-base leading-relaxed text-muted sm:text-lg">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ───────── Footer ───────── */}
      <footer className="border-t border-line bg-white text-ink">
        <div
          className={`${WRAP} grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20`}
        >
          <div className="lg:col-span-5">
            <Image
              src={img["logo"]}
              alt="Yoga Vidya Mandiram – Yoga Is Samadhi"
              width={192}
              height={136}
              className="mb-6 h-auto w-37.5"
            />
            <div className="max-w-xl space-y-4 text-lg leading-relaxed text-muted">
              {footer.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-2xl">Important Links</h3>
            <ul className="space-y-2.5 text-lg">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <a
                    className="hover:text-saffron-dark hover:underline"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-10 text-2xl">Find us on</h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-lg">
              {footer.social.map((s) => (
                <li key={s.href}>
                  <a
                    className="hover:text-saffron-dark hover:underline"
                    href={s.href}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-5 text-2xl">Contact Us</h3>
            <ul className="space-y-2.5 text-lg">
              <li>
                <a
                  className="hover:text-saffron-dark hover:underline"
                  href={contact.phoneHref}
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-saffron-dark hover:underline"
                  href={contact.whatsappHref}
                >
                  {contact.whatsapp} (Whatsapp)
                </a>
              </li>
              <li>
                <a
                  className="hover:text-saffron-dark hover:underline"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-saffron-dark hover:underline"
                  href="/"
                >
                  {contact.web}
                </Link>
              </li>
            </ul>
            <address className="mt-6 border-t border-line pt-6 text-lg not-italic leading-relaxed text-muted">
              {contact.address.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
        <div className="border-t border-line">
          <p className={`${WRAP} py-5 text-base text-muted`}>
            {footer.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
