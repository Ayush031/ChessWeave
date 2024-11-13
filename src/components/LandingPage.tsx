import { ChevronRight } from "lucide-react";
import { useConnection } from "arweave-wallet-kit";
import Link from "next/link";

const chessPieces = [
  {
    type: "pawn",
    path: "M36,95h28v-5l-5.8-4.8c-1.8-1.5-2.2-4.1-1-6.1l6.9-11.5c1.4-2.3,3.9-3.7,6.6-3.7h9.6c2.2,0,4.3,0.9,5.8,2.4l5.9,5.9V22c0-3.3-2.7-6-6-6H14c-3.3,0-6,2.7-6,6v50.1l5.9-5.9c1.5-1.5,3.6-2.4,5.8-2.4h9.6c2.7,0,5.2,1.4,6.6,3.7l6.9,11.5c1.2,2,0.8,4.6-1,6.1L36,90V95z",
  },
  {
    type: "rook",
    path: "M50,10c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S72.1,10,50,10z M50,80c-16.5,0-30-13.5-30-30s13.5-30,30-30s30,13.5,30,30S66.5,80,50,80z",
    circle: { cx: 50, cy: 50, r: 10 },
  },
];

const LandingPage = () => {
  const { connected } = useConnection();

  return (
    <div className="chess-landing">
      <main>
        <div className="chess-background">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className={`chess-square ${
                (Math.floor(i / 8) + i) % 2 === 0 ? "green" : "black"
              }`}
              style={{ animationDuration: `${3 + Math.random() * 2}s` }}
            />
          ))}
        </div>
        <div className="content">
          <h2>
            <span className="highlight">Think</span> Strategically
            <br />
            <span className="highlight">Play</span> Brilliantly
          </h2>
          <p>
            Experience chess like never before. Our cutting-edge web game brings
            the ancient art of strategy to the modern digital world.
          </p>
          <div className="cta-buttons">
            {connected && (
              <Link href="/game" className="btn btn-primary">
                <span>Let's Play</span>
                <ChevronRight className="chevron" />
              </Link>
            )}
          </div>
        </div>
        {chessPieces.map((piece, index) => (
          <div className={`chess-piece ${piece.type}`} key={index}>
            <svg viewBox="0 0 100 100">
              <path d={piece.path} />
              {piece.circle && (
                <circle
                  cx={piece.circle.cx}
                  cy={piece.circle.cy}
                  r={piece.circle.r}
                />
              )}
            </svg>
          </div>
        ))}
      </main>
    </div>
  );
};

export default LandingPage;
