// All copy on the landing page lives here, taken from yogavidyamandiram.com.
// Links point at the live site until the inner pages are rebuilt.

import type { StaticImageData } from "next/image";
import { img } from "@/lib/images";

export const SITE = "https://yogavidyamandiram.com";

export type NavLink = { label: string; href: string };
export type NavGroup = { heading?: string; href?: string; links: NavLink[] };
export type NavItem = { label: string; href?: string; groups?: NavGroup[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Yoga TTC",
    groups: [
      {
        heading: "Yoga TTC in Rishikesh, India",
        href: `${SITE}/yoga-teacher-training-in-india-2/`,
        links: [
          {
            label: "50 Hour Yoga TTC in Rishikesh",
            href: `${SITE}/50-hour-yoga-teacher-training-in-rishikesh-india/`,
          },
          {
            label: "100 Hour Yoga TTC in Rishikesh",
            href: `${SITE}/100-hour-yoga-teacher-training-in-rishikesh-india/`,
          },
          {
            label: "200 Hour Yoga TTC in Rishikesh",
            href: `${SITE}/200-hour-yoga-teacher-training-in-rishikesh-india/`,
          },
          {
            label: "300 Hour Yoga TTC in Rishikesh",
            href: `${SITE}/300-hour-yoga-teacher-training-in-rishikesh-india/`,
          },
          {
            label: "500 Hour Yoga TTC in Rishikesh",
            href: `${SITE}/500-hour-yoga-teacher-training-in-rishikesh-india/`,
          },
        ],
      },
      {
        heading: "Yoga TTC in Thailand",
        href: `${SITE}/yoga-teacher-training-in-chiangmai/`,
        links: [
          {
            label: "50 Hour Yoga TTC in Chiang Mai",
            href: `${SITE}/50-hour-yoga-teacher-training-in-chiang-mai-thailand/`,
          },
          {
            label: "100 Hour Yoga TTC in Chiang Mai",
            href: `${SITE}/100-hour-yoga-teacher-training-in-chiang-mai-thailand/`,
          },
          {
            label: "200 Hour Yoga TTC in Chiang Mai",
            href: `${SITE}/200-hour-yoga-teacher-training-in-chiang-mai-thailand/`,
          },
          {
            label: "300 Hour Yoga TTC in Chiang Mai",
            href: `${SITE}/300-hour-yoga-teacher-training-in-chiang-mai-thailand/`,
          },
          {
            label: "500 Hour Yoga TTC in Chiang Mai",
            href: `${SITE}/500-hour-yoga-teacher-training-in-chiang-mai-thailand/`,
          },
        ],
      },
      {
        heading: "Yoga TTC Dharamshala, India",
        links: [
          {
            label: "200 Hour Yoga TTC in Dharamshala",
            href: `${SITE}/200-hour-yoga-teacher-training-in-dharamshala-india/`,
          },
        ],
      },
      {
        heading: "Special Course",
        links: [
          {
            label:
              "200 Hours Kundalini Yoga Teacher Training in Rishikesh India",
            href: `${SITE}/200-hour-kundalini-yoga-teacher-training-in-rishikesh-india/`,
          },
          {
            label: "200 Hour Yoga TTC in Spanish",
            href: `${SITE}/200-hour-yoga-teacher-training-in-rishikesh-espanol/`,
          },
          {
            label: "Yoga teacher training Events",
            href: `${SITE}/yoga-teacher-training-events/`,
          },
        ],
      },
    ],
  },
  {
    label: "Yoga Retreats",
    href: `${SITE}/yoga-retreats-in-rishikesh/`,
    groups: [
      {
        links: [
          {
            label:
              "3 Days Himalayan Meditation & Yoga Retreat In Rishikesh, India",
            href: `${SITE}/3-days-himalayan-meditation-yoga-retreat-in-rishikesh-india/`,
          },
          {
            label: "7 Days Yoga Nidra Retreat in Rishikesh, India",
            href: `${SITE}/7-days-yoga-nidra-retreat-in-rishikesh/`,
          },
          {
            label: "7 Days Yoga & Meditation Retreat in Rishikesh, India",
            href: `${SITE}/7-days-yoga-meditation-retreat-in-rishikesh/`,
          },
          {
            label: "7 Days Breath & Pranayama in Rishikesh, India",
            href: `${SITE}/7-days-breath-pranayama-retreat-in-rishikesh-india/`,
          },
          {
            label: "10 Days Sun Salutation Retreat in Rishikesh, India",
            href: `${SITE}/10-days-sun-salutation-retreat-in-rishikesh-india/`,
          },
          {
            label: "7 Days Yoga & Ayurveda Retreat in Rishikesh, India",
            href: `${SITE}/7-days-yoga-ayurveda-retreat-in-rishikesh/`,
          },
          {
            label: "14 Days Yoga & Ayurveda Retreat in Rishikesh, India",
            href: `${SITE}/14-days-ayurveda-retreat-in-rishikesh-india/`,
          },
        ],
      },
    ],
  },
  {
    label: "Online Classes",
    groups: [
      {
        links: [
          {
            label: "3-7 Days (1 Hr/Day)",
            href: `${SITE}/3-5-7-days-yoga-retreat-online-course/`,
          },
          {
            label: "3-7 Days (1.5 Hrs/Day)",
            href: `${SITE}/3-5-7-days-online-yoga-meditation-retreat-course/`,
          },
          {
            label: "50 Hrs Yoga Teacher Training",
            href: `${SITE}/online-50-hour-teacher-training-courses-in-india/`,
          },
          {
            label: "100 Hrs Yoga Teacher Training",
            href: `${SITE}/100-hours-online-yoga-teacher-training-in-india/`,
          },
        ],
      },
    ],
  },
  {
    label: "Our School",
    href: `${SITE}/about-us/`,
    groups: [
      {
        links: [
          { label: "About Yoga Vidya Mandiram", href: `${SITE}/about-us/` },
          { label: "About Yoga Alliance", href: `${SITE}/yoga-alliance-3/` },
          { label: "Our Policies", href: `${SITE}/rules-and-regulations/` },
          { label: "Our Teachers", href: `${SITE}/teachers/` },
          { label: "Blog", href: `${SITE}/yoga-blog/` },
        ],
      },
    ],
  },
  {
    label: "Testimonials",
    href: `${SITE}/yoga-teacher-training-india-testimonial/`,
  },
  { label: "Gallery", href: `${SITE}/gallery/` },
  {
    label: "Contact",
    groups: [
      {
        links: [
          { label: "Enquire", href: `${SITE}/contact/` },
          { label: "Frequently Asked Questions", href: `${SITE}/faq/` },
        ],
      },
    ],
  },
];

