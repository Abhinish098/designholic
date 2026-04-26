import config from "../configs/config.js";

const { designTokens: T, reviews } = config;

export default function WhatTheySaying() {
  return (
    <section className="reviews-section container center">
      <div className="section-inner center">
        <div className="section-header center">
          <div className="section-header center">
            <div className="label center">Happy Customers!</div>
            <h2 className="section-title center">
              What they're{" "}
              <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>
                Saying?
              </span>
            </h2>
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