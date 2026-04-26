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

function ProductCard({ p, isUnder500, cat, contact }) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

  const hasVariants = p.variants && p.variants.length > 0;
  const currentPrice = hasVariants ? p.variants[selectedVariantIdx].price : p.price;
  const currentLabel = hasVariants ? p.variants[selectedVariantIdx].label : p.priceSets;

  const hasRange = !hasVariants && p.priceMax && p.priceMax !== p.price;

  return (
    <div className="product-card">
      {p.tag && (
        <div className="product-tag">{p.tag}</div>
      )}
      <Thumb product={p} index={0} />
      <div className="product-info">
        <div className="product-type">{isUnder500 ? p._catLabel : cat.label}</div>
        <h3 className="product-name">{p.name}</h3>

        <div className="product-specs">
          {p.size && <div>📐 {p.size}</div>}
          {p.detail && <div>📦 {p.detail}</div>}
          {p.material && <div>🧪 {p.material}</div>}
          {hasVariants ? (
            <div className="variant-selector">
              <select
                value={selectedVariantIdx}
                onChange={(e) => setSelectedVariantIdx(Number(e.target.value))}
                className="variant-dropdown"
              >
                {p.variants.map((v, i) => (
                  <option key={i} value={i}>{v.label}</option>
                ))}
              </select>
            </div>
          ) : (
            p.priceSets && <div className="price-sets">{p.priceSets}</div>
          )}
        </div>

        <div className="product-footer">
          <div>
            <div className="price-label">{hasVariants ? "Price" : "From"}</div>
            <div className="price">
              ₹{currentPrice.toLocaleString("en-IN")}
              {hasRange && (
                <span className="price-max"> – ₹{p.priceMax.toLocaleString("en-IN")}</span>
              )}
            </div>
          </div>
          <a
            href={`${contact.whatsappLink}?text=Hi! I want to order: ${encodeURIComponent(p.name)}${hasVariants ? ` (${p.variants[selectedVariantIdx].label})` : ''}`}
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
}

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

      <div className="section-header center">
        <div className="label">Our Collection</div>
        <h2 className="section-title center">
          Shop by <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>Category</span>
        </h2>
      </div>

      {/* Category info bar */}
      {!isUnder500 && cat && (
        <div className="category-info">
          <div className="category-details">
            <div className="category-name">{cat.label}</div>
            <div className="category-note">{cat.note}</div>
          </div>
        </div>
      )}
      {isUnder500 && (
        <div className="category-info">
          <div className="category-details">
            <div className="category-name">Under ₹500</div>
            <div className="category-note">Great picks across all categories</div>
          </div>
        </div>
      )}

      <div className="products-grid">
        {products.filter((p) => !p.placeholder).map((p, i) => (
          <ProductCard key={i} p={p} isUnder500={isUnder500} cat={cat} contact={contact} />
        ))}
      </div>
    </section>
  );
}