import config from "../configs/config.js";

const { designTokens: T, features } = config;

export default function WhyDesignholic() {
  return (
    <section id="about" className="why-section">
      <div className="section-inner">
        <div className="section-header center">
          <div className="label light">Why Designholic?</div>
          <h2 className="section-title light center">
            Crafted different. <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>Lived beautifully.</span>
          </h2>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                {f.title === "Pan India Delivery" ? (
                  <svg viewBox="0 0 24 24" width="42" height="42" style={{ borderRadius: '4px', overflow: 'hidden' }}>
                    <rect x="2" y="5" width="20" height="14" rx="2" fill="white" />
                    <path d="M2,7a2,2 0 0,1 2,-2h16a2,2 0 0,1 2,2v3h-20z" fill="#FF9933" />
                    <path d="M2,17a2,2 0 0,0 2,2h16a2,2 0 0,0 2,-2v-3h-20z" fill="#128807" />
                    <circle cx="12" cy="12" r="1.5" fill="none" stroke="#000080" strokeWidth="0.5" />
                    <path d="M12,11v2M11.5,12h1M11.65,11.35l0.7,1.3M12.35,11.35l-0.7,1.3" stroke="#000080" strokeWidth="0.2" />
                  </svg>
                ) : (
                  f.icon
                )}
              </div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}