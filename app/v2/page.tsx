import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./v2.css";

import intro from "@/public/images/v2/intro.jpg";
import philosophy from "@/public/images/v2/philosophy.jpg";
import rishikesh from "@/public/images/v2/rishikesh.jpg";
import chiangMai from "@/public/images/v2/chiang-mai.jpg";
import ttc200 from "@/public/images/v2/ttc-200.jpg";
import ttc300 from "@/public/images/v2/ttc-300.jpg";
import ttc500 from "@/public/images/v2/ttc-500.jpg";
import retreat from "@/public/images/v2/retreat.jpg";
import gallery2 from "@/public/images/v2/gallery-2.jpg";
import gallery3 from "@/public/images/v2/gallery-3.jpg";
import gallery4 from "@/public/images/v2/gallery-4.jpg";
import gallery5 from "@/public/images/v2/gallery-5.jpg";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-v2-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-v2-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoga Vidya Mandiram | Traditional Yoga Teacher Training & Retreats",
  description:
    "Yoga Vidya Mandiram offers traditional and practical Yoga Teacher Training and Yoga Retreats in Rishikesh, India and Chiang Mai, Thailand.",
};

const INSTAGRAM = "https://www.instagram.com/yogavidyamandiram/";

const values = [
  { num: "01", title: "Ahimsa", text: "Bringing non-violence into thoughts, words and actions." },
  { num: "02", title: "Sadhana", text: "Developing a consistent and sincere personal practice." },
  { num: "03", title: "Seva", text: "Understanding selfless service as part of yogic living." },
  { num: "04", title: "Lifelong Study", text: "Recognizing yoga as a continuing journey of learning." },
];

const locations = [
  {
    img: rishikesh,
    alt: "India inspired landscape",
    country: "India",
    name: "Rishikesh",
    text: "Study in the Himalayan valley beside the sacred River Ganga, where yoga has been practiced and taught for generations.",
    link: "Explore Rishikesh programs →",
  },
  {
    img: chiangMai,
    alt: "Thailand inspired landscape",
    country: "Thailand",
    name: "Chiang Mai",
    text: "A peaceful setting in northern Thailand where students can study traditional yoga in a welcoming international environment.",
    link: "Explore Chiang Mai programs →",
  },
];

const courseTabs = ["Rishikesh • India", "Chiang Mai • Thailand", "RYS 200", "RYS 300", "RYS 500"];

const courses = [
  {
    img: ttc200,
    level: "Foundation",
    title: "200 Hour Yoga TTC",
    text: "A systematic foundation in yoga for beginners and practitioners who want to study yoga more seriously.",
    pills: ["Beginner friendly", "Residential", "India & Thailand"],
    link: "Explore 200 Hour TTC",
  },
  {
    img: ttc300,
    level: "Deepening",
    title: "300 Hour Yoga TTC",
    text: "Continue beyond the foundation with deeper study, stronger personal practice and more advanced teaching understanding.",
    pills: ["Intermediate", "Residential", "India & Thailand"],
    link: "Explore 300 Hour TTC",
  },
  {
    img: ttc500,
    level: "Immersion",
    title: "500 Hour Yoga TTC",
    text: "An extended pathway for dedicated students seeking a deeper commitment to yoga, personal practice and teaching.",
    pills: ["Beginner → Advanced", "Immersive", "India & Thailand"],
    link: "Explore 500 Hour TTC",
  },
];

const retreatItems = [
  { title: "Yoga & Meditation", text: "Quiet, focused practice" },
  { title: "Yoga Nidra", text: "Rest and conscious relaxation" },
  { title: "Pranayama", text: "Breath and subtle awareness" },
  { title: "Yoga & Ayurveda", text: "Traditional holistic study" },
];

const certBadges = ["RYS 200", "RYS 300", "RYS 500", "RCYS", "YACEP"];

const testimonials = [
  {
    quote:
      "I learned a lot in a whole day, while still having enough time for self-study. The atmosphere was peaceful and friendly.",
    person: "Yukari Yoritomi • 7 Days Yoga & Meditation Retreat",
  },
  {
    quote:
      "The teachers are amazing, full of love and understanding. The knowledge you get here is amazing, from pranayama and philosophy to anatomy and asana practice.",
    person: "Vlad Agachi • 500 Hour Yoga TTC",
  },
  {
    quote:
      "The practice is steeped in tradition and you feel that you are receiving ancient teachings with reverent, gentle care.",
    person: "Student review • 3 Days Himalayan Meditation Retreat",
  },
];

