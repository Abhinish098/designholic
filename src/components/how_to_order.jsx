import { useState, useEffect, useRef } from "react";
import config from "../configs/config.js";

const { designTokens: T, orderSteps } = config;

/* Material Symbols icon name per step (same order as orderSteps) */
const STEP_ICONS = ["photo_camera", "chat", "payments", "local_shipping"];

/* ─── Reusable StepCard component ──────────────────────────────── */
function StepCard({ step, icon, index, visible }) {
  return (
    <div
      className={`step-card${visible ? " step-card--visible" : ""}`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      <div className="step-icon-wrap">
        <span className="material-symbols-outlined step-icon">{icon}</span>
      </div>

      <div className="step-body">
        <span className="step-label">Step {index + 1}</span>
        <h3 className="step-card-title">{step.title}</h3>
        <p className="step-card-desc">{step.desc}</p>
      </div>
    </div>
  );
}

/* ─── Arrow connector between cards ────────────────────────────── */
function Connector() {
  return (
    <div className="step-connector" aria-hidden="true">
      <span className="material-symbols-outlined step-connector-icon">
        arrow_forward
      </span>
    </div>
  );
}

/* ─── Section wrapper ───────────────────────────────────────────── */
export default function HowToOrder() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="order-section">
      <div className="section-inner">
        {/* ── Header ── */}
        <div className="section-header center">
          <div className="label">Simple Process</div>
          <h2 className="section-title center">
            How to{" "}
            <span
              style={{
                color: T.colors.red,
                fontStyle: "italic",
                fontFamily: T.fonts.PF,
              }}
            >
              order?
            </span>
          </h2>
        </div>

        {/* ── Card flow ── */}
        <div className="steps-flow" ref={containerRef}>
          {orderSteps.map((step, i) => (
            <>
              <div key={step.n} className="steps-flow-item">
                <StepCard
                  step={step}
                  icon={STEP_ICONS[i]}
                  index={i}
                  visible={visible}
                />
              </div>
              {i < orderSteps.length - 1 && <Connector key={`conn-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}