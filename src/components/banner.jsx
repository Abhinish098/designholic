import { useState, useEffect } from "react";
import config from "../configs/config.js";

// Hero Images
import h1 from "../assets/Rags_collection/Car Rug/DSC_6577.JPG";
import h2 from "../assets/Rags_collection/Lipstick Rug/01.png";
import h3 from "../assets/Glass_collection/Black Swan Glass/170CC31A-CC6C-48F7-A134-244AB1DF0580.PNG";
import h4 from "../assets/Vase_collection/Flat Bottle Vase/DSC_6686.jpg";
import h5 from "../assets/Glass_collection/Bow-Blush Glass/01.jpg";

const { designTokens: T, heroSlides, stats } = config;
const total = heroSlides.length;

const PALETTE = ["#B8736A", "#6E8FA8", "#6FA880", "#A89A6E", "#8E6EA8", "#A86E8E", "#C09A42", "#5E92A8"];

const HERO_IMAGES = {
  "Car Rug": h1,
  "Rare Beauty Soft Pinch": h2,
  "Black Swan Wine Glass": h3,
  "Flat Bottle Vase": h4,
  "Bow-Blush Glass": h5
};

const makeSVG = (col, i) => {
  const w = "rgba(255,255,255,0.35)";
  const wl = "rgba(255,255,255,0.18)";
  const patterns = [
    `<polygon points="100,18 182,100 100,182 18,100" fill="none" stroke="${w}" stroke-width="2.5"/>
     <polygon points="100,50 150,100 100,150 50,100" fill="${wl}" stroke="${w}" stroke-width="1.5"/>
     <circle cx="100" cy="100" r="14" fill="${w}"/>`,
    `<path d="M0,55 Q50,35 100,55 T200,55" fill="none" stroke="${w}" stroke-width="2"/>
     <path d="M0,85 Q50,65 100,85 T200,85" fill="none" stroke="${wl}" stroke-width="2"/>
     <path d="M0,115 Q50,95 100,115 T200,115" fill="none" stroke="${wl}" stroke-width="2"/>
     <path d="M0,145 Q50,125 100,145 T200,145" fill="none" stroke="${wl}" stroke-width="1.5"/>`,
    `<circle cx="100" cy="100" r="72" fill="none" stroke="${w}" stroke-width="2.5"/>
     <circle cx="100" cy="100" r="48" fill="none" stroke="${wl}" stroke-width="2"/>
     <circle cx="100" cy="100" r="24" fill="${wl}" stroke="${w}" stroke-width="1.5"/>`,
    [0, 1, 2, 3, 4]
      .map((r) =>
        [0, 1, 2, 3, 4]
          .map((c) => `<circle cx="${28 + c * 36}" cy="${28 + r * 36}" r="4.5" fill="${w}"/>`)
          .join("")
      )
      .join(""),
    `<line x1="0" y1="0" x2="200" y2="200" stroke="${w}" stroke-width="1.5"/>
     <line x1="200" y1="0" x2="0" y2="200" stroke="${w}" stroke-width="1.5"/>
     <rect x="55" y="55" width="90" height="90" fill="none" stroke="${w}" stroke-width="2.5"/>
     <rect x="78" y="78" width="44" height="44" fill="${wl}"/>`,
    `<polygon points="100,28 164,64 164,136 100,172 36,136 36,64" fill="none" stroke="${w}" stroke-width="2.5"/>
     <polygon points="100,56 134,74 134,126 100,144 66,126 66,74" fill="${wl}" stroke="${w}" stroke-width="1.5"/>`,
    Array.from({ length: 8 }, (_, k) => {
      const a = (k * 45 * Math.PI) / 180;
      return `<line x1="100" y1="100" x2="${100 + 80 * Math.cos(a)}" y2="${100 + 80 * Math.sin(a)}" stroke="${w}" stroke-width="1.5"/>`;
    }).join("") + `<circle cx="100" cy="100" r="24" fill="${wl}" stroke="${w}" stroke-width="2"/>`,
    `<path d="M28,72 L28,28 L72,28" fill="none" stroke="${w}" stroke-width="3"/>
     <path d="M128,28 L172,28 L172,72" fill="none" stroke="${w}" stroke-width="3"/>
     <path d="M28,128 L28,172 L72,172" fill="none" stroke="${w}" stroke-width="3"/>
     <path d="M128,172 L172,172 L172,128" fill="none" stroke="${w}" stroke-width="3"/>`
  ];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${col}"/>${patterns[i % patterns.length]}</svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default function Banner({ goto }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % total), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-left">
          <div className="banner-tag">
            <span className="star">✦</span>
            <span>Tufted Rugs • Rental-Friendly Decor • Contemporary Glassware • Statement Ceramic Plates</span>
          </div>

          <h1 className="banner-title">
            <span style={{ fontSize: "3rem" }}>Where Spaces Get Their</span><br />
            <span style={{ color: T.colors.red, fontStyle: "italic" }}>X-Factor</span>
          </h1>

          <p className="banner-desc">
            Your Pinterest board just came to life. Look around, you might find something you've always wanted, but never knew where to get.
          </p>

          <div className="banner-buttons">
            <button className="btn btn-solid" onClick={() => goto("products")}>
              ✦ Pinterest Finds
            </button>
            <a
              href={config.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              💬 Chat to Order
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HERO CAROUSEL ─────────────────────────────────────────── */}
        <div className="banner-right">
          <div className="hero-carousel">
            {heroSlides.map((s, i) => (
              <div
                key={i}
                className={`carousel-slide ${i === slide ? "active" : ""}`}
                style={{ 
                  backgroundImage: HERO_IMAGES[s.label] 
                    ? `url(${HERO_IMAGES[s.label]})` 
                    : `url(${makeSVG(PALETTE[i % PALETTE.length], i)})` 
                }}
              >
                <div className="carousel-overlay" />
                <div className="carousel-badge">{s.tag}</div>
                <div className="carousel-info">
                  <div className="carousel-cat">{s.category}</div>
                  <div className="carousel-name">{s.label}</div>
                </div>
              </div>
            ))}

            {/* Dots */}
            <div className="carousel-dots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === slide ? "active" : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <button className="carousel-arrow prev" onClick={() => setSlide((slide - 1 + total) % total)}>‹</button>
            <button className="carousel-arrow next" onClick={() => setSlide((slide + 1) % total)}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}