export const contact = {
  phone: "+91 63951 26300",
  phoneHref: "tel:+916395126300",
  whatsapp: "+91 90123 97995",
  whatsappHref: "https://wa.me/919012397995",
  email: "yogavidyamandiram@gmail.com",
  web: "www.yogavidyamandiram.com",
  address: [
    "Yoga Vidya Mandiram -",
    "Near Bhandari Swiss Cottage,",
    "Bypass Road,",
    "Tapovan, Rishikesh,",
    "Uttarakhand,",
    "India - 249192",
  ],
  enquire: `${SITE}/contact/`,
};

export const welcome = {
  kicker: "Welcome to our yoga school in Rishikesh",
  paragraphs: [
    "Yoga Vidya Mandiram is a registered yoga school in Rishikesh, located in the peaceful Himalayan valley along the sacred River Ganga. Recognized as one of the best yoga schools in Rishikesh, our school is committed to preserving and imparting the purest traditional forms of yoga and its science, offering a holistic approach that resonates with students from both Eastern and Western cultures. Our school provides a warm and supportive environment where you can explore yoga not only as exercise, but as a way of life that brings balance, peace, and harmony to body, mind, and spirit.",
    "At our yoga school in Rishikesh, we honor the ancient teachings of the Himalayan masters while also making them simple and practical for modern living. Our teachers share yoga and meditation in a way that is easy to understand, even for complete beginners, while also offering depth for experienced practitioners. This blend of traditional wisdom and modern approach helps students connect with yoga on a personal level and carry its benefits into daily life.",
    "We believe yoga is for everyone, regardless of age, background, or experience. That’s why at our school we focus on kindness, inclusivity, and universal values such as peace, love, and compassion. For us, yoga is not just about postures, but about creating a deeper connection with yourself and with others around you.",
    "Choosing to study at one of the best yoga schools in Rishikesh means more than just joining classes—it’s about starting a personal journey of growth and transformation. At Yoga Vidya Mandiram, we warmly invite you to experience this journey with us and discover the true essence of yoga in the heart of Rishikesh.",
  ],
  videoId: "FD_eK2pNgr0",
  videoPoster: img["video-intro"],
};

export const values = [
  {
    title: "Ahimsa",
    gloss: "Non-Violence",
    text: "Practicing non-violence in thoughts, words, and actions is an essential aspect of our sadhana (spiritual practice). Whether in personal life or professional responsibilities at the school, it is important that we carry the values of ahimsa in our hearts and embody them in all that we do.",
  },
  {
    title: "Seva / Karma Yoga",
    gloss: "Selfless Service",
    text: "We strive to practice selfless service as a part of our sadhana (spiritual practice). At school, we aim to carry out our daily duties with the spirit of Seva, serving wholeheartedly without attachment to recognition or personal gain, and keeping the essence of Karma Yoga alive in our hearts.",
  },
  {
    title: "Lifelong Study & Practice",
    gloss: "",
    text: "Yoga holds vast ancient wisdom that requires patience and time. Our staff and teachers, as well as students, are encouraged to continue lifelong studies and practices, aiming to achieve the ultimate goal of life through yoga.",
  },
  {
    title: "Sadhana",
    gloss: "Spiritual Practice",
    text: "Spiritual practice is the essence of yoga. We put our best efforts to practice sadhana in our thoughts, actions, words and emotions through the practice of ahimsa, seva and continuous yoga studies and practices.",
  },
  {
    title: "Samadhi",
    gloss: "Enlightenment",
    text: "Yoga holds different meaning to each person and we may hold different purpose in studying yoga. No matter the reason behind your interest, the goal of yoga is to uplift your spirits, bring your mind to a higher consciousness and ultimately reach a state of “samadhi” (enlightenment).",
  },
  {
    title: "Equity to All",
    gloss: "",
    text: "We strive to understand and provide yoga education to students on where they stand, such as in pace, education, age, gender, belief or individual needs, to the best of our capabilities to ensure each unique individual receive the most and truest form of yoga we hope to offer.",
  },
  {
    title: "Yoga Family",
    gloss: "",
    text: "All staff, teachers and students at Yoga Vidya Mandiram are viewed as a family member and we care for and look after each other as a family would. We work together with honesty, respect and understanding for each one of our members.",
  },
  {
    title: "Harmonious Living",
    gloss: "",
    text: "We believe that yoga brings harmony in life in all aspect. Walking the path of yoga should bring balance to your life - physical, mental, emotional, social, environmental, or any other aspects. It brings unity between people of various differences and uniqueness.",
  },
];

export const alliance = {
  paragraphs: [
    "With so many Yoga TTC in Rishikesh available, it could be challenging to find the best Yoga School in Rishikesh for your studies. Your first goal would be to look for the standard that the school is registered under. In this regard, the Yoga Alliance standard is one of the largest and most recognized yoga standards worldwide.",
    "In terms of certification, our yoga school is a Registered Yoga School in Rishikesh (RYS) – RYS200, RYS300, RYS500 – , Registered Children Yoga School (RCYS) and a Yoga Alliance Continuing Education Provider (YACEP) under Yoga Alliance (USA). Our yoga courses are valid as Continuing Education (CE) training hours for those already registered as Registered Yoga Teacher (RYT) under Yoga Alliance.",
    "Yoga Vidya Mandiram would like to encourage all students to take the course with a goal to improve their personal practices and not just focused on obtaining a certificate. Nevertheless, certificate is important and practical in this modern time if you hope to share your knowledge and experience of yoga. Therefore, a certificate will be handed out upon completion of your course following School Policy and Code of Conduct.",
  ],
  readMore: `${SITE}/yoga-alliance-3/`,
  about: `${SITE}/about-us/`,
};

