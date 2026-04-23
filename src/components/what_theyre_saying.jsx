import config from "../configs/config.js";

const { designTokens: T, reviews } = config;

export default function WhatTheySaying() {
  return (
    <section className="reviews-section">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="label">Happy Customers</div>
            <h2 className="section-title">
              What they're <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>saying</span>
            </h2>
          </div>
          <div className="rating-display">
            {"★★★★★".split("").map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
            <span className="rating-text">5.0 average</span>
          </div>
        </div>

        <div className="reviews-scroll">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {"★★★★★".split("").map((_, j) => (
                  <span key={j} className="star">★</span>
                ))}
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <div className="author-avatar">{r.name[0]}</div>
                <div>
                  <div className="author-name">{r.name}</div>
                  <div className="author-city">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}