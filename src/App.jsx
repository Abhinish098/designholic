import { useState, useEffect } from "react";
import config from "./configs/config.js";
import Header from "./components/header";
import Banner from "./components/banner";
import ShopByCategory from "./components/shop_by_category";
import WhyDesignholic from "./components/why_designholic";
import HowToOrder from "./components/how_to_order";
import WhatTheySaying from "./components/what_theyre_saying";
import QNA from "./components/qna";
import GetInTouch from "./components/get_in_touch";
import Footer from "./components/footer";
import "./App.css";

const { designTokens: T, ticker: TICKER } = config;

/* ── Font injection ─────────────────────────────────────────── */
if (!document.getElementById("dh-fonts")) {
  const l = document.createElement("link");
  l.id = "dh-fonts";
  l.rel = "stylesheet";
  l.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap";
  document.head.appendChild(l);
}

/* ══════════════════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      {/* ── NAV ──────────────────────────────────────────────── */}
      <Header scrolled={scrolled} goto={goto} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <Banner goto={goto} />

      {/* ── TICKER ───────────────────────────────────────────── */}
      <div className="ticker-section">
        <div className="ticker">{TICKER.repeat(8)}</div>
      </div>

      {/* ── PRODUCTS ─────────────────────────────────────────── */}
      <ShopByCategory goto={goto} />

      {/* ── WHY US ───────────────────────────────────────────── */}
      <WhyDesignholic />

      {/* ── HOW TO ORDER ─────────────────────────────────────── */}
      <HowToOrder />

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <WhatTheySaying />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <QNA />

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <GetInTouch />

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}