export type Course = {
  title: string;
  href: string;
  price: string;
  days: string;
  daysHref: string;
  level: string;
  levelHref: string;
  image: StaticImageData;
  hours?: string;
  tag?: string;
  /** Short name of the path, shown above the title (e.g. "Foundation Teacher Training"). */
  subtitle?: string;
  summary?: string;
  highlights?: string[];
  certification?: string;
};

export const ttc = {
  lead: "A fully residential Yoga Alliance program in the Himalayan valley — for certified teachers and sincere seekers alike.",
  intro: [
    "Rishikesh, the yoga capital of the world, is the ideal place to begin or deepen your journey. Our Yoga TTC immerses you in authentic study and practice, with the structure and traditional environment to support lasting growth.",
  ],
  levelsLead: "Three paths. One authentic tradition.",
  levels: [
    {
      hours: "200",
      name: "Foundation Teacher Training",
      text: "Beginner-friendly and open to all who wish to learn yoga systematically and build a strong foundation.",
    },
    {
      hours: "300",
      name: "Advanced Teacher Training",
      text: "For graduates of the 200-hour course who want to expand their knowledge, practice, and teaching skills.",
    },
    {
      hours: "500",
      name: "Complete Teacher Training",
      text: "A combined advanced path for dedicated students ready to live yoga as a lifestyle and teaching vocation.",
    },
  ],
  includes: [
    {
      title: "Campus stay",
      text: "Shared or private rooms on campus so you can rest, study, and live yoga without leaving the school.",
    },
    {
      title: "Yogic meals",
      text: "Three nourishing lacto-vegetarian meals each day, prepared to support practice and recovery.",
    },
    {
      title: "Himalayan excursions",
      text: "Weekly outings to caves, waterfalls, or temples — destinations may vary with the season.",
    },
    {
      title: "Ganga Aarti & riverside yoga",
      text: "One evening of Ganga Aarti and a riverside practice when the weather allows.",
    },
    {
      title: "Indoor yoga shala",
      text: "Dedicated hall space for asana, pranayama, philosophy, and meditation throughout the course.",
    },
  ],
  curriculumLead:
    "Every day balances asana, breath, philosophy, and stillness — so practice becomes a way of living, not only a sequence on the mat.",
  curriculum: [
    {
      name: "Pranayama",
      text: "Breath practices that steady the mind and awaken vital energy.",
    },
    {
      name: "Yoga Philosophy",
      text: "Classical teachings that give depth and meaning to your practice.",
    },
    {
      name: "Yoga Anatomy",
      text: "Safe alignment and an embodied understanding of how the body moves.",
    },
    {
      name: "Hatha Yoga",
      text: "Foundational postures practiced with awareness, patience, and breath.",
    },
    {
      name: "Ashtanga Yoga",
      text: "Dynamic sequenced practice that builds strength, focus, and discipline.",
    },
    {
      name: "Yoga Nidra",
      text: "Guided deep rest for nervous-system recovery and inner quiet.",
    },
    {
      name: "Meditation",
      text: "Simple, sincere methods to cultivate presence and clarity.",
    },
    {
      name: "Ayurveda",
      text: "Foundations of lifestyle wisdom for balance of body and mind.",
    },
    {
      name: "Sound Healing",
      text: "Resonance and vibration as support for relaxation and awareness.",
    },
  ],
  body: [
    "This is not just a set of classes — it is a complete residential experience. Students live on campus throughout the training, staying fully focused on learning, practicing, and living yoga without distractions.",
    "Whether you aim to teach or simply explore yoga in depth, you leave with a Yoga Alliance recognized certificate and the lived experience of studying where these traditions have been passed down for centuries.",
  ],
  coursesLead:
    "Residential Yoga Alliance programs in Tapovan — accommodation, meals, and excursions included.",
  courses: [
    {
      title: "200 Hours Yoga Teacher Training in Rishikesh",
      href: `${SITE}/dt_courses/200-hour-yoga-teacher-training-in-rishikesh/`,
      price: "$ 595",
      days: "22 Days",
      daysHref: `${SITE}/dt_yoga_days/22-days/`,
      level: "Beginner - Intermediate",
      levelHref: `${SITE}/dt_yoga_stages/beginner-intermediate/`,
      image: img["ttc-200"],
      hours: "200",
      summary:
        "Build a strong foundation in asana, pranayama, philosophy, and teaching skills — ideal for beginners and dedicated practitioners.",
      highlights: [
        "Yoga Alliance RYS 200 certificate",
        "Hatha & Ashtanga foundations",
        "Stay, meals & weekly excursions",
      ],
      certification: "RYS 200",
    },
    {
      title: "300 Hour Yoga Teacher Training in Rishikesh",
      href: `${SITE}/dt_courses/300-hour-yoga-ttc-in-rishikesh/`,
      price: "$ 705",
      days: "28 Days",
      daysHref: `${SITE}/dt_yoga_days/28-days/`,
      level: "Intermediate - Advance",
      levelHref: `${SITE}/dt_yoga_stages/intermediate-advance/`,
      image: img["ttc-300"],
      hours: "300",
      summary:
        "Deepen your practice and teaching after the 200-hour course with advanced study, refinement, and greater personal sadhana.",
      highlights: [
        "For 200-hour graduates",
        "Advanced asana & philosophy",
        "Stay, meals & weekly excursions",
      ],
      certification: "RYS 300",
    },
    {
      title: "500 Hour Yoga Teacher Training in Rishikesh",
      href: `${SITE}/dt_courses/500-hour-yoga-ttc-in-rishikesh/`,
      price: "$ 1300",
      days: "50 Days",
      daysHref: `${SITE}/dt_yoga_days/50-days/`,
      level: "Beginner - Advance",
      levelHref: `${SITE}/dt_yoga_stages/beginner-advance/`,
      image: img["ttc-500"],
      hours: "500",
      summary:
        "A complete combined path — foundation through advanced training for those ready to live and teach yoga with full commitment.",
      highlights: [
        "Yoga Alliance RYS 500 certificate",
        "200 + 300 hour combined path",
        "Stay, meals & weekly excursions",
      ],
      certification: "RYS 500",
    },
  ] as Course[],
  all: `${SITE}/yoga-teacher-training-in-india-2/`,
};

