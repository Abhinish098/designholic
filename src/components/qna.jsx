import { useState } from "react";
import config from "../configs/config.js";

const { designTokens: T, faqs } = config;

export default function QNA() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <div className="section-header center">
          <div>
            <div className="section-header center">
              <div className="label center">FAQs</div>
              <h2 className="section-title center">
                Got <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>questions?</span>
              </h2>
            </div>
          </div>
        </div>

        {faqs.map((f, i) => (
          <div key={i} className="faq-row">
            <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <span>{f.q}</span>
              <span className={`faq-icon ${openFaq === i ? "open" : ""}`}>
                {openFaq === i ? "−" : "+"}
              </span>
            </button>
            {openFaq === i && (
              <div className="faq-answer">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}