"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL =
  "https://www.fresha.com/book-now/revive-laser-clinic-fxqrooip/all-offer?pId=544832";

const treatments = [
  {
    name: "Tattoo Removal",
    price: "From £40",
    description:
      "Our tattoo removal treatment offers a safe and professional way to reduce the appearance of tattoos over time.",
    className: "treatment-card--tattoo",
  },
  {
    name: "Caci facial",
    price: "From £50",
    description:
      "Uses gentle microcurrents to help improve skin firmness and reduce appearance of fine lines for a refreshed, youthful complexion. Suitable for all skin types.",
    className: "treatment-card--caci",
  },
  {
    name: "Laser hair removal",
    price: "From £15",
    description:
      "Effectively targets hair at the root, significantly reducing unwanted growth while leaving your skin feeling soft and rejuvenated. Perfect for various skin types.",
    className: "treatment-card--laser treatment-card--large",
  },
  {
    name: "Derma pen microneedling",
    price: "£120",
    description:
      "Using fine needles, this treatment helps to rejuvenate your complexion and support a healthy, glowing appearance.",
    className: "treatment-card--derma treatment-card--wide",
  },
];

const laserMenu = [
  {
    name: "Laser Hair Removal",
    description: "ND:YAG laser, from £15, safe for all skin tones",
  },
  {
    name: "Laser Tattoo Removal",
    description: "Fading and full removal, from £40 with a clear quote",
  },
  {
    name: "Facials",
    description: "CACI, microneedling and bespoke facial treatments",
  },
];

const aestheticMenu = [
  {
    name: "Body Sculpting & Aesthetics",
    description: "Non-invasive contouring and confidence-led care",
  },
  {
    name: "Wrinkle Removal",
    description: "Soften fine lines with practical treatment advice",
  },
  {
    name: "Fillers",
    description: "Restore volume and natural-looking contour",
  },
];

const faqs = [
  {
    question: "Is laser hair removal painful?",
    answer:
      "No, the most you will feel is a pinprick sensation or the feeling of a rubber band ping.",
  },
  {
    question: "How many sessions of laser hair removal will I need for complete removal?",
    answer:
      "We recommend at least 6 sessions, spaced 4-6 weeks apart, sometimes people need a few more after the 6 to tidy up any remaining hairs.",
  },
  {
    question: "How should I prepare for laser hair removal?",
    answer:
      "We require around 48 hrs hair growth prior to treatment, the hair needs to be visible in order to absorb the laser energy. Once starting a course of laser it is prohibited to wax, pluck, epilate or bleach the hair. Shaving is fine.",
  },
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17l-6.2 3.6 1.6-6.7L2.2 9l6.9-.6L12 2Z" />
    </svg>
  );
}

function LogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Image src="/logo.webp" alt="" width={716} height={765} priority />
    </span>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Revive Laser Clinic home">
      <LogoMark />
      <span className="wordmark">
        <strong>REVIVE</strong>
        <span>Laser Clinic</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const navShell = document.querySelector(".nav-shell");
    const onScroll = () => {
      navShell?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", mobileOpen);
    return () => document.body.classList.remove("menu-locked");
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  function openMegaMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }

  function scheduleMegaClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileTreatmentsOpen(false);
  }

  return (
    <main id="top" className="site-shell">
      <div className="nav-shell">
        <nav className="nav" aria-label="Primary">
          <Brand />

          <div className="nav-links">
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              aria-controls="treatments-mega"
              onClick={() => setMegaOpen((open) => !open)}
              onFocus={openMegaMenu}
              onMouseEnter={openMegaMenu}
              onMouseLeave={scheduleMegaClose}
            >
              Treatments
              <span className="nav-caret" aria-hidden="true" />
            </button>
            <a href="#academy">Academy</a>
            <a href="#faq">FAQs</a>
            <a href="#discovery">About</a>
            <a href="#footer">Get in touch</a>
          </div>

          <div className="nav-actions">
            <a className="btn btn--primary btn--small" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book now
            </a>
            <button
              className={`menu-button${mobileOpen ? " is-open" : ""}`}
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      <div
        id="treatments-mega"
        className={`mega-menu${megaOpen ? " is-open" : ""}`}
        role="region"
        aria-label="Treatments"
        onMouseEnter={openMegaMenu}
        onMouseLeave={scheduleMegaClose}
      >
        <div className="mega-grid">
          <div>
            <p className="menu-label">Laser</p>
            {laserMenu.map((item) => (
              <a className="mega-item" href="#popular" key={item.name} onClick={() => setMegaOpen(false)}>
                <span>{item.name}</span>
                <small>{item.description}</small>
              </a>
            ))}
          </div>
          <div>
            <p className="menu-label">Aesthetics</p>
            {aestheticMenu.map((item) => (
              <a className="mega-item" href="#popular" key={item.name} onClick={() => setMegaOpen(false)}>
                <span>{item.name}</span>
                <small>{item.description}</small>
              </a>
            ))}
          </div>
          <aside className="mega-helper" aria-label="Consultation reminder">
            <p>
              Not sure where to start? Every treatment begins with a free, no-pressure consultation.
            </p>
            <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a free consultation
            </a>
            <small>Authorised Environ skincare stockist. Gift vouchers and loyalty scheme available.</small>
          </aside>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${mobileOpen ? " is-open" : ""}`}>
        <a className="btn btn--primary mobile-booking" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Book free consultation
        </a>
        <button
          className="mobile-link mobile-toggle"
          type="button"
          aria-expanded={mobileTreatmentsOpen}
          aria-controls="mobile-treatments"
          onClick={() => setMobileTreatmentsOpen((open) => !open)}
        >
          Treatments
          <span className="plus-icon" aria-hidden="true" />
        </button>
        <div id="mobile-treatments" className={`mobile-submenu${mobileTreatmentsOpen ? " is-open" : ""}`}>
          {[...laserMenu, ...aestheticMenu].map((item) => (
            <a href="#popular" key={item.name} onClick={closeMobileMenu}>
              <span>{item.name}</span>
              <small>{item.description}</small>
            </a>
          ))}
        </div>
        <a className="mobile-link" href="#academy" onClick={closeMobileMenu}>
          Academy
        </a>
        <a className="mobile-link" href="#faq" onClick={closeMobileMenu}>
          FAQs
        </a>
        <a className="mobile-link" href="#discovery" onClick={closeMobileMenu}>
          About
        </a>
        <a className="mobile-link" href="#footer" onClick={closeMobileMenu}>
          Get in touch
        </a>
        <p className="mobile-contact">
          01634 245988
          <br />
          ally.revivelaser@gmail.com
          <br />2 East Street, Snodland, Kent ME6 5BA
        </p>
      </div>

      <header className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="wrap hero-content">
          <p className="badge">Laser and skin, Medway, Kent</p>
          <h1>Laser hair removal from £15</h1>
          <p className="hero-copy">
            Smooth skin, less shaving and long-term hair reduction using one of the most effective hair removal
            systems in the industry.
          </p>
          <div className="hero-actions">
            <a className="btn btn--light" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book free consultation
            </a>
            <div className="rating" aria-label="Rated 5.0 out of 5 from 396 reviews">
              <strong>5.0</strong>
              <span className="stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} />
                ))}
              </span>
              <span>(396)</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#discovery" aria-label="Scroll to treatments">
          <span>Scroll</span>
          <i aria-hidden="true" />
        </a>
      </header>

      <section className="discovery" id="discovery">
        <div className="wrap discovery-grid">
          <div className="discovery-visual reveal" aria-hidden="true">
            <span>Treatment room, Snodland</span>
          </div>
          <div className="discovery-panel reveal">
            <p className="badge badge--warm">About the clinic</p>
            <h2>Treatments that go beyond the surface</h2>
            <p>
              Laser hair removal, tattoo removal and advanced skin treatments tailored to your skin.
            </p>
            <a className="btn btn--light" href="#popular">
              Explore treatments
            </a>
          </div>
        </div>
      </section>

      <section className="popular" id="popular">
        <div className="wrap">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Our treatments</p>
              <h2>Popular treatments</h2>
            </div>
            <a className="btn btn--primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book consultation
            </a>
          </div>

          <div className="treatment-grid reveal">
            {treatments.map((treatment) => (
              <a className={`treatment-card ${treatment.className}`} href={BOOKING_URL} key={treatment.name}>
                <span className="price-pill">{treatment.price}</span>
                <h3>{treatment.name}</h3>
                <p>{treatment.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="wrap faq-wrap">
          <div className="faq-heading reveal">
            <p className="badge">Common questions</p>
            <h2>Everything you need to know</h2>
            <p>
              Clear answers to the questions we hear most, and anything else can be covered in your free consultation.
            </p>
          </div>

          <div className="faq-list reveal">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    {faq.question}
                    <span className="plus-icon" aria-hidden="true" />
                  </button>
                  <div className="faq-answer" hidden={!isOpen}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="get-started" id="academy">
        <div className="get-started-media" aria-hidden="true" />
        <div className="wrap get-started-content reveal">
          <p className="badge">Ready to start?</p>
          <h2>Begin your Revive journey</h2>
          <p>
            Start with expert advice from a Medway clinic with 20 years&apos; experience in laser and skin treatments.
          </p>
          <a className="btn btn--light" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book free consultation
          </a>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>© Revive-Laser. Designed by Rive & Limn.</p>
          </div>
          <div>
            <h2>Navigation</h2>
            <a href="#popular">Treatments</a>
            <a href="#academy">Academy</a>
            <a href="#faq">FAQs</a>
            <a href="#discovery">About</a>
            <a href="#footer">Get in touch</a>
          </div>
          <div>
            <h2>Socials</h2>
            <a href="#">Facebook</a>
            <a href="#">X</a>
            <a href="https://instagram.com/revivelaser" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <div>
            <h2>Contact</h2>
            <p>East Street, Snodland, Kent, ME6 5BA</p>
            <a href="tel:01634245988">01634 245988</a>
            <a href="mailto:ally.revivelaser@gmail.com">Get in touch</a>
          </div>
          <div>
            <h2>Legal</h2>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