export const retreats = {
  // Condensed from the original four paragraphs; same meaning, easier to scan.
  intro: [
    "Nestled between the Himalayas and the sacred River Ganges, Rishikesh — the Yoga Capital of the World — is a natural home for self-reflection, inner growth, and community practice. A retreat here is more than a set of classes: you get to live the traditions, teachings, and lifestyle that have guided yoga seekers for centuries.",
    "Each retreat follows a theme, such as meditation, pranayama, yoga nidra, or yoga philosophy. Daily practice is paired with visits to sacred sites and quiet time in nature, so whether you come for stress relief, a stronger self-practice, or inner peace, you leave with teachings you can carry into everyday life.",
  ],
  formats: [
    {
      title: "3-day introductions",
      text: "A short, gentle start to rest, reset, and practice.",
    },
    {
      title: "5 & 7-day themed retreats",
      text: "Immersions in meditation, pranayama, yoga nidra, or philosophy.",
    },
    {
      title: "7 & 14-day Ayurveda retreats",
      text: "Yoga and Ayurveda together for harmony of body and mind.",
    },
    {
      title: "Yoga Alliance CE hours",
      text: "Retreats count as Continuing Education for registered teachers.",
    },
  ],
  coursesLead:
    "Short immersions by the Ganga — theme-based retreats for rest, renewal, and deeper practice.",
  courses: [
    {
      title: "3 Days Meditation & Yoga Retreat In Rishikesh",
      href: `${SITE}/dt_courses/3-days-himalayan-meditation-yoga-retreat-in-rishikesh-india/`,
      price: "$ 99",
      days: "3 Days",
      daysHref: `${SITE}/dt_yoga_days/3-days/`,
      level: "Beginner",
      levelHref: `${SITE}/dt_yoga_stages/beginner/`,
      image: img["retreat-3-day"],
      tag: "Meditation",
      summary:
        "A gentle Himalayan introduction — daily yoga, meditation, and quiet time to reset body and mind in Rishikesh.",
      highlights: [
        "Ideal short escape for beginners",
        "Daily asana & guided meditation",
        "Peaceful Tapovan campus stay",
      ],
    },
    {
      title: "7 Days Yoga & Meditation Retreat in Rishikesh",
      href: `${SITE}/dt_courses/7-days-yoga-meditation-retreat-in-rishikesh/`,
      price: "$ 399",
      days: "7 Days",
      daysHref: `${SITE}/dt_yoga_days/7-days/`,
      level: "Beginner",
      levelHref: `${SITE}/dt_yoga_stages/beginner/`,
      image: img["retreat-7-meditation"],
      tag: "Yoga & Meditation",
      summary:
        "A full week of practice, stillness, and Himalayan atmosphere — deepen your self-practice without the intensity of a TTC.",
      highlights: [
        "Balanced daily yoga & meditation",
        "Counts as Yoga Alliance CE hours",
        "Meals, stay & serene surroundings",
      ],
    },
    {
      title: "7 Days Yoga Nidra Retreat in Rishikesh, India",
      href: `${SITE}/dt_courses/7-days-yoga-nidra-retreat-in-rishikesh/`,
      price: "$ 399",
      days: "7 Days",
      daysHref: `${SITE}/dt_yoga_days/7-days/`,
      level: "Beginner",
      levelHref: `${SITE}/dt_yoga_stages/beginner/`,
      image: img["retreat-7-nidra"],
      tag: "Yoga Nidra",
      summary:
        "Restore through Yoga Nidra — guided deep rest, gentle yoga, and practices that calm the nervous system.",
      highlights: [
        "Focus on Yoga Nidra & deep rest",
        "Gentle asana for all levels",
        "Counts as Yoga Alliance CE hours",
      ],
    },
  ] as Course[],
  all: `${SITE}/yoga-retreats-in-rishikesh/`,
};

export const gallery = {
  text: "Discover cherishable moments and unforgettable experiences from our Yoga Teacher Training courses at Yoga Vidya Mandiram in Rishikesh, India. From serene Himalayan mornings and guided meditation sessions to transformative yoga practices and community living, every moment at our yoga school is designed to nurture growth, balance, and inner peace.",
  href: `${SITE}/gallery/`,
  albums: [
    {
      title: "Yoga Trainings & Retreats, Rishikesh",
      count: 9,
      href: `${SITE}/dt_portfolio/yoga-trainings-retreats/`,
      image: img["gallery-trainings"],
      w: 2048,
      h: 1363,
    },
    {
      title: "Meals & Dining Area, Rishikesh",
      count: 15,
      href: `${SITE}/dt_portfolio/meals/`,
      image: img["gallery-meals"],
      w: 1205,
      h: 904,
    },
    {
      title: "School Area, Rishikesh",
      count: 11,
      href: `${SITE}/dt_portfolio/school-area/`,
      image: img["gallery-school"],
      w: 2048,
      h: 1536,
    },
    {
      title: "Student Accommodation, Rishikesh",
      count: 16,
      href: `${SITE}/dt_portfolio/student-accommodation/`,
      image: img["gallery-rooms"],
      w: 1280,
      h: 960,
    },
    {
      title: "Yoga Teacher Trainings, Chiangmai",
      count: 9,
      href: `${SITE}/dt_portfolio/yoga-teacher-trainings/`,
      image: img["gallery-chiangmai-ttc"],
      w: 900,
      h: 675,
    },
    {
      title: "Student Accommodation, Chiangmai",
      count: 9,
      href: `${SITE}/dt_portfolio/student-accommodation-2/`,
      image: img["gallery-chiangmai-rooms"],
      w: 1024,
      h: 768,
    },
  ],
};

export type Story = {
  title?: string;
  text: string[];
  name: string;
  course: string;
  date: string;
  image?: StaticImageData;
};

