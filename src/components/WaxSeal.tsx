import React from 'react';

interface WaxSealProps {
  className?: string;
  size?: number;
  initials?: string;
  onClick?: () => void;
  isHovered?: boolean;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  className = '',
  size = 64,
  initials = 'K & M',
  onClick,
  isHovered = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out ${
        isHovered ? 'scale-105' : 'scale-100'
      } ${className}`}
      style={{
        width: size,
        height: size,
      }}
      role="button"
      tabIndex={0}
      aria-label="Wax seal with initials K and M, tap to open invitation"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Organic wax perimeter SVG with natural molten wax drips */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full drop-shadow-md"
        fill="none"
      >
        <defs>
          {/* Radial gradient for rich deep maroon lacquer finish */}
          <radialGradient
            id="waxGradient"
            cx="35%"
            cy="32%"
            r="65%"
            fx="35%"
            fy="32%"
          >
            <stop offset="0%" stopColor="#8C2B3C" />
            <stop offset="50%" stopColor="#641E2B" />
            <stop offset="85%" stopColor="#4A141E" />
            <stop offset="100%" stopColor="#300B13" />
          </radialGradient>

          {/* Antique gold gradient for the stamped monogram */}
          <linearGradient id="goldStamp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5CE9F" />
            <stop offset="45%" stopColor="#B08D57" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6D3B" />
          </linearGradient>

          {/* Inner shadow filter */}
          <filter id="embossFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0.5" dy="1" stdDeviation="0.8" floodColor="#1a0005" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Tactile molten wax outer shape with subtle irregular contours */}
        <path
          d="M 50 3
             C 63 2, 75 8, 85 18
             C 94 28, 98 42, 97 54
             C 96 68, 88 80, 78 88
             C 67 96, 52 98, 39 96
             C 26 94, 14 86, 7 74
             C 0 62, 2 47, 6 34
             C 11 20, 23 9, 37 4
             Z"
          fill="url(#waxGradient)"
        />

        {/* Outer wax ridge highlight */}
        <path
          d="M 50 7
             C 61 6, 72 11, 80 20
             C 89 29, 92 41, 91 52
             C 90 64, 83 75, 74 82
             C 64 89, 51 91, 40 89
             C 28 87, 18 80, 12 70
             C 6 59, 7 46, 11 35
             C 15 23, 26 13, 38 8
             Z"
          stroke="#A83C50"
          strokeWidth="1.2"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Inner stamped circular seal impression */}
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="#531622"
          stroke="url(#goldStamp)"
          strokeWidth="1.2"
        />

        {/* Beaded ornamental border around the seal cavity */}
        <circle
          cx="50"
          cy="50"
          r="29"
          stroke="url(#goldStamp)"
          strokeWidth="0.8"
          strokeDasharray="1.5 2.5"
          strokeOpacity="0.85"
        />

        {/* Monogram inside seal */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#goldStamp)"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="17"
          fontWeight="600"
          letterSpacing="1"
          filter="url(#embossFilter)"
        >
          {initials}
        </text>
      </svg>
    </div>
  );
};
