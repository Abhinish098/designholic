import config from "../configs/config.js";

const { designTokens: T, contact, orderSteps } = config;

export default function HowToOrder() {
  return (
    <section className="order-section">
      <div className="section-inner">
        <div className="section-header center">
          <div className="label">Simple Process</div>
          <h2 className="section-title center">
            How to <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>order?</span>
          </h2>
        </div>

        <div className="steps-list">
          <div className="simple-step">
            <span className="step-num">Step 01</span>
            <div className="step-content">
              <span className="step-title">Screenshot:</span>
              <span className="step-desc">Explore our curated categories and capture a screenshot of the unique pieces that catch your eye and spark joy for your home.</span>
            </div>
          </div>
          <div className="simple-step">
            <span className="step-num">Step 02</span>
            <div className="step-content">
              <span className="step-title">WhatsApp Us:</span>
              <span className="step-desc">Simply share your saved screenshots with us on WhatsApp at +91 82976 70555. We're here to help you finalize your selection and check availability.</span>
            </div>
          </div>
          <div className="simple-step">
            <span className="step-num">Step 03</span>
            <div className="step-content">
              <span className="step-title">Pay Easily:</span>
              <span className="step-desc">Securely complete your purchase using GPay, Paytm, PhonePe, or a direct bank transfer. Once payment is confirmed, your order is locked in and ready.</span>
            </div>
          </div>
          <div className="simple-step">
            <span className="step-num">Step 04</span>
            <div className="step-content">
              <span className="step-title">We Dispatch:</span>
              <span className="step-desc">Relax as our team carefully packs your order. We dispatch within 3–7 business days and will share tracking details so you can follow its journey.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}