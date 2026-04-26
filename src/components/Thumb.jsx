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

// ── PLATES ────────────────────────────────────────────────
import p_kiwi1 from "../assets/Plates_collection/Kiwi Plate/1A22F678-5EC0-431D-86E4-6546E884B65F.png";
import p_kiwi2 from "../assets/Plates_collection/Kiwi Plate/39E94CEB-C2C5-4F33-83AE-828AC8CB3D62.png";
import p_kiwi3 from "../assets/Plates_collection/Kiwi Plate/420A86A1-1271-4A6A-A1EF-E0D049C61BF9.png";
import p_por1 from "../assets/Plates_collection/Portion Plate/37ADE9FA-6CB0-4063-93A4-45F619E88C01.png";
import p_por2 from "../assets/Plates_collection/Portion Plate/DSC_6999.jpg";
import p_por3 from "../assets/Plates_collection/Portion Plate/f7ed1ed2-8dc3-4084-91bb-c63171a2012f.png";
import p_ros1 from "../assets/Plates_collection/Rosava/BBD08B2C-EB0E-47EA-95B9-44CC76D61F1E.png";
import p_ros2 from "../assets/Plates_collection/Rosava/DSC_6987.jpg";
import p_sap1 from "../assets/Plates_collection/Sapphire Bloom/ABBA4C23-C98F-4CDF-BEC0-6210DF7CE764 (1).png";
import p_sap2 from "../assets/Plates_collection/Sapphire Bloom/DSC_6990.jpg";
import p_toast1 from "../assets/Plates_collection/Toast and Tasty Plate/DSC_7023.jpg";
import p_toast2 from "../assets/Plates_collection/Toast and Tasty Plate/DSC_7026.jpg";
import p_toast3 from "../assets/Plates_collection/Toast and Tasty Plate/DSC_7112.jpg";
import p_vit1 from "../assets/Plates_collection/Vitamin-C plate/58918BBC-33D6-4B57-BC29-EA3930E7DC9D.png";
import p_vit2 from "../assets/Plates_collection/Vitamin-C plate/DSC_7010 copy.jpg";
import p_vit3 from "../assets/Plates_collection/Vitamin-C plate/DSC_7122.jpg";
import p_wat1 from "../assets/Plates_collection/Water melon/01.png";

// ── SPOONS ────────────────────────────────────────────────
import s_buzz1 from "../assets/Spoons_collection/Buzz Spoon/314cfd42-4867-47b7-93ea-dfe3d2af7f76.png";
import s_buzz2 from "../assets/Spoons_collection/Buzz Spoon/7a152b84-0ff4-40e3-83e5-cf31fe75a28c.png";
import s_buzz3 from "../assets/Spoons_collection/Buzz Spoon/e62fb8f2-7f67-4dc5-b7a7-92a015523af3.png";
import s_fea1 from "../assets/Spoons_collection/Feathers Touch/63e68709-1bba-4e61-9b53-79c81522d60f.png";
import s_fea2 from "../assets/Spoons_collection/Feathers Touch/b82454ee-58de-4a67-9e9e-5fafc7f7754c.png";
import s_fea3 from "../assets/Spoons_collection/Feathers Touch/DSC_6992.jpg";
import s_flo1 from "../assets/Spoons_collection/Floral Spoon/98e9d749-05bb-40a4-8701-6b79d7cf48de.png";
import s_flo2 from "../assets/Spoons_collection/Floral Spoon/ef5dbb99-2814-43a7-a7fd-af0e5be9c503.png";
import s_heart1 from "../assets/Spoons_collection/Heart of Gold Spoon/0e7119e4-2653-410c-ba16-59c68f751b53.png";
import s_heart2 from "../assets/Spoons_collection/Heart of Gold Spoon/4cf96e7d-2a29-484e-8b88-2ea26b4ec0e0.png";
import s_heart3 from "../assets/Spoons_collection/Heart of Gold Spoon/75c26569-37ca-42e4-a6d8-b9447705e98d.png";
import s_heart4 from "../assets/Spoons_collection/Heart of Gold Spoon/D72DBEA5-3686-44B2-9E52-1233FCD119D0.png";
import s_sweet1 from "../assets/Spoons_collection/Sweet Heart Spoon/8FD77C2A-016E-4ADA-AC49-3A5ED35E55DC.png";
import s_sweet2 from "../assets/Spoons_collection/Sweet Heart Spoon/DSC_7038.jpg";
import s_sweet3 from "../assets/Spoons_collection/Sweet Heart Spoon/DSC_7040.jpg";

