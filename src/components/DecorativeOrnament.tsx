import React from 'react';

interface OrnamentProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Classical Indian wedding fine-line corner ornament.
 * Placed in corners with appropriate rotation (0, 90, 180, 270 deg).
 */
export const CornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position, className = '', size = 48 }) => {
  const rotation = {
    'top-left': 'rotate(0deg)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotation }}
      className={`text-[#B08D57] ${className}`}
      aria-hidden="true"
    >
      {/* Outer corner framing hairlines */}
      <path
        d="M2 38 V 10 C 2 5.58 5.58 2 10 2 H 38"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 34 V 12 C 6 8.69 8.69 6 12 6 H 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />

      {/* Traditional Indian paisley/floral curl accent */}
      <path
        d="M12 28 C 12 18 18 12 28 12 C 22 15 20 20 20 26 C 20 30 24 33 28 32 C 32 31 34 26 31 23 C 28 20 22 22 23 27"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Delicate corner lotus bud dot */}
      <circle cx="10" cy="10" r="1.8" fill="currentColor" />
      <circle cx="17" cy="10" r="1" fill="currentColor" fillOpacity="0.8" />
      <circle cx="10" cy="17" r="1" fill="currentColor" fillOpacity="0.8" />
    </svg>
  );
};

/**
 * Central Indian arch / Kalash-inspired ornamental crest for the top greeting.
 */
export const CrestOrnament: React.FC<OrnamentProps> = ({
  className = '',
  size = 56,
  color = '#B08D57',
}) => {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 120 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center lotus blossom & paisley finial */}
      <path
        d="M60 4 C 54 18 40 26 30 28 C 42 30 52 38 60 54 C 68 38 78 30 90 28 C 80 26 66 18 60 4 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Central inner teardrop/bindu */}
      <path
        d="M60 16 C 57 26 53 32 60 42 C 67 32 63 26 60 16 Z"
        fill={color}
        fillOpacity="0.85"
      />
      {/* Subtle arch flourishes */}
      <path
        d="M10 48 Q 35 48 50 42"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <path
        d="M110 48 Q 85 48 70 42"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <circle cx="10" cy="48" r="1.8" fill={color} />
      <circle cx="110" cy="48" r="1.8" fill={color} />
      <circle cx="60" cy="62" r="1.5" fill={color} />
    </svg>
  );
};

/**
 * Traditional ornamental divider line with a central diamond motif.
 */
export const DividerOrnament: React.FC<{
  className?: string;
  width?: number | string;
  color?: string;
}> = ({ className = '', width = '100%', color = '#B08D57' }) => {
  return (
    <div className={`flex items-center justify-center my-4 ${className}`} style={{ width }}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B08D57]/60 to-[#B08D57]" />
      <div className="mx-3 flex items-center gap-1.5 text-[#B08D57]">
        <span className="w-1 h-1 rounded-full bg-[#B08D57]/70" />
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect
            x="8"
            y="1"
            width="9.9"
            height="9.9"
            transform="rotate(45 8 1)"
            stroke={color}
            strokeWidth="1"
          />
          <circle cx="8" cy="8" r="1.8" fill="#641E2B" />
        </svg>
        <span className="w-1 h-1 rounded-full bg-[#B08D57]/70" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B08D57]/60 to-[#B08D57]" />
    </div>
  );
};

/**
 * Ring ceremony symbol: interlocking ceremonial gold rings.
 */
export const RingCeremonyIcon: React.FC<OrnamentProps> = ({
  className = '',
  size = 36,
  color = '#B08D57',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* First ring with subtle diamond sparkle */}
      <circle
        cx="19"
        cy="26"
        r="11"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Solitaire setting on the first ring */}
      <path
        d="M19 12 L 21 15 L 17 15 Z"
        fill={color}
      />
      <circle cx="19" cy="11" r="1.5" fill="#641E2B" />

      {/* Second interlocking ring */}
      <circle
        cx="29"
        cy="26"
        r="11"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="28 8"
      />
    </svg>
  );
};

/**
 * Wedding ceremony symbol: sacred blooming Indian lotus mandala.
 */
export const WeddingCeremonyIcon: React.FC<OrnamentProps> = ({
  className = '',
  size = 36,
  color = '#B08D57',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central lotus blossom */}
      <path
        d="M24 10 C 22 17 19 22 24 30 C 29 22 26 17 24 10 Z"
        stroke={color}
        strokeWidth="1.3"
        fill={color}
        fillOpacity="0.2"
      />
      {/* Left petal */}
      <path
        d="M23 27 C 17 26 13 22 12 16 C 18 17 21 21 23 27 Z"
        stroke={color}
        strokeWidth="1.2"
      />
      {/* Right petal */}
      <path
        d="M25 27 C 31 26 35 22 36 16 C 30 17 27 21 25 27 Z"
        stroke={color}
        strokeWidth="1.2"
      />
      {/* Bottom base curve */}
      <path
        d="M15 32 C 20 35 28 35 33 32"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="37" r="1.5" fill={color} />
    </svg>
  );
};

/**
 * Monogram Emblem for Karishma & Mohit ("K & M")
 */
export const MonogramBadge: React.FC<{
  className?: string;
  size?: number;
  variant?: 'gold' | 'maroon';
}> = ({ className = '', size = 64, variant = 'gold' }) => {
  const isGold = variant === 'gold';
  const borderColor = isGold ? '#B08D57' : '#641E2B';
  const textColor = isGold ? '#B08D57' : '#641E2B';

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Monogram K and M"
    >
      {/* Circular delicate beaded and hairline border */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke={borderColor}
          strokeWidth="0.8"
          strokeOpacity="0.8"
        />
        <circle
          cx="32"
          cy="32"
          r="27"
          stroke={borderColor}
          strokeWidth="1.2"
          strokeDasharray="1.5 3"
        />
        <circle
          cx="32"
          cy="32"
          r="24"
          stroke={borderColor}
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />
      </svg>

      {/* Monogram Text */}
      <div className="relative flex items-center justify-center font-serif tracking-widest">
        <span
          className="text-lg font-medium"
          style={{ color: textColor }}
        >
          K
        </span>
        <span
          className="text-xs mx-0.5 font-serif italic"
          style={{ color: isGold ? '#8C6D3B' : '#B08D57' }}
        >
          &amp;
        </span>
        <span
          className="text-lg font-medium"
          style={{ color: textColor }}
        >
          M
        </span>
      </div>
    </div>
  );
};
