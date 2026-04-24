import config from "../configs/config.js";

// Local video imports
import reel1 from "../assets/Reels/IMG_1374.MP4";
import reel2 from "../assets/Reels/IMG_1376.MP4";
import reel3 from "../assets/Reels/IMG_1377.MP4";
import reel4 from "../assets/Reels/IMG_1381.MP4";
import reel5 from "../assets/Reels/IMG_1382.MP4";

const { designTokens: T, contact } = config;

const REELS = [
  { id: "reel-1", src: reel1 },
  { id: "reel-2", src: reel2 },
  { id: "reel-3", src: reel3 },
  { id: "reel-4", src: reel4 },
  { id: "reel-5", src: reel5 },
];

function PhoneFrame({ videoSrc }) {
  return (
    <div className="reel-phone-wrap">
      <div className="reel-phone minimal">
        {/* Simplified Screen with video */}
        <div className="reel-phone-screen">
          <video
            src={videoSrc}
            className="reel-video"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#000'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function InstagramReels() {
  return (
    <section className="reels-section">
      <div className="section-inner" style={{ maxWidth: '100%', padding: '0' }}>
        {/* Header */}
        <div className="section-header center" style={{ padding: '0 5%' }}>
          <div>
            <div className="label center">
              <span className="star">✦</span>
              As Seen on Instagram
            </div>
            <h2 className="section-title center">
              Catch us on{" "}
              <span style={{ color: T.colors.red, fontStyle: "italic", fontFamily: T.fonts.PF }}>
                Reels
              </span>
            </h2>
          </div>
          <a
            href={contact.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline reels-follow-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow {contact.instagram}
          </a>
        </div>

        {/* Revolving Carousel */}
        <div className="reels-carousel-container">
          <div className="reels-track">
            {/* Double the list for infinite scroll effect */}
            {[...REELS, ...REELS].map((r, idx) => (
              <PhoneFrame key={`${r.id}-${idx}`} videoSrc={r.src} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reels-carousel-container {
          overflow: hidden;
          padding: 60px 0;
          width: 100%;
          position: relative;
        }

        .reels-track {
          display: flex;
          gap: 40px;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .reel-phone.minimal {
          border-radius: 32px;
          border: 4px solid #333;
          padding: 0;
          overflow: hidden;
          width: 350px;
          height: 522px;
          background: #000;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .reel-phone.minimal .reel-phone-screen {
          border-radius: 0;
          height: 100%;
        }

        .reels-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
