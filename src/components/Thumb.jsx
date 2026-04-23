import config from "../configs/config.js";

const PALETTE = ["#B8736A", "#6E8FA8", "#6FA880", "#A89A6E", "#8E6EA8", "#A86E8E", "#C09A42", "#5E92A8"];

const makeSVG = (col, i) => {
  const w = "rgba(255,255,255,0.35)";
  const wl = "rgba(255,255,255,0.18)";
  const patterns = [
    `<polygon points="100,18 182,100 100,182 18,100" fill="none" stroke="${w}" stroke-width="2.5"/>
     <polygon points="100,50 150,100 100,150 50,100" fill="${wl}" stroke="${w}" stroke-width="1.5"/>
     <circle cx="100" cy="100" r="14" fill="${w}"/>`,
    `<path d="M0,55 Q50,35 100,55 T200,55" fill="none" stroke="${w}" stroke-width="2"/>
     <path d="M0,85 Q50,65 100,85 T200,85" fill="none" stroke="${wl}" stroke-width="2"/>
     <path d="M0,115 Q50,95 100,115 T200,115" fill="none" stroke="${wl}" stroke-width="2"/>
     <path d="M0,145 Q50,125 100,145 T200,145" fill="none" stroke="${wl}" stroke-width="1.5"/>`,
    `<circle cx="100" cy="100" r="72" fill="none" stroke="${w}" stroke-width="2.5"/>
     <circle cx="100" cy="100" r="48" fill="none" stroke="${wl}" stroke-width="2"/>
     <circle cx="100" cy="100" r="24" fill="${wl}" stroke="${w}" stroke-width="1.5"/>`,
    [0, 1, 2, 3, 4]
      .map((r) =>
        [0, 1, 2, 3, 4]
          .map((c) => `<circle cx="${28 + c * 36}" cy="${28 + r * 36}" r="4.5" fill="${w}"/>`)
          .join("")
      )
      .join(""),
    `<line x1="0" y1="0" x2="200" y2="200" stroke="${w}" stroke-width="1.5"/>
     <line x1="200" y1="0" x2="0" y2="200" stroke="${w}" stroke-width="1.5"/>
     <rect x="55" y="55" width="90" height="90" fill="none" stroke="${w}" stroke-width="2.5"/>
     <rect x="78" y="78" width="44" height="44" fill="${wl}"/>`,
    `<polygon points="100,28 164,64 164,136 100,172 36,136 36,64" fill="none" stroke="${w}" stroke-width="2.5"/>
     <polygon points="100,56 134,74 134,126 100,144 66,126 66,74" fill="${wl}" stroke="${w}" stroke-width="1.5"/>`,
    Array.from({ length: 8 }, (_, k) => {
      const a = (k * 45 * Math.PI) / 180;
      return `<line x1="100" y1="100" x2="${100 + 80 * Math.cos(a)}" y2="${100 + 80 * Math.sin(a)}" stroke="${w}" stroke-width="1.5"/>`;
    }).join("") + `<circle cx="100" cy="100" r="24" fill="${wl}" stroke="${w}" stroke-width="2"/>`,
    `<path d="M28,72 L28,28 L72,28" fill="none" stroke="${w}" stroke-width="3"/>
     <path d="M128,28 L172,28 L172,72" fill="none" stroke="${w}" stroke-width="3"/>
     <path d="M28,128 L28,172 L72,172" fill="none" stroke="${w}" stroke-width="3"/>
     <path d="M128,172 L172,172 L172,128" fill="none" stroke="${w}" stroke-width="3"/>`
  ];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${col}"/>${patterns[i % patterns.length]}</svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default function Thumb({ index }) {
  const col = PALETTE[index % PALETTE.length];
  return (
    <div className="thumb">
      <img src={makeSVG(col, index)} alt="" />
    </div>
  );
}