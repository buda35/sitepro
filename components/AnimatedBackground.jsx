'use client';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <style jsx>{`
        .wave-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: linear-gradient(45deg, #FDB912, #CD291E);
          opacity: 0.1;
          border-radius: 40%;
          animation: wave 15s infinite linear;
        }

        .wave1 {
          animation-duration: 15s;
        }

        .wave2 {
          animation-duration: 20s;
          opacity: 0.15;
        }

        .wave3 {
          animation-duration: 25s;
          opacity: 0.2;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
} 