export const testimonials: {
  videoId: string;
  videoPoster: StaticImageData;
  more: string;
  stories: Story[];
} = {
  videoId: "TpAJcn-ZHOc",
  videoPoster: img["video-testimonial"],
  more: `${SITE}/yoga-teacher-training-india-testimonial/`,
  stories: [
    {
      title: "Wonderful 500hr TTC",
      text: [
        "I liked everything about this school, all the staff is very spiritual, the founder was educated in a Gurukul, so they have the seeking of the higher Self. The teachers are amazing, full of love and understanding, they are always available whenever you need them. The volunteers who work at the center did everything in their power to adjust everyone. The accomodation was very good and the food was always abundant. The knowledge you get here is amazing, the teachings of Pranayama, philosophy, anatomy apart from the hard asana practice. The course is amazing really and a very good value for my money.",
        "It is so difficult to find something not to like here. Maybe the fact that the food can be quite unvaried. Also, sometimes a bit too spicy for my taste. Also, for people who have trouble sleeping because of noise, it can get noisy sometimes, although it is nothing compared to the city.",
      ],
      name: "Vlad Agachi",
      course: "500 Hour Yoga TTC",
      date: "March 2020",
      image: img["vlad-agachi"],
    },
    {
      title: "One of the best experiences of my life",
      text: [
        "Everything here was absolutely phenomenal. From the second I arrived, Lalit and Nandan made sure that all my bags and room were taken care of immediately and I got a little tour of the sanctuary that I would call home for the next three weeks. They were always there to greet us with smiles and warmth throughout the day and went above and beyond to make us feel at home and help if we had any problems. I only wish my real home has as good of food as I had there! I think most of us wanted recipes and a cookbook at the end because the food was so delicious.",
        "Although the schedule was busy, there was still enough time to rest and enjoy the nice garden, do some laundry, run into town, or get additional guidance from Saurabh. His extra availability, warmth, and humor were reassuring during sometimes challenging classes and he is a fantastic teacher. In hindsight, I think I knew nearly nothing about the philosophy, anatomy, pranayama, and meditation prior to this course and I definitely left with a wealth of knowledge and a great foundation to build upon. I only wish I could have stayed longer. It was truly a paradise and I hope to return one day.",
      ],
      name: "Melissa Sharp",
      course: "200 Hour Yoga TTC",
      date: "December 2019",
    },
    {
      text: [
        "I did my 200-hour YTT in November and I would honestly do it all over again tomorrow. I remember the first day, they asked us what we expected from the course, and everyone had different reasons for being there, but I think YVM exceeded all of them. We were a small family and YVM was our second home (and still is). Everyone there went out of their way to make sure that we felt that way, especially Lalit and Nandan. Need an ATM? They’ll drive you anytime. Want a haircut? They’ll take you to their favourite barber. Fancy some sweets at night? They’ll happily go with you to buy some. When I say that they go out of their way, I really mean it. We could count on them 24/7 for anything and they took care of us, always with a smile on their face.",
        "Accommodation was great, the rooms were clean and they changed the sheets and towels every 3-4 days. Food was delicious and the kitchen staff is also very helpful. The school is outside of Tapovan, so you are not in the middle of the town, which we appreciated. It has a very nice garden and a peaceful atmosphere, but still a short walk from the town.",
        "I don’t know the other schools in the area, but I’m very happy I chose YVM for my course. You can feel the Yogi energy and peace everywhere, and I hadn’t laughed so much in a while! The whole experience was perfect and I will always carry in my heart these 3 weeks and the family we created there. Love you all!",
      ],
      name: "Ines Viar",
      course: "200 Hour Yoga TTC",
      date: "November 2019",
      image: img["ines-viar"],
    },
    {
      text: [
        "I loved the stay here for 7 days yoga and meditation retreat. Although Rishikesh could be a quite touristy city, the school is in a quiet area where I could focus on the course. The teachers are knowledgeable enough to answer to the questions, I enjoyed doing not only physical training but also learning proper breathing techniques, philosophy behind yoga and so on. The schedule also worked for me, I learned a lot in a whole day but at the same time I had enough time for self-study for almost 3 hours per day.",
        "The students were from all over the world and we were quick to be connected with, the atmosphere was peaceful and friendly. You’ll never feel lonely here! Also the manager Lalit who takes care of the school is absolutely fantastic being always ready to help you. The accommodation is near to school and was very cozy as well.",
        "To sum up, I recommend you to be a student in this school, hopefully for a longer period of time than me, you won’t regret it 🙂",
      ],
      name: "Yukari Yoritomi",
      course: "7 Days Yoga & Meditation Retreat",
      date: "March 2019",
      image: img["yukari-yoritomi"],
    },
    {
      title: "Amazing experience, highly recommend",
      text: [
        "The location is amazing. You get a sense of freedom straight away being in the mountains surrounded by animals. The teachers go above and beyond to help you with anything you need. Food was amazing and accommodation was fab. No words would do this place justice how peaceful and calm you feel. I have learned loads not only about yoga but about myself too.",
      ],
      name: "Ashleigh Mcconnell",
      course: "50 Hour Yoga TTC",
      date: "March 2019",
      image: img["ashleigh-mcconnell"],
    },
    {
      title: "Amazing experience at Yoga Vidya Mandiram",
      text: [
        "I arrived there just thinking about my journey on 200 hours YTT but after few days I’ve decided to stay more and focus on 500 hours YTT. One of the most important experience I’ve ever had, teachers and staff are very polite and nice persons. Anything you need just ask them and they will provide the best solution for your needs. Teachers are really prepared with so much knowledge and experience behind, are really focused on what they teach and follow what they teach. If you need time to talk with them, they give you time, all the time you need.",
        "The area around here is peaceful and perfect for relaxing, study, practice asanas, meditation, Pranayama and all the practice about Yoga, everything is green around in the middle of nature, in the silence of nature, here there is everything you need. In few minutes you are in the city close to Laxman Jhula bridge.",
        "I could write a book on my 55 days there but I can tell you the best way is to go and live the place. You have to try and make your own experience, then you will understand my words. Sending light and love, Daniel",
      ],
      name: "Daniel Cirilli",
      course: "500 Hour Yoga TTC",
      date: "August 2019",
      image: img["daniel-cirilli"],
    },
  ],
};

