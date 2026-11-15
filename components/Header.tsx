"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact, nav, type NavItem } from "@/lib/content";

const WRAP = "mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12";

function Caret() {
  return (
    <svg
      viewBox="0 0 10 6"
      className="h-1.5 w-2.5 fill-none stroke-current stroke-2"
      aria-hidden="true"
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

const ARROW = "M5 12h14m-5-5l5 5-5 5";

function DropLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="group/link flex items-center justify-between gap-3 rounded-md px-3 py-2 text-base leading-snug text-ink hover:bg-forest/5 hover:text-forest"
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={ARROW} />
        </svg>
      </a>
    </li>
  );
}

function GroupHeading({ heading, href }: { heading: string; href?: string }) {
  const cls =
    "mb-2 block px-3 text-xs font-bold uppercase tracking-widest text-forest";
  return href ? (
    <a href={href} className={`${cls} hover:underline`}>
      {heading}
    </a>
  ) : (
    <span className={cls}>{heading}</span>
  );
}

function DesktopItem({ item, last }: { item: NavItem; last: boolean }) {
  const linkCls =
    "flex items-center gap-1.5 whitespace-nowrap px-3 py-6 text-base font-semibold hover:opacity-75";

  if (!item.groups) {
    return (
      <li>
        <a className={linkCls} href={item.href}>
          {item.label}
        </a>
      </li>
    );
  }

  const wide = item.groups.length > 1;
  const trigger = (
    <>
      {item.label}
      <span className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">
        <Caret />
      </span>
    </>
  );

  // Shared show/hide behaviour: fade + slide down on hover or keyboard focus.
  const reveal =
    "invisible translate-y-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";

  return (
    // Wide menus are positioned against the whole header, single menus against their item.
    <li className={`group ${wide ? "" : "relative"}`}>
      {item.href ? (
        <a className={linkCls} href={item.href} aria-haspopup="true">
          {trigger}
        </a>
      ) : (
        <button
          type="button"
          className={`${linkCls} cursor-pointer`}
          aria-haspopup="true"
        >
          {trigger}
        </button>
      )}

      {wide ? (
        <div className={`absolute inset-x-0 top-full z-10 ${reveal}`}>
          <div className={WRAP}>
            <div className="overflow-hidden rounded-b-lg border-t-2 border-forest bg-white text-ink shadow-2xl ring-1 ring-black/5">
              <div className="grid grid-cols-4 divide-x divide-line p-6">
                {item.groups.map((g, i) => (
                  <div key={i} className="px-3 first:pl-0 last:pr-0">
                    {g.heading && (
                      <GroupHeading heading={g.heading} href={g.href} />
                    )}
                    <ul>
                      {g.links.map((l) => (
                        <DropLink key={l.href} {...l} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 bg-forest/5 px-9 py-4 text-sm">
                <span className="text-muted">
                  Not sure which course is right for you?
                </span>
                <a
                  href={contact.enquire}
                  className="font-semibold text-forest hover:underline"
                >
                  Ask us →
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`absolute top-full z-10 w-80 ${last ? "right-0" : "left-0"} ${reveal}`}
        >
          <div className="rounded-b-lg border-t-2 border-forest bg-white p-3 text-ink shadow-2xl ring-1 ring-black/5">
            {item.groups.map((g, i) => (
              <div key={i}>
                {g.heading && (
                  <div className="pt-2">
                    <GroupHeading heading={g.heading} href={g.href} />
                  </div>
                )}
                <ul>
                  {g.links.map((l) => (
                    <DropLink key={l.href} {...l} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

function MobileItem({ item }: { item: NavItem }) {
  if (!item.groups) {
    return (
      <li className="border-b border-line">
        <a className="block py-4 font-display text-xl" href={item.href}>
          {item.label}
        </a>
      </li>
    );
  }
  return (
    <li className="border-b border-line">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-xl [&::-webkit-details-marker]:hidden">
          {item.label}
          <span className="text-2xl leading-none text-forest group-open:hidden">
            +
          </span>
          <span className="hidden text-2xl leading-none text-forest group-open:inline">
            –
          </span>
        </summary>
        <div className="pb-5">
          {item.href && (
            <a
              className="mb-1 block text-sm font-bold uppercase tracking-wide text-forest"
              href={item.href}
            >
              All {item.label}
            </a>
          )}
          {item.groups.map((g, i) => (
            <div key={i}>
              {g.heading &&
                (g.href ? (
                  <a
                    className="mt-4 block text-sm font-bold uppercase tracking-wide text-forest"
                    href={g.href}
                  >
                    {g.heading}
                  </a>
                ) : (
                  <span className="mt-4 block text-sm font-bold uppercase tracking-wide text-forest">
                    {g.heading}
                  </span>
                ))}
              <ul>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a
                      className="block py-1.5 text-base leading-snug text-muted"
                      href={l.href}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Transparent over the hero photo; solid once the page scrolls or the menu opens.
  const solid = scrolled || open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        solid
          ? "bg-white text-ink shadow-md"
          : "bg-gradient-to-b from-black/55 to-transparent text-white",
      ].join(" ")}
    >
      <div
        className={
          solid ? "hidden" : "hidden border-b border-white/20 nav:block"
        }
      >
        <div className={`${WRAP} flex justify-between py-2 text-sm`}>
          <span>Yoga Alliance USA registered school · Tapovan, Rishikesh</span>
          <span className="flex gap-6">
            <a className="hover:underline" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="hover:underline" href={contact.whatsappHref}>
              {contact.whatsapp} (Whatsapp)
            </a>
            <a className="hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </span>
        </div>
      </div>

      <div className={`${WRAP} flex items-center gap-4`}>
        <Link
          className="flex shrink-0 items-center py-2"
          href="/"
          aria-label="Yoga Vidya Mandiram – home"
        >
          <Image
            src="/images/logo.png"
            alt="Yoga Vidya Mandiram – 200, 300 & 500 Hours Yoga Teacher Training School"
            width={192}
            height={136}
            priority
            className={`h-auto w-21 ${solid ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <nav className="ml-auto hidden nav:block" aria-label="Main">
          <ul className="flex items-center">
            {nav.map((item, i) => (
              <DesktopItem
                key={item.label}
                item={item}
                last={i >= nav.length - 2}
              />
            ))}
          </ul>
        </nav>

        <a
          href={contact.enquire}
          className="hidden shrink-0 rounded-full bg-saffron px-7 py-3 text-base font-bold text-white transition hover:bg-saffron-dark nav:block"
        >
          Enquire
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto cursor-pointer rounded-full border border-current px-5 py-2 text-base font-bold nav:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-19 overflow-y-auto border-t border-line bg-white px-5 pb-12 text-ink sm:px-8 nav:hidden"
        >
          <ul>
            {nav.map((item) => (
              <MobileItem key={item.label} item={item} />
            ))}
          </ul>
          <a
            href={contact.enquire}
            className="mt-6 block rounded-full bg-saffron px-7 py-3 text-center text-lg font-bold text-white"
          >
            Enquire
          </a>
          <div className="mt-6 grid gap-1 text-base">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.whatsappHref}>{contact.whatsapp} (Whatsapp)</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      )}
    </header>
  );
}
