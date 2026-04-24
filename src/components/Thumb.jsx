import { useState, useRef, useEffect } from "react";

// ── GLASS ──────────────────────────────────────────────────
import bs1 from "../assets/Glass_collection/Black Swan Glass/170CC31A-CC6C-48F7-A134-244AB1DF0580.PNG";
import bs2 from "../assets/Glass_collection/Black Swan Glass/DSC_6884.jpg";
import bs3 from "../assets/Glass_collection/Black Swan Glass/DSC_6885.jpg";
import bs4 from "../assets/Glass_collection/Black Swan Glass/DSC_7145.jpg";
import bs5 from "../assets/Glass_collection/Black Swan Glass/F2E8DBC2-163E-4BDF-91F9-DF1E0ACFCC98.JPEG";
import bb1 from "../assets/Glass_collection/Bow-Blush Glass/01.jpg";
import bb2 from "../assets/Glass_collection/Bow-Blush Glass/02.jpg";
import bb3 from "../assets/Glass_collection/Bow-Blush Glass/03.jpg";
import bt1 from "../assets/Glass_collection/Bow-tiful Champange Glass/01.jpg";
import bt2 from "../assets/Glass_collection/Bow-tiful Champange Glass/02.png";
import bt3 from "../assets/Glass_collection/Bow-tiful Champange Glass/03.png";
import bu1 from "../assets/Glass_collection/Bubble Tumbler/DSC_6855.jpg";
import bu2 from "../assets/Glass_collection/Bubble Tumbler/DSC_6863.jpg";
import bu3 from "../assets/Glass_collection/Bubble Tumbler/DSC_6867.jpg";
import bu4 from "../assets/Glass_collection/Bubble Tumbler/DSC_6878.jpg";
import dw1 from "../assets/Glass_collection/Double wall champange glass/01.png";
import dw2 from "../assets/Glass_collection/Double wall champange glass/02.png";
import dw3 from "../assets/Glass_collection/Double wall champange glass/03.png";
import ro1 from "../assets/Glass_collection/Rose Champange Glass/01.png";
import ro2 from "../assets/Glass_collection/Rose Champange Glass/02.png";
import ro3 from "../assets/Glass_collection/Rose Champange Glass/DFDBC1BA-CD5D-4125-9FAC-01559471DEBF (1).PNG";
import sp1 from "../assets/Glass_collection/Spectrum Martini Glass/DSC_6835.jpg";
import sp2 from "../assets/Glass_collection/Spectrum Martini Glass/DSC_6838.jpg";
import sp3 from "../assets/Glass_collection/Spectrum Martini Glass/DSC_6840.jpg";
import sp4 from "../assets/Glass_collection/Spectrum Martini Glass/DSC_6841.jpg";
import tr1 from "../assets/Glass_collection/Trippy Beer Glass/01.jpg";
import tr2 from "../assets/Glass_collection/Trippy Beer Glass/02.jpg";
import tr3 from "../assets/Glass_collection/Trippy Beer Glass/03.jpg";
import vc1 from "../assets/Glass_collection/Vintage Coca Cola Glass/BW.jpg";
import vc2 from "../assets/Glass_collection/Vintage Coca Cola Glass/DSC_6898.jpg";
import vc3 from "../assets/Glass_collection/Vintage Coca Cola Glass/DSC_6901.jpg";
import vc4 from "../assets/Glass_collection/Vintage Coca Cola Glass/DSC_7159.jpg";

// ── RUGS ───────────────────────────────────────────────────
import rug_beer1 from "../assets/Rags_collection/Beer Rug/93F6FD45-D183-4352-B34C-0B38BDC1F0C1.PNG";
import rug_beer2 from "../assets/Rags_collection/Beer Rug/DSC_6538.JPG";
import rug_car1 from "../assets/Rags_collection/Car Rug/DSC_6577.JPG";
import rug_car2 from "../assets/Rags_collection/Car Rug/IMG_8770.PNG";
import rug_car3 from "../assets/Rags_collection/Car Rug/IMG_8772.PNG";
import rug_heart1 from "../assets/Rags_collection/Heart Rug/DSC_6565.JPG";
import rug_heart2 from "../assets/Rags_collection/Heart Rug/IMG_8773.PNG";
import rug_illusion1 from "../assets/Rags_collection/Illusion/DSC_6604 copy.jpg";
import rug_illusion2 from "../assets/Rags_collection/Illusion/IMG_8782.PNG";
import rug_illusion3 from "../assets/Rags_collection/Illusion/M (1).jpg";
import rug_lipstick1 from "../assets/Rags_collection/Lipstick Rug/01.png";
import rug_lipstick2 from "../assets/Rags_collection/Lipstick Rug/DSC_6639.jpg";
import rug_lipstick3 from "../assets/Rags_collection/Lipstick Rug/IMG_8786.PNG";
import rug_nike1 from "../assets/Rags_collection/Nike/01.png";
import rug_nike2 from "../assets/Rags_collection/Nike/0EC39F8C-3F27-4884-9C79-2097FAA1A58B.PNG";
import rug_sakht1 from "../assets/Rags_collection/Saskth Launda/9E489033-BBA1-4A8E-ABCC-BB3216BEB71B.PNG";
import rug_sakht2 from "../assets/Rags_collection/Saskth Launda/D749199A-4D1D-4C91-BAC5-B1F2FF23A0E0.JPEG";
import rug_sakht3 from "../assets/Rags_collection/Saskth Launda/DSC_7207.jpg";
import rug_sakht4 from "../assets/Rags_collection/Saskth Launda/Untitled-1.jpg";
import rug_shoe1 from "../assets/Rags_collection/Shoe Rug/JPEG.jpg";
import rug_shoe_r1 from "../assets/Rags_collection/Shoe Rug/Red Shoe Rug/IMG_8775.PNG";
import rug_shoe_r2 from "../assets/Rags_collection/Shoe Rug/Red Shoe Rug/IMG_8776.jpg";
import rug_shoe_o1 from "../assets/Rags_collection/Shoe Rug/Orange Shoe Rug/DSC_6613.jpg";
import rug_shoe_p1 from "../assets/Rags_collection/Shoe Rug/Purple Shoe Rug/IMG_8778.PNG";
import rug_shoe_p2 from "../assets/Rags_collection/Shoe Rug/Purple Shoe Rug/IMG_8779.PNG";
import rug_vase1 from "../assets/Rags_collection/Vaseline/IMG_8769.PNG";

// ── VASES ──────────────────────────────────────────────────
import v_bot1 from "../assets/Vase_collection/Flat Bottle Vase/DSC_6686.jpg";
import v_bot2 from "../assets/Vase_collection/Flat Bottle Vase/M.jpg";
import v_flo1 from "../assets/Vase_collection/Flat Floral Vase/DSC_6705.jpg";
import v_flo2 from "../assets/Vase_collection/Flat Floral Vase/M 2.jpg";
import v_mag1 from "../assets/Vase_collection/Fridge Magnets/EFA355AA-044E-41C0-A8C8-87D3A0B96C92.PNG";
import v_mag2 from "../assets/Vase_collection/Fridge Magnets/M 1.jpg";
import v_mag3 from "../assets/Vase_collection/Fridge Magnets/M 2.jpg";
import v_mag4 from "../assets/Vase_collection/Fridge Magnets/M 3.jpg";
import v_mag5 from "../assets/Vase_collection/Fridge Magnets/M 6.jpg";
import v_mag6 from "../assets/Vase_collection/Fridge Magnets/M4.jpg";
import v_mag7 from "../assets/Vase_collection/Fridge Magnets/M5.jpg";

const IMAGE_MAP = {
  // GLASS
  "Vintage Coca Cola": [vc1/*, vc2, vc3, vc4*/],
  "Black Swan Wine Glass": [bs1/*, bs2, bs3, bs4, bs5*/],
  "Bow-Blush Glass": [bb1/*, bb2, bb3*/],
  "Bow-tiful Champagne Glass": [bt1/*, bt2, bt3*/],
  "Bubble Tumbler": [bu1/*, bu2, bu3, bu4*/],
  "Double Wall Champagne Glass": [dw1/*, dw2, dw3*/],
  "Rose Champagne Glass": [ro1/*, ro2, ro3*/],
  "Spectrum Martini Glass": [sp1/*, sp2, sp3, sp4*/],
  "Trippy Beer Glass": [tr1/*, tr2, tr3*/],

  // RUGS
  "Beer Mug": [rug_beer1/*, rug_beer2*/],
  "Car Rug": [rug_car1/*, rug_car2, rug_car3*/],
  "Drip of Love": [rug_heart1/*, rug_heart2*/],
  "Vortex Illusion": [rug_illusion1/*, rug_illusion2, rug_illusion3*/],
  "Rare Beauty Soft Pinch": [rug_lipstick1/*, rug_lipstick2, rug_lipstick3*/],
  "Nike Shoe Box": [rug_nike1/*, rug_nike2*/],
  "Sakht Launda": [rug_sakht1/*, rug_sakht2, rug_sakht3, rug_sakht4*/],
  "Vaseline": [rug_vase1],
  "Shoes Rug": [rug_shoe1],
  "Sneaker-Foot (Red)": [rug_shoe_r1/*, rug_shoe_r2*/],
  "Sneaker-Foot (Orange)": [rug_shoe_o1],
  "Sneaker-Foot (Purple)": [rug_shoe_p1/*, rug_shoe_p2*/],

  // VASES
  "Flat Bottle Vase": [v_bot1/*, v_bot2*/],
  "Flat Floral Vase": [v_flo1/*, v_flo2*/],
  "Fridge Magnet Set": [v_mag1/*, v_mag2, v_mag3, v_mag4, v_mag5, v_mag6, v_mag7*/]
};

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

export default function Thumb({ product, index }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loadedCount, setLoadedCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const images = IMAGE_MAP[product?.name] || [];

  // Viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;

    // Staggered loading to save bandwidth
    if (loadedCount < images.length) {
      const loadTimer = setTimeout(() => {
        setLoadedCount(prev => prev + 1);
      }, 1500 + (index * 100));
      return () => clearTimeout(loadTimer);
    }

    // Only rotate if visible to save CPU/GPU
    if (!isVisible) return;

    let timer;
    const rotate = () => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
      timer = setTimeout(rotate, 5000);
    };

    timer = setTimeout(rotate, 5000);
    return () => clearTimeout(timer);
  }, [images, loadedCount, index, isVisible]);

  const col = PALETTE[index % PALETTE.length];

  return (
    <div className="thumb" ref={containerRef}>
      {images.length > 0 ? (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: col }}>
          {images.slice(0, loadedCount).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.name}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.8s ease-in-out',
                opacity: i === currentIdx ? 1 : 0,
                zIndex: i === currentIdx ? 1 : 0,
                // GPU Acceleration
                willChange: 'opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            />
          ))}
        </div>
      ) : (
        <img src={makeSVG(col, index)} alt="" />
      )}
    </div>
  );
}