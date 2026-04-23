import config from "../configs/config.js";

const { designTokens: T, features } = config;

export default function WhyDesignholic() {
  return (
    <section id="about" className="why-section">
      <div className="section-inner">
        <div className="section-header center">
          <div className="label light">Why Designholic</div>
          <h2 className="section-title light center">
            Crafted different. <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>Lived beautifully.</span>
          </h2>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card ${i === 0 ? "active" : ""}`}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}