const galleryImages = [
  { img: intro, alt: "Meditation", large: true },
  { img: gallery2, alt: "Yoga practice" },
  { img: gallery3, alt: "Yoga class" },
  { img: gallery4, alt: "Nature and retreat" },
  { img: gallery5, alt: "Peaceful surroundings" },
];

const socialItems = [
  { img: philosophy, alt: "Yoga practice", label: "@yogavidyamandiram" },
  { img: ttc300, alt: "Yoga teacher training", label: "Yoga Teacher Training" },
  { img: ttc500, alt: "Yoga practice", label: "Practice • Study • Community" },
  { img: intro, alt: "Meditation", label: "Moments from the school" },
];

const GOLD_EYEBROW = { color: "#dfc28b" };

export default function V2Home() {
  return (
    <div className={`v2 ${serif.variable} ${sans.variable}`}>
      <header className="site-header">
        <div className="utility">
          <div className="container">
            <span>Traditional Yoga • Practical Learning • Personal Practice</span>
            <span>Rishikesh, India &nbsp; • &nbsp; Chiang Mai, Thailand</span>
          </div>
        </div>

        <div className="main-nav">
          <div className="container nav-inner">
            <a href="#top" className="brand" aria-label="Yoga Vidya Mandiram">
              <span className="logo-fallback">
                Yoga Vidya Mandiram
                <small>Yoga • Meditation • Sadhana</small>
              </span>
            </a>

            <nav className="navlinks" aria-label="Main navigation">
              <a href="#about">Our School</a>
              <a href="#ttc">Yoga TTC</a>
              <a href="#retreats">Retreats</a>
              <a href="#alliance">Yoga Alliance</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#social">Instagram</a>
              <a href="#contact" className="btn btn-primary nav-cta">
                Enquire
              </a>
            </nav>

            <button className="mobile-menu" aria-label="Open menu">
              ☰
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="eyebrow" style={{ color: "#e1c58c" }}>
                Yoga Teacher Training • Yoga Retreats
              </div>
              <h1>
                Study Yoga.
                <br />
                Live Yoga.
                <br />
                Understand Yoga.
              </h1>
              <p>
                Explore the traditional wisdom of yoga through a practical and holistic approach to
                asana, pranayama, meditation, philosophy and daily life.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#ttc">
                  Explore Yoga TTC
                </a>
                <a className="btn btn-outline-light" href="#retreats">
                  Explore Retreats
                </a>
              </div>
              <div className="hero-note">
                <span></span> Rooted in Himalayan tradition • Open to all sincere students
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container intro">
            <div className="intro-photo">
              <Image src={intro} alt="Meditation and yoga practice" sizes="(max-width: 980px) 92vw, 540px" placeholder="blur" />
            </div>

            <div>
              <div className="eyebrow">Welcome to Yoga Vidya Mandiram</div>
              <h2>Traditional wisdom, studied with clarity and lived in practice.</h2>
              <div className="divider"></div>
              <p>
                Yoga Vidya Mandiram is dedicated to preserving the traditional teachings of yoga
                while making them understandable and relevant to students from different cultures
                and backgrounds.
              </p>
              <p>
                We see yoga as much more than physical exercise. Through asana, pranayama,
                meditation, philosophy, anatomy and yogic lifestyle, students are encouraged to
                understand yoga as a complete path of personal study and transformation.
              </p>
              <p className="kicker">
                You do not have to arrive as an expert. You only need sincerity, curiosity and a
                willingness to practice.
              </p>
              <a className="text-link" href="#">
                Discover our school and lineage
              </a>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container philosophy">
            <div>
              <div className="eyebrow">The Spirit of Our Teaching</div>
              <h2>Yoga is a way of understanding life, not simply a collection of techniques.</h2>
              <p>
                Our approach is rooted in the traditional values of yoga: self-discipline,
                awareness, compassion, service and continuous study. We aim to create a learning
                environment where ancient teachings can be approached sincerely without losing their
                relevance to modern life.
              </p>

              <div className="values">
                {values.map((v) => (
                  <div className="value" key={v.num}>
                    <div className="value-num">{v.num}</div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="philosophy-photo">
              <Image src={philosophy} alt="Yoga practice in a peaceful setting" sizes="(max-width: 980px) 92vw, 540px" placeholder="blur" />
            </div>
          </div>
        </section>

        <section className="section" id="locations">
          <div className="container">
            <div className="center-head">
              <div className="eyebrow">Two Places • One Yogic Foundation</div>
              <h2>Study yoga in India or Thailand.</h2>
              <p>
                Yoga Vidya Mandiram has schools in both Rishikesh, India and Chiang Mai, Thailand,
                allowing students to choose the environment that best suits their journey.
              </p>
            </div>

            <div className="locations">
              {locations.map((l) => (
                <article className="location-card" key={l.name}>
                  <Image src={l.img} alt={l.alt} sizes="(max-width: 680px) 92vw, 580px" placeholder="blur" />
                  <div className="location-info">
                    <div className="eyebrow" style={GOLD_EYEBROW}>
                      {l.country}
                    </div>
                    <h3>{l.name}</h3>
                    <p>{l.text}</p>
                    <a className="location-link" href="#">
                      {l.link}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="ttc">
          <div className="container">
            <div className="center-head">
              <div className="eyebrow">Yoga Teacher Training</div>
              <h2>Build your foundation. Deepen your practice. Learn to teach.</h2>
              <p>
                Our Yoga TTC programs combine structured study with daily practice, helping students
                understand yoga from the body, breath, mind and philosophical dimensions.
              </p>
            </div>

            <div className="course-tabs">
              {courseTabs.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="cards">
              {courses.map((c) => (
                <article className="card" key={c.title}>
                  <div className="card-photo">
                    <Image src={c.img} alt={c.title} sizes="(max-width: 680px) 92vw, (max-width: 980px) 46vw, 380px" placeholder="blur" />
                  </div>
                  <div className="card-body">
                    <div className="eyebrow">{c.level}</div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <div className="meta">
                      {c.pills.map((p) => (
                        <span className="pill" key={p}>
                          {p}
                        </span>
                      ))}
                    </div>
                    <a className="text-link" href="#">
                      {c.link}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 34 }}>
              <a className="btn btn-outline-dark" href="#">
                View All Yoga TTC Programs
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="retreats">
          <div className="container retreat-intro">
            <div className="retreat-photo">
              <Image src={retreat} alt="Yoga retreat practice" sizes="(max-width: 980px) 92vw, 600px" placeholder="blur" />
            </div>

            <div>
              <div className="eyebrow">Yoga Retreat Courses</div>
              <h2>Step away from routine and return to your practice.</h2>
              <p>
                Our retreats are designed for students who want to deepen a particular aspect of
                yoga without committing to a full teacher-training program.
              </p>

              <div className="retreat-list">
                {retreatItems.map((r) => (
                  <div className="retreat-item" key={r.title}>
                    <strong>{r.title}</strong>
                    <span>{r.text}</span>
                  </div>
                ))}
              </div>

              <p className="kicker">
                Retreats are suitable for beginners as well as experienced practitioners, depending
                on the individual program.
              </p>

              <a className="btn btn-primary" href="#">
                Explore Yoga Retreats
              </a>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="alliance">
          <div className="container cert-grid">
            <div>
              <div className="eyebrow">Yoga Alliance Standard & Certification</div>
              <h2>A recognized training framework — with the practice at the center.</h2>
              <p>
                Yoga Vidya Mandiram is registered with Yoga Alliance as a Registered Yoga School for
                RYS 200, RYS 300 and RYS 500 programs, and also holds RCYS and YACEP credentials. Our
                courses can therefore support students pursuing recognized teacher-training and
                continuing-education pathways.
              </p>
              <p>
                We encourage students not to make the certificate the destination. The certificate
                is useful and practical, but the deeper purpose of study is to develop
                understanding, personal practice and the ability to share yoga responsibly.
              </p>

              <div className="cert-badges">
                {certBadges.map((b) => (
                  <span className="cert-badge" key={b}>
                    {b}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 27 }}>
                <a className="text-link" href="#">
                  Learn more about Yoga Alliance & certification
                </a>
              </div>
            </div>

            <div className="cert-note">
              <div className="eyebrow" style={GOLD_EYEBROW}>
                Our principle
              </div>
              <h3>“Study to understand, practice to experience, teach to serve.”</h3>
              <p>
                Our teacher-training programs bring together traditional yogic knowledge and
                practical teaching skills so students can take what they learn beyond the
                classroom.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="container">
            <div className="center-head">
              <div className="eyebrow">Student Experiences</div>
              <h2>What students remember after the course.</h2>
              <p>
                The strongest part of a yoga education is often the experience of living and
                learning together.
              </p>
            </div>

            <div className="testimonials">
              {testimonials.map((t) => (
                <article className="testimonial" key={t.person}>
                  <div className="quote-mark">“</div>
                  <p>{t.quote}</p>
                  <div className="person">{t.person}</div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a className="btn btn-outline-dark" href="#">
                Read More Student Testimonials
              </a>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="gallery">
          <div className="container">
            <div className="center-head">
              <div className="eyebrow">Life at the School</div>
              <h2>Practice, study, community and simple living.</h2>
              <p>A glimpse of the kind of environment we aim to create for students during their stay.</p>
            </div>

            <div className="gallery">
              {galleryImages.map((g) => (
                <div className={g.large ? "large" : undefined} key={g.alt}>
                  <Image
                    src={g.img}
                    alt={g.alt}
                    sizes={g.large ? "(max-width: 680px) 92vw, 500px" : "(max-width: 680px) 92vw, 330px"}
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="social">
          <div className="container">
            <div className="social-head">
              <div>
                <div className="eyebrow">Follow Our Journey</div>
                <h2 style={{ marginBottom: 0 }}>Life at Yoga Vidya Mandiram.</h2>
              </div>
              <a className="btn btn-outline-dark" href={INSTAGRAM} target="_blank" rel="noopener">
                Follow on Instagram
              </a>
            </div>

            <div className="social-grid">
              {socialItems.map((s) => (
                <a className="social-item" href={INSTAGRAM} target="_blank" rel="noopener" key={s.label}>
                  <Image src={s.img} alt={s.alt} sizes="(max-width: 680px) 46vw, 290px" placeholder="blur" />
                  <div className="social-overlay">{s.label}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container">
            <div className="eyebrow">Begin Your Journey</div>
            <h2>Find the right way to study with us.</h2>
            <p style={{ maxWidth: 680, margin: "0 auto 28px" }}>
              Whether you are looking for your first Yoga TTC, a deeper level of teacher training, or
              a short retreat to reconnect with your practice, we are here to help you choose.
            </p>
            <a className="btn btn-primary" href="#">
              Explore All Courses
            </a>
            <a className="btn btn-outline-dark" style={{ marginLeft: 8 }} href="#">
              Enquire Now
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">
              Yoga Vidya Mandiram
              <small>Yoga • Meditation • Sadhana</small>
            </div>
            <p style={{ marginTop: 20 }}>
              A registered yoga school dedicated to preserving traditional yogic knowledge while
              presenting it in a clear, practical and relatable way.
            </p>
            <p>Rishikesh, India • Chiang Mai, Thailand</p>
          </div>

          <div>
            <h3>Study Yoga</h3>
            <p><a href="#ttc">200 Hour Yoga TTC</a></p>
            <p><a href="#ttc">300 Hour Yoga TTC</a></p>
            <p><a href="#ttc">500 Hour Yoga TTC</a></p>
            <p><a href="#retreats">Yoga Retreats</a></p>
          </div>

          <div>
            <h3>Our School</h3>
            <p><a href="#about">About Yoga Vidya Mandiram</a></p>
            <p><a href="#locations">India & Thailand</a></p>
            <p><a href="#alliance">Yoga Alliance</a></p>
            <p><a href="#testimonials">Testimonials</a></p>
          </div>

          <div>
            <h3>Connect</h3>
            <p>Rishikesh: +91 63951 26300</p>
            <p>WhatsApp: +91 90123 97995</p>
            <p><a href="mailto:info@yogavidyamandiram.com">info@yogavidyamandiram.com</a></p>
            <p><a href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a></p>
            <p><a href="https://www.facebook.com/yogavidyamandiram/" target="_blank" rel="noopener">Facebook</a></p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Yoga Vidya Mandiram</span>
          <span>Traditional Yoga • Practical Learning • Personal Practice</span>
        </div>
      </footer>
    </div>
  );
}
