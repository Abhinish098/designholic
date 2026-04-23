import config from "../configs/config.js";

const { designTokens: T, contact } = config;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              DESIGN<span style={{ color: T.colors.red }}>HOLIC</span>
              <span className="logo-sub"> ×STORE</span>
            </div>
            <div className="footer-tagline">Where design meets daily life.</div>
          </div>

          <div className="footer-links">
            {[
              { icon: "📷", label: "Instagram", href: contact.instagramLink },
              { icon: "💬", label: "WhatsApp", href: contact.whatsappLink },
              { icon: "✉️", label: "Email", href: `mailto:${contact.email}` }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Designholic × Store. All rights reserved.</span>
          <span>Ships Pan India 🇮🇳 · Free delivery above ₹1,500</span>
        </div>
      </div>
    </footer>
  );
}