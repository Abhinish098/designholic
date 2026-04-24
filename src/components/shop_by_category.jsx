import { useState, useRef, useEffect } from "react";
import config from "../configs/config.js";
import Thumb from "./Thumb";

const { designTokens: T, contact, categories: allCategories } = config;

/* Products that cost ≤ ₹500 across all categories */
const under500 = allCategories.flatMap((c) =>
  c.products
    .filter((p) => !p.placeholder && p.price > 0 && p.price <= 500)
    .map((p) => ({ ...p, _catLabel: c.label, _catId: c.id }))
);

export default function ShopByCategory({ goto }) {
  const [activeCat, setActiveCat] = useState("rugs");
  const tabsRef = useRef(null);

  const isUnder500 = activeCat === "under500";
  const cat = isUnder500 ? null : allCategories.find((c) => c.id === activeCat);
  const products = isUnder500 ? under500 : cat?.products ?? [];

  /* Keep tabs visible sticky handled in CSS; just ensure smooth scroll into view on tab change */
  const handleTab = (id) => {
    setActiveCat(id);
    tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <section id="products" className="shop-section">
      <div className="section-header">
        <div>
          <div className="label">
            <span className="star">✦</span>
            Our Collection
          </div>
          <h2 className="section-title">
            Shop by <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>Category</span>
          </h2>
        </div>
        <p className="section-desc">
          Every piece is crafted with intention to bring character and joy to your everyday spaces.
        </p>
      </div>

      {/* Sticky category tabs */}
      <div className="category-tabs-wrap" ref={tabsRef}>
        <div className="category-tabs">
          {allCategories.map((c) => (
            <button
              key={c.id}
              className={`tab ${activeCat === c.id ? "active" : ""}`}
              onClick={() => handleTab(c.id)}
            >
              {c.icon} {c.label}
            </button>
          ))}
          <button
            className={`tab tab-price ${activeCat === "under500" ? "active" : ""}`}
            onClick={() => handleTab("under500")}
          >
            🏷 Under ₹500
          </button>
        </div>
      </div>

      {/* Category info bar */}
      {!isUnder500 && cat && (
        <div className="category-info">
          <span className="category-icon">{cat.icon}</span>
          <div className="category-details">
            <div className="category-name">{cat.label}</div>
            <div className="category-note">{cat.note}</div>
          </div>
          <div className="product-count">
            {cat.products.filter((p) => !p.placeholder).length} products
          </div>
        </div>
      )}
      {isUnder500 && (
        <div className="category-info">
          <span className="category-icon">🏷</span>
          <div className="category-details">
            <div className="category-name">Under ₹500</div>
            <div className="category-note">Great picks across all categories</div>
          </div>
          <div className="product-count">{under500.length} products</div>
        </div>
      )}

      <div className="products-grid">
        {products.filter((p) => !p.placeholder).map((p, i) => {
          const hasRange = p.priceMax && p.priceMax !== p.price;
          return (
            <div key={i} className="product-card">
              {p.tag && (
                <div className="product-tag">{p.tag}</div>
              )}
              <Thumb product={p} index={i} />
              <div className="product-info">
                <div className="product-type">{isUnder500 ? p._catLabel : cat.label}</div>
                <h3 className="product-name">{p.name}</h3>

                <div className="product-specs">
                  {p.size && <div>📐 {p.size}</div>}
                  {p.detail && <div>📦 {p.detail}</div>}
                  {p.material && <div>🧪 {p.material}</div>}
                  {p.priceSets && <div className="price-sets">{p.priceSets}</div>}
                </div>

                <div className="product-footer">
                  <div>
                    <div className="price-label">From</div>
                    <div className="price">
                      ₹{p.price.toLocaleString("en-IN")}
                      {hasRange && (
                        <span className="price-max"> – ₹{p.priceMax.toLocaleString("en-IN")}</span>
                      )}
                    </div>
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
          );
        })}
      </div>
    </section>
  );
}