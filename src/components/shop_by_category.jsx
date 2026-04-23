import { useState } from "react";
import config from "../configs/config.js";
import Thumb from "./Thumb";

const { designTokens: T, contact, categories: allCategories } = config;

export default function ShopByCategory({ goto }) {
  const [activeCat, setActiveCat] = useState("rugs");

  const cat = allCategories.find((c) => c.id === activeCat);

  return (
    <section id="products" className="shop-section">
      <div className="section-header">
        <div>
          <div className="label">
            <span className="star">✦</span>
            Our Collections
          </div>
          <h2 className="section-title">
            Shop by <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>Category</span>
          </h2>
        </div>
        <p className="section-desc">
          Every piece is crafted with intention — to bring character and joy to your everyday spaces.
        </p>
      </div>

      <div className="category-tabs">
        {allCategories.map((c) => (
          <button
            key={c.id}
            className={`tab ${activeCat === c.id ? "active" : ""}`}
            onClick={() => setActiveCat(c.id)}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      <div className="category-info">
        <span className="category-icon">{cat.icon}</span>
        <div className="category-details">
          <div className="category-name">{cat.label}</div>
          <div className="category-note">{cat.note}</div>
        </div>
        <div className="product-count">
          {cat.products.length} products
        </div>
      </div>

      <div className="products-grid">
        {cat.products.map((p, i) => (
          <div key={i} className="product-card">
            {p.tag && (
              <div className="product-tag">{p.tag}</div>
            )}
            <Thumb index={i} />
            <div className="product-info">
              <div className="product-type">{cat.label}</div>
              <h3 className="product-name">{p.name}</h3>

              <div className="product-specs">
                {p.size && <div>📐 {p.size}</div>}
                {p.w && <div>⚖️ {p.w}</div>}
                {p.detail && <div>📦 {p.detail}</div>}
              </div>

              <div className="product-footer">
                <div>
                  <div className="price-label">From</div>
                  <div className="price">₹{p.price.toLocaleString("en-IN")}</div>
                </div>
                <a
                  href={`${contact.whatsappLink}?text=Hi! I want to order: ${encodeURIComponent(p.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid card-cta"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}