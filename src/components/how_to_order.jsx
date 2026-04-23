import config from "../configs/config.js";

const { designTokens: T, contact, orderSteps } = config;

export default function HowToOrder() {
  return (
    <section className="order-section">
      <div className="section-inner">
        <div className="section-header center">
          <div className="label">Simple Process</div>
          <h2 className="section-title center">
            How to <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>order</span>
          </h2>
        </div>

        <div className="steps-grid">
          {orderSteps.map((s, i) => (
            <div key={i} className="step-card">
              <div className="step-icon">{s.icon}</div>
              <div className="step-number">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
              {i < 3 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>

        <div className="order-cta">
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-wa"
          >
            💬 Start your order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}