export const instagram = {
  handle: "yogavidyamandiram",
  href: "https://www.instagram.com/yogavidyamandiram/",
  bio: [
    "Yoga Alliance USA registered school",
    "200/300/500 Yoga TTC Rishikesh, India",
    "200/300/500 Yoga TTC Chiangmai, Thailand",
  ],
  posts: [
    {
      href: "https://www.instagram.com/p/DfuEmZwiHDC/",
      image: img["insta-1"],
      w: 2048,
      h: 1536,
      caption: [
        "Every great journey begins with a decision. Choose growth, discipline, and self-discovery. 🌸",
        "Join our Yoga Teacher Training in Rishikesh and take your yoga practice to the next level.",
      ],
      tags: "#YogaJourney #YogaTeacherTraining #RishikeshIndia #YogaCommunity #SpiritualJourney #YogaVidyaMandiram",
    },
    {
      href: "https://www.instagram.com/p/DfofbEVlFTd/",
      image: img["insta-2"],
      w: 1536,
      h: 2048,
      caption: [
        "Experience the authentic roots of yoga in Rishikesh, the Yoga Capital of the World. 🙏",
        "Learn traditional Hatha Yoga, Ashtanga Yoga, Pranayama, Meditation, and Yoga Philosophy with Yoga Vidya Mandiram.",
        "Discover yoga beyond the mat.",
      ],
      tags: "#TraditionalYoga #RishikeshYoga #YogaTeacherTrainingIndia #HathaYoga #AshtangaYoga #YogaPhilosophy #YogaVidyaMandiram",
    },
    {
      href: "https://www.instagram.com/p/DfjxML3CAN-/",
      image: img["insta-3"],
      w: 2048,
      h: 1536,
      caption: [
        "Dreaming of becoming a certified yoga teacher? 🌿",
        "Take the next step with our Yoga Teacher Training in Rishikesh. Deepen your practice, gain confidence, and learn the traditional wisdom of yoga.",
        "Your transformation starts here!",
      ],
      tags: "#YogaTeacherTrainingInIndia #YogaCertification #Rishikesh #YogaSchool #YogaVidyaMandiram #200HourTTC #BecomeAYogaTeacher",
    },
    {
      href: "https://www.instagram.com/p/Dfd3aYeoPUc/",
      image: img["insta-4"],
      w: 1080,
      h: 1350,
      caption: [
        "Wishing you and your family a very Happy Diwali! 🪔✨",
        "May the festival of lights fill your life with happiness, peace, prosperity, good health, and endless blessings.",
        "May every diya bring new hope, every prayer bring positivity, and every moment be filled with love and joy.",
        "Shubh Deepawali!",
      ],
      tags: "",
    },
  ],
};

