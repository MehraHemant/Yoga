// Static imports so Next.js knows each image's size, adds a blur placeholder,
// and serves it with long-lived immutable cache headers.
import type { StaticImageData } from "next/image";
import aarti from "@/public/images/aarti.jpg";
import allianceBamboo from "@/public/images/alliance-bamboo.png";
import ashleighMcconnell from "@/public/images/ashleigh-mcconnell.jpg";
import badgeRcys from "@/public/images/badge-rcys.png";
import badgeRys200 from "@/public/images/badge-rys-200.png";
import badgeRys300 from "@/public/images/badge-rys-300.png";
import badgeRys500 from "@/public/images/badge-rys-500.png";
import badgeYacep from "@/public/images/badge-yacep.png";
import certificates from "@/public/images/certificates.jpg";
import circle from "@/public/images/circle.jpg";
import danielCirilli from "@/public/images/daniel-cirilli.jpg";
import galleryChiangmaiRooms from "@/public/images/gallery-chiangmai-rooms.jpg";
import galleryChiangmaiTtc from "@/public/images/gallery-chiangmai-ttc.jpg";
import galleryMeals from "@/public/images/gallery-meals.jpg";
import galleryRooms from "@/public/images/gallery-rooms.jpg";
import gallerySchool from "@/public/images/gallery-school.jpg";
import galleryTrainings from "@/public/images/gallery-trainings.jpg";
import graduation from "@/public/images/graduation.jpg";
import hero from "@/public/images/hero.jpg";
import heroMobile from "@/public/images/hero-mobile.webp";
import inesViar from "@/public/images/ines-viar.jpg";
import insta1 from "@/public/images/insta-1.jpg";
import insta2 from "@/public/images/insta-2.jpg";
import insta3 from "@/public/images/insta-3.jpg";
import insta4 from "@/public/images/insta-4.jpg";
import lawnClass from "@/public/images/lawn-class.jpg";
import logo from "@/public/images/logo.png";
import meditationHall from "@/public/images/meditation-hall.jpg";
import retreat3Day from "@/public/images/retreat-3-day.jpg";
import retreat7Meditation from "@/public/images/retreat-7-meditation.jpg";
import retreat7Nidra from "@/public/images/retreat-7-nidra.jpg";
import ttc200 from "@/public/images/ttc-200.jpg";
import ttc300 from "@/public/images/ttc-300.jpg";
import ttc500 from "@/public/images/ttc-500.jpg";
import videoIntro from "@/public/images/video-intro.jpg";
import videoTestimonial from "@/public/images/video-testimonial.jpg";
import vladAgachi from "@/public/images/vlad-agachi.jpg";
import yogaAllianceBadges from "@/public/images/yoga-alliance-badges.png";
import yukariYoritomi from "@/public/images/yukari-yoritomi.jpg";

export const img = {
  "aarti": aarti,
  "alliance-bamboo": allianceBamboo,
  "ashleigh-mcconnell": ashleighMcconnell,
  "badge-rcys": badgeRcys,
  "badge-rys-200": badgeRys200,
  "badge-rys-300": badgeRys300,
  "badge-rys-500": badgeRys500,
  "badge-yacep": badgeYacep,
  "certificates": certificates,
  "circle": circle,
  "daniel-cirilli": danielCirilli,
  "gallery-chiangmai-rooms": galleryChiangmaiRooms,
  "gallery-chiangmai-ttc": galleryChiangmaiTtc,
  "gallery-meals": galleryMeals,
  "gallery-rooms": galleryRooms,
  "gallery-school": gallerySchool,
  "gallery-trainings": galleryTrainings,
  "graduation": graduation,
  "hero": hero,
  "hero-mobile": heroMobile,
  "ines-viar": inesViar,
  "insta-1": insta1,
  "insta-2": insta2,
  "insta-3": insta3,
  "insta-4": insta4,
  "lawn-class": lawnClass,
  "logo": logo,
  "meditation-hall": meditationHall,
  "retreat-3-day": retreat3Day,
  "retreat-7-meditation": retreat7Meditation,
  "retreat-7-nidra": retreat7Nidra,
  "ttc-200": ttc200,
  "ttc-300": ttc300,
  "ttc-500": ttc500,
  "video-intro": videoIntro,
  "video-testimonial": videoTestimonial,
  "vlad-agachi": vladAgachi,
  "yoga-alliance-badges": yogaAllianceBadges,
  "yukari-yoritomi": yukariYoritomi,
} satisfies Record<string, StaticImageData>;
