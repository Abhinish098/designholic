import config from "../configs/config.js";

const { designTokens: T, contact, stats } = config;

export default function Banner({ goto }) {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-left">
          <div className="banner-tag">
            <span className="star">✦</span>
            <span>Handcrafted with love</span>
          </div>

          <h1 className="banner-title">
            Design that<br />
            <span style={{ color: T.colors.red, fontStyle: "italic" }}>lives</span> with you
          </h1>

          <p className="banner-desc">
            Unique tufted rugs, artisan tableware & quirky décor — crafted to transform every corner of your home into something extraordinary.
          </p>

          <div className="banner-buttons">
            <button className="btn btn-solid" onClick={() => goto("products")}>
              Explore Products
            </button>
            <a
              href={contact.instagramLink}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              📷 {contact.instagram}
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="banner-right">
          <div className="brand-card">
            <div className="corner-brackets">
              {[
                { top: 20, left: 20 },
                { top: 20, right: 20 },
                { bottom: 20, left: 20 },
                { bottom: 20, right: 20 }
              ].map((pos, i) => (
                <div key={i} className="corner-bracket" style={pos} />
              ))}
            </div>

            <div className="brand-card-content">
              <div className="brand-title">DESIGN</div>
              <div className="brand-subtitle">HOLIC</div>
              <div className="brand-tag">× STORE</div>

              <div className="brand-categories">
                {config.brandCategories.map((cat) => (
                  <span key={cat} className="category-tag">{cat}</span>
                ))}
              </div>

              <div className="brand-contact">
                <div>{contact.whatsapp}</div>
                <div>{contact.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}