export const googleReviews = {
  count: "666 Google reviews",
  write:
    "https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJpUecKEQWCTkRUXYhnTMOSNk",
  reviews: [
    {
      name: "Marina Barros",
      text: [
        "My experience at Yoga Vidya Mandiram was a beautiful journey of self-discovery and learning. I feel truly grateful for trusting myself, the school, and my classmates, and for completing this 200-hour YTTC.",
        "The teachers are knowledgeable and excellent at sharing their teachings, always creating a welcoming environment for learning.",
        "The food was delicious, and the kitchen and housekeeping teams were very caring and attentive.",
        "It was also nice to meet people from different parts of the world. My classmates were always generous, welcoming, and supportive, making this experience even more special.",
        "A special thank you to Prince for his constant support, kindness, and great sense of humor!",
        "Thank you to the entire YVM family for this meaningful experience and all the beautiful memories.. 🪷🩷",
      ],
    },
    {
      name: "Marcelle Groß",
      text: [
        "I had the most wonderful 3 weeks at Yoga Vidya Mandiram (200h TTC). We had wonderful teachers and I learned so much about yogic philosophy, anatomy and practices, but also about teaching skills. The place is so quiet and peaceful, we had good food, always clean rooms and Prince took care of us so well. I will definitely come back one day🫶🏼",
      ],
    },
    {
      name: "Zuzka",
      text: [
        "I completed my 200h yoga training at Yoga Vidya Mandiram. I did a lot of research beforehand, and with so many options, I didn’t know which school would best suit my vision.",
        "I texted a few schools I had selected, and honestly, I booked the one where communication felt the smoothest and where I felt welcomed from the very first message. So a big thanks to Prince and everyone else who does an amazing job of making sure we feel comfortable and welcomed.",
        "Besides the qualified teachers, great atmosphere, and amazing classmates, the biggest highlight for me was definitely the location. Every time I went to the centre of Tapovan, I felt so grateful not to be in the middle of all the noise and buildings. Everyone is different, so if you are someone who values coziness and quiet green spaces over fast access to “hip” cafés, you will be so grateful you chose this yoga school. (Not to mention that you can reach the centre of Tapovan within 10 minutes.)",
        "+ playing with their dog and cows :))",
        "The food was delicious.",
        "It’s gonna be challenging but that’s a part of it. In these 3 weeks, I learned about yoga on a much deeper level.",
        "I feel even more like a beginner than when I started school, but in a good way, knowing there is always more to learn and that I will be a student of yoga for the rest of my life, even If I’ll start sharing my knowledge. ❤️",
        "Thank you, thank you, thank you.",
      ],
    },
    {
      name: "Anshul Tiwari",
      text: [
        "I had a wonderful experience at Yoga Vidya Mandiram. The retreat was truly enriching, both physically and mentally. I learned a lot about yoga, its philosophy, and its deeper aspects beyond just physical postures.",
        "It was a refreshing opportunity to slow down, disconnect from the usual routine, and focus on myself. I came back with valuable learnings, beautiful memories, and a renewed appreciation for yoga.",
        "A big thank you to the entire team for creating such a wonderful experience. Highly recommended to anyone looking to explore yoga, learn something new, and spend some meaningful time with themselves!",
      ],
    },
    {
      name: "Leung Candy",
      text: [
        "This is a very nice school. Teachers are very nice, clean living space with nice food. I enjoy a lot here. Teacher bring us to difference place and take care student while day off. Classes are very authentic.",
      ],
    },
    {
      name: "Anya Monk",
      text: [
        "A truly magical and peaceful place run by wonderful, heartfelt people. The teachers are exceptional—incredibly kind, attentive, and knowledgeable. Prince is a fantastic host who goes above and beyond to make everyone feel welcomed and cared for. The food was delicious, and while the facilities are modest, they are spotless and very well maintained. Being surrounded by lush greenery makes it easy to completely disconnect from the city’s chaos, turn inward, and restore your inner balance. This was my first time in India, but it definitely won’t be the last. Deeply grateful for every moment spent here!",
      ],
    },
    {
      name: "Veronika Slawik",
      text: [
        "What a Wonderful Time at This School! 🙏❤️",
        "I look back on the past few weeks with so much gratitude and pride. Completing my 200-hour Yoga Teacher Training at Yoga Vidya Mandiram has been such a beautiful and meaningful experience.",
        "There are so many wonderful memories I will carry with me. I especially loved the ceremonies, the way they are celebrated, and how the philosophy of yoga gradually becomes part of you more and more with each passing day.",
        "I truly appreciate every single teacher and their individual way of sharing their knowledge and teaching with us. They were always open to our questions, happy to share their wisdom, and made us feel supported and cared for throughout the entire journey. I feel incredibly fortunate to have received such valuable knowledge from all of them.",
        "A heartfelt thank you to Philosophy Teacher(Sandeep)Hatha Teacher(Shiy)Asthanga Teacher , (Anu)Pranayamateachers, and Anatomy Teacher —I Hope I Write the names correct .. but important to know you are all doing an amazing job!",
        "I hope I can continue to practise and share everything I have learned as best as I can. And if I ever feel that I need to deepen my knowledge again, perhaps we will meet once more!",
        "Just like my partner Phil, who returns to this school every year and loves how his understanding of yoga deepens with every visit. Each time is a unique learning journey, because every experience is different and personal.",
        "In the end, it is all about what you make of your time here — what you do with the knowledge, how you connect with the group, and what you discover within yourself.",
        "On Sundays, we had our day off, and I was always excited to see which beautiful excursions Prince had organised for us. There was always something new to discover: watching the sunrise at a temple or visiting the caves where Swami Rama attained Samadhi. These experiences touched me deeply on a spiritual level, and I will keep these special moments in my heart.",
        "A very special thank you goes to Prince Ji. He was always around, taking care of everything and everyone. To me, he is a kind of Superman — someone you rarely come across.",
        "I was also very happy with our group. We connected so naturally and shared a wonderful atmosphere of mutual respect, kindness and care.",
        "And let’s not forget the practical things that make a stay so comfortable: the rooms were always cleaned very well, and we were provided with breakfast, lunch and dinner every day. So, if you are reading this — yes, you are truly blessed with all these little things!",
        "The school itself has a lovely location, with a small garden and a peaceful atmosphere that makes it easy to focus on your yoga practice and enjoy some quiet time.",
        "I can wholeheartedly recommend this school!",
        "I had such a wonderful time, met beautiful people, gained so much knowledge and, most importantly, rediscovered the joy of both practising and teaching yoga.",
        "I leave with a grateful heart, beautiful memories and so much inspiration for the journey ahead.",
        "Thank you for everything! 🙏❤️",
      ],
    },
    {
      name: "Brandon Chao",
      text: [
        "I came to this school twice in the last two years, first for the retreat, then for the teacher training, I’ll share some of those points why I choose this school, and I think my experiences would help those who are still hesitate. Actually, I’ve made my commitment to go back for the third time this year or next year ( as I was planning for a 500hr teacher training, but there were less student during low season, so I instead separated it into 200hr first and 300hr after)",
        "First, the teachers. From the Asana teachers, Pranayama, relaxation & meditation teacher, philosophy teacher, and anatomy teacher, they are amazingly professional and a lot to share more, and I personally will come back to be trained as a yoga teacher also because of the teacher Shailesh, my first retreat class was scheduled to be ended practicing yoga at the ghat nearby Ganga River, but it was then moved to indoor as it was raining season, then out of my expectation, teacher Shailesh saw my disappointment and asked if I will still be in Rishikesh for few days, and maybe we can practice when it’s sunny. The teachings did not end after the class, and what he did inspired me to come back to be trained as a teacher. Then, same thing happened again when I go back to school the second time, and had another off-class practice nearby the Ganga River with my another yoga teacher Sagar. Also teacher Annu has a lot of energy to share her knowledge all about pranayama and meditation, all the teachers here have so many energy and stories to write and share.",
        "Second, the food. They serve yogic meals, and me as a non-veg person who previously do lots of weight training, I was a bit worried if I can get used to the food here the first time I came, but Renu and her family took care of all the food and she cook amazing Indian food, and tries her best to answer my curious questions to the food, actually we learned from each other, she taught me some Hindi and I taught her some English. She is like a friend and a mom, I remember there’s a time I was stuck in the rain with my classmate, and didn’t made our time to come back to the school during the dinner time, she still save the food for us, and even cooked some extra Papadam for us. You must try out Renu’s home made recipe when you are here!",
        "Third, the school management. The locals the school in in Tapovan, however it is surprisingly quiet.( despite some special Shiva event all around the town) The room was clean and well maintained, I ran out of hot water sometimes but they managed to fix it right away. Just be prepared you will have some bugs or other insects in your room or while you are training, because we are close to the nature, it is normally seen daily, and it won’t bother your rest or training, at least for me. Under all these management, Prince took care of everything and everyone, he is like a buddy or a brother, easy to communicate and shares lot of things of Indian culture and his experiences. There was an event for Lord Shiva when I was there the second time, me and four other classmates, out of curiosity, we followed the group and didn’t know where we are going, until we realized that we went too far, we technically hike up to the a Shiva temple in the mountain, with our flip flops and without umbrella or raincoat, Prince and the school team came rescue us, while it was midnight, at the end we were all safe back to the school, it was totally unforgettable and made me feel very guilty like a misbehaved student, but Prince did not blame any one of us, he just came like a Superman( and he really is)",
        "The school also arrange some activities in between classes, like outing to visit temple, or Ganga Arti, Kritan, etc. You will not only get to know about yoga, but also some other Indian culture, and it helps us to be more immersed in the culture.",
        "Come for a few days of retreat, and maybe you will find what you like about this school yourself, people here feels more like a family, and they have more to share than what you expected. The connection and energy here is amazing.",
      ],
    },
    {
      name: "Vikas Pathak",
      text: [
        "I recently completed a one-week Yoga Teacher Training Program at Yoga Vidya Mandiram in Rishikesh, India, and it was an excellent and deeply enriching experience. The program covered Ashtanga Yoga, Hatha Yoga, breathing exercises, meditation, anatomy, and yoga philosophy in a well-structured and meaningful way.",
        "I truly enjoyed every part of the training. The instructors were highly qualified, experienced, supportive, and passionate about sharing their knowledge. Their guidance helped me deepen my understanding and practice of yoga, both physically and spiritually.",
        "The atmosphere was peaceful and inspiring, making the entire experience even more special. I am grateful for the knowledge, discipline, and wonderful memories I gained during this training.",
        "I highly recommend this program to anyone who wants to learn yoga, improve their practice, and experience the authentic yogic environment of Rishikesh. 🙏",
      ],
    },
    {
      name: "anupriya aggarwal",
      text: [
        "This is awesome ashram for power yoga training with well mannered staff and respected teachers . The gurus are very very talented here and would recommend for others too.",
      ],
    },
  ],
};

