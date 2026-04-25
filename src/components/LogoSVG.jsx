import { useEffect, useState } from "react";
import logoMain from "../assets/Design_HolicXStore_logo.png";
import logoFooter from "../assets/Design_HolicXStore_logo_1.png";

const ANIMATED_KEY = "dh_logo_animated_v3";

export default function LogoSVG({ variant }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const done = sessionStorage.getItem(ANIMATED_KEY);
    if (!done) {
      setAnimated(true);
      sessionStorage.setItem(ANIMATED_KEY, "1");
    }
  }, []);

  const logoSrc = variant === "footer" ? logoFooter : logoMain;

  return (
    <img
      src={logoSrc}
      alt="Designholic × Store"
      className={`dh-logo-svg${animated ? " dh-logo-draw" : ""}`}
    />
  );
}
