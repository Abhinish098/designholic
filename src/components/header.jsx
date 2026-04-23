import config from "../configs/config.js";

const { designTokens: T, contact } = config;

export default function Header({ scrolled, goto }) {
  return (
    <nav className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div 
          className="logo" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          DESIGN<span style={{ color: T.colors.red }}>HOLIC</span>
          <span className="logo-sub"> ×STORE</span>
        </div>

        <div className="nav-links">
          {[
            ["Products", "products"],
            ["About", "about"],
            ["FAQ", "faq"],
            ["Contact", "contact"]
          ].map(([lbl, id]) => (
            <span key={id} className="nav-link" onClick={() => goto(id)}>
              {lbl}
            </span>
          ))}
        </div>

        <a
          href={contact.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-solid"
        >
          💬 Order Now
        </a>
      </div>
    </nav>
  );
}