export const footer = {
  about: [
    "Yoga Vidya Mandiram is a registered Yoga School centered in the magical Himalayan valley of Rishikesh, India. This is dedicated to restore, explore and impart the purest form of yogic knowledge and its science.",
    "Our Yoga School aims to bring forth and maintain the yogic values to their ancient and traditional purity as taught by the yogis of the Himalayan masters. Thus our Yoga School stands a bridge between pure and traditional form and the contemporary format of yoga and meditation learnings",
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/yogavidyamandira/" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/yogavidyamandiram/",
    },
    { label: "Twitter", href: "https://twitter.com/yogavidyamandir" },
    { label: "Pinterest", href: "https://in.pinterest.com/YogaVidyaMandira/" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@yogavidyamandiram4262",
    },
  ],
  links: [
    {
      label: "100 hour Yoga TTC in Rishikesh",
      href: `${SITE}/100-hour-yoga-ttc-in-rishikesh/`,
    },
    {
      label: "200 hour Yoga TTC in Rishikesh",
      href: `${SITE}/200-hours-yoga-teacher-training-in-rishikesh/`,
    },
    {
      label: "200 hour Yoga TTC in Chiang Mai",
      href: `${SITE}/200-hours-yoga-teacher-training-in-chiangmai/`,
    },
    {
      label: "300 hour Yoga TTC in Rishikesh",
      href: `${SITE}/300-hour-yoga-teacher-training-in-rishikesh/`,
    },
    {
      label: "500 hour Yoga TTC in Rishikesh",
      href: `${SITE}/500-hour-yoga-ttc-in-rishikesh/`,
    },
  ],
  copyright: "Yoga Vidya Mandiram © 2026.",
};

export const location = {
  name: "Yoga Vidya Mandiram, Tapovan, Rishikesh",
  // Embeds without an API key; the query matches the school's listing on Google Maps.
  embed:
    "https://www.google.com/maps?q=Yoga+Vidya+Mandiram,+Bypass+Road,+Tapovan,+Rishikesh,+Uttarakhand+249192&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Yoga+Vidya+Mandiram,+Tapovan,+Rishikesh",
};

/** Condensed from the school's FAQ page (yogavidyamandiram.com/faq/), same meaning. */
export const faq = {
  href: `${SITE}/faq/`,
  items: [
    {
      q: "Is your school registered with Yoga Alliance?",
      a: "Yes. Yoga Vidya Mandiram is a Registered Yoga School (RYS 200, 300 and 500) with Yoga Alliance, USA. All our teacher training graduates can register online on the Yoga Alliance website.",
    },
    {
      q: "Are food and accommodation included in the course fee?",
      a: "Yes, there is nothing extra to pay. Your course fee includes meals and a shared room with an attached bathroom, 24-hour water supply, hot water, shower and wardrobe.",
    },
    {
      q: "How many students are there in a course?",
      a: "We accept students according to our yoga hall capacity and room availability; our largest hall holds up to 20 students. Ask us about the course you are interested in and we will tell you its average group size.",
    },
    {
      q: "What do I need to bring?",
      a: "Just comfortable clothes for practice; there is no dress code, and the school provides yoga mats and other equipment. Some temples ask for covered shoulders and long pants. Everyday items are easy to find in shops near the school, so only bring speciality items you can't live without.",
    },
    {
      q: "How do I get to the school?",
      a: "The nearest international airport is Delhi (Indira Gandhi International). From Delhi you can take a domestic flight to Dehradun (under an hour by taxi to Rishikesh), a bus from Kashmiri Gate (7–8 hours), a taxi (5–6 hours), or a train to Haridwar (45 minutes from Rishikesh). With advance notice, we can arrange your pickup from the airport, bus or train station.",
    },
    {
      q: "When should I arrive and leave?",
      a: "Arrive at least 1–2 hours before the course starts for orientation; the opening fire ceremony begins around 10:30 am on the first day. The graduation ceremony ends by 11:30 am on the last day, so plan to leave no earlier than 1–2 pm. After a long journey, arriving a day early is a good idea; extra nights at the school depend on availability and are charged per night.",
    },
    {
      q: "Which visa do I need?",
      a: "A tourist visa, either the paper visa or the e-visa, with sightseeing or a short-term yoga program as your purpose of visit. You can give our school address and phone number as your Indian reference. Please apply at least 2–3 weeks before you travel.",
    },
    {
      q: "How do I pay the course fee?",
      a: "You can pay the deposit by PayPal, bank transfer or card; we don't accept full payment by PayPal. We suggest paying the remaining balance in cash or by online banking, because card payments at the school carry an extra 4.3% charge.",
    },
    {
      q: "Do I need to pass an exam to complete the course?",
      a: "Yes, there is a written and a verbal test. The final decision is based on your performance, attendance and behaviour.",
    },
    {
      q: "English is not my first language. Will that be a problem?",
      a: "No. Our students come from all over the world and for most of them English is a second language. The courses are easy to follow and the teachers will help you with anything.",
    },
  ],
};
