import config from "../configs/config.js";

const { designTokens: T, contact } = config;

export default function GetInTouch() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-info">
          <div className="label">Get in touch</div>
          <h2 className="section-title">
            Let's talk <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>design</span>
          </h2>
          <p className="contact-desc">
            Place orders, ask questions, or share your space inspo. We're a WhatsApp message away and respond super fast.
          </p>

          <div className="contact-links">
            {[
              { icon: "📱", label: "WhatsApp / Call", val: contact.whatsapp, href: contact.whatsappLink },
              { icon: "📷", label: "Instagram", val: contact.instagram, href: contact.instagramLink },
              { icon: "✉️", label: "Email", val: contact.email, href: `mailto:${contact.email}` }
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">{item.icon}</div>
                <div>
                  <div className="contact-link-label">{item.label}</div>
                  <div className="contact-link-value">{item.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="whatsapp-card">
          <div className="whatsapp-card-content">
            <div className="wa-icon">💬</div>
            <h3 className="wa-title">Order on WhatsApp</h3>
            <p className="wa-desc">
              Screenshot your favourite product from our catalogue and send it to us. That's literally all it takes!
            </p>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
            >
              💬 Chat on WhatsApp
            </a>

            <div className="payment-info">
              <div className="payment-label">Accepted Payments</div>
              <div className="payment-methods">
                {config.paymentMethods.map((m) => (
                  <span key={m} className="payment-tag">{m}</span>
                ))}
              </div>
              <div className="upi-id">UPI ID: {contact.upiId}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}