// ── HANGERS ───────────────────────────────────────────────
import h_hang1 from "../assets/Hanger_collection/Hang-o-meter/01.png";
import h_hang2 from "../assets/Hanger_collection/Hang-o-meter/02.png";
import h_hang3 from "../assets/Hanger_collection/Hang-o-meter/03.png";
import h_moon1 from "../assets/Hanger_collection/Phase of Moon/01.png";
import h_moon2 from "../assets/Hanger_collection/Phase of Moon/02.png";
import h_moon3 from "../assets/Hanger_collection/Phase of Moon/04.png";
import h_safe1 from "../assets/Hanger_collection/Safety Pin Hook/01.png";
import h_safe2 from "../assets/Hanger_collection/Safety Pin Hook/DSC_7204.jpg";
import h_safe3 from "../assets/Hanger_collection/Safety Pin Hook/Measurements.jpg";

// ── DECOR (SIGN BOARDS) ───────────────────────────────────
import d_cau1 from "../assets/Sign_bords_collection/Caution May Contain Drama/01.jpg";
import d_cau2 from "../assets/Sign_bords_collection/Caution May Contain Drama/DSC_6781.jpg";
import d_cau3 from "../assets/Sign_bords_collection/Caution May Contain Drama/DSC_7124.jpg";
import d_cau4 from "../assets/Sign_bords_collection/Caution May Contain Drama/M 1.jpg";
import d_dra1 from "../assets/Sign_bords_collection/Dramatic Exit/DSC_6508.jpg";
import d_dra2 from "../assets/Sign_bords_collection/Dramatic Exit/DSC_6783.jpg";
import d_hot1 from "../assets/Sign_bords_collection/Hot Mess Zone/DSC_6507.jpg";
import d_hot2 from "../assets/Sign_bords_collection/Hot Mess Zone/DSC_6782.jpg";
import d_hot3 from "../assets/Sign_bords_collection/Hot Mess Zone/M 1.jpg";
import d_main1 from "../assets/Sign_bords_collection/Main Character Energy/DSC_6505.jpg";
import d_main2 from "../assets/Sign_bords_collection/Main Character Energy/DSC_6778.jpg";
import d_main3 from "../assets/Sign_bords_collection/Main Character Energy/M 1.jpg";
import d_bad1 from "../assets/Sign_bords_collection/No Bad Vibes/DSC_6503.jpg";
import d_bad2 from "../assets/Sign_bords_collection/No Bad Vibes/DSC_6779.jpg";
import d_bad3 from "../assets/Sign_bords_collection/No Bad Vibes/M 1.jpg";
import d_pea1 from "../assets/Sign_bords_collection/Peace Out This Way/DSC_6504.jpg";
import d_pea2 from "../assets/Sign_bords_collection/Peace Out This Way/DSC_6777.jpg";
import d_pea3 from "../assets/Sign_bords_collection/Peace Out This Way/M 1.jpg";
import d_pri1 from "../assets/Sign_bords_collection/Private Me Time/DSC_6506.jpg";
import d_pri2 from "../assets/Sign_bords_collection/Private Me Time/DSC_6774.jpg";
import d_pri3 from "../assets/Sign_bords_collection/Private Me Time/DSC_6915.jpg";
import d_pri4 from "../assets/Sign_bords_collection/Private Me Time/M 1.jpg";
import d_sna1 from "../assets/Sign_bords_collection/Stop Snack Time/DSC_6502.jpg";
import d_sna2 from "../assets/Sign_bords_collection/Stop Snack Time/DSC_6780.jpg";
import d_sna3 from "../assets/Sign_bords_collection/Stop Snack Time/M 1.jpg";
import d_sna4 from "../assets/Sign_bords_collection/Stop Snack Time/Snack Time.jpg";

// ── GIFTING ───────────────────────────────────────────────
import g_mot1 from "../assets/Mother_silhouette_collection/4F230DF2-9B8A-4DC1-B051-167D18E2F2B6.png";
import g_mot2 from "../assets/Mother_silhouette_collection/CC8B7E4D-4CD4-42AE-9DBD-A9F8A146CF82.png";
import g_mot3 from "../assets/Mother_silhouette_collection/DSC_6991.jpg";
import g_mot4 from "../assets/Mother_silhouette_collection/M.jpg";

const IMAGE_MAP = {
  // GLASS
  "Vintage Coca Cola": [vc1, vc2, vc3, vc4],
  "Black Swan Wine Glass": [bs1, bs2, bs3, bs4, bs5],
  "Bow-tiful Wine Glass": [bb1, bb2, bb3],
  "Bow-tiful Champagne Glass": [bt1, bt2, bt3],
  "Bubble Tumbler": [bu1, bu2, bu3, bu4],
  "Black Heart Champagne Glass": [dw1, dw2, dw3],
  "Rose Champagne Glass": [ro1, ro2, ro3],
  "Spectrum Martini Glass": [sp1, sp2, sp3, sp4],
  "Trippy Beer Glass": [tr1, tr2, tr3],

  // RUGS
  "Beer Mug": [rug_beer1, rug_beer2],
  "Car Rug": [rug_car1, rug_car2, rug_car3],
  "Drip of Love": [rug_heart1, rug_heart2],
  "Vortex Illusion": [rug_illusion1, rug_illusion2, rug_illusion3],
  "Rare Beauty Soft Pinch": [rug_lipstick1, rug_lipstick2, rug_lipstick3],
  "Nike Shoe Box": [rug_nike1, rug_nike2],
  "Sakht Launda": [rug_sakht1, rug_sakht2, rug_sakht3, rug_sakht4],
  "Vaseline": [rug_vase1],
  "Shoes Rug": [rug_shoe1],
  "Sneaker-Foot (Red)": [rug_shoe_r1, rug_shoe_r2],
  "Sneaker-Foot (Orange)": [rug_shoe_o1],
  "Sneaker-Foot (Purple)": [rug_shoe_p1, rug_shoe_p2],

  // VASES
  "Flat Bottle Vase": [v_bot1, v_bot2],
  "Flat Floral Vase": [v_flo1, v_flo2],
  "Fridge Magnet Set": [v_mag1, v_mag2, v_mag3, v_mag4, v_mag5, v_mag6, v_mag7],

  // PLATES
  "Portion Plate": [p_por1, p_por2, p_por3],
  "Toast & Tasty Plate": [p_toast1, p_toast2, p_toast3],
  "Kiwi Plate": [p_kiwi1, p_kiwi2, p_kiwi3],
  "Watermelon Plate": [p_wat1],
  "Vitamin-C Plate": [p_vit1, p_vit2, p_vit3],
  "Sapphire Bloom": [p_sap1, p_sap2],
  "Rosava": [p_ros1, p_ros2],

  // SPOONS
  "Sweet Heart Spoon": [s_sweet1, s_sweet2, s_sweet3],
  "Floral Buzz Spoon": [s_buzz1, s_buzz2, s_buzz3, s_flo1, s_flo2],
  "Heart of Gold Spoon": [s_heart1, s_heart2, s_heart3, s_heart4],
  "Feathers Touch": [s_fea1, s_fea2, s_fea3],

  // HANGERS
  "Safety Pin Hook": [h_safe1, h_safe2, h_safe3],
  "Phases of Moon": [h_moon1, h_moon2, h_moon3],
  "Hang-O-Scale": [h_hang1, h_hang2, h_hang3],

  // DECOR (SIGN BOARDS)
  "Sign Board": [d_pri1, d_pri2, d_pri3, d_pri4],
  "Caution May Contain Drama": [d_cau1, d_cau2, d_cau3, d_cau4],
  "Dramatic Exit": [d_dra1, d_dra2],
  "Hot Mess Zone": [d_hot1, d_hot2, d_hot3],
  "Main Character Energy": [d_main1, d_main2, d_main3],
  "No Bad Vibes": [d_bad1, d_bad2, d_bad3],
  "Peace Out This Way": [d_pea1, d_pea2, d_pea3],
  "Stop Snack Time": [d_sna1, d_sna2, d_sna3, d_sna4],

  // GIFTING
  "Mother Silhouette": [g_mot1, g_mot2, g_mot3, g_mot4]
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