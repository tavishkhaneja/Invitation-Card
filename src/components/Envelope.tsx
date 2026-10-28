import React, { useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { CornerOrnament, MonogramBadge } from './DecorativeOrnament';
import { WaxSeal } from './WaxSeal';

interface EnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
  isOpening: boolean;
}

export const Envelope: React.FC<EnvelopeProps> = ({
  onOpen,
  isOpen,
  isOpening,
}) => {
  const { bride, groom, monogram, wording } = weddingConfig;
  const [isHovered, setIsHovered] = useState(false);

  const handleTriggerOpen = () => {
    if (!isOpen && !isOpening) {
      onOpen();
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-[420px] px-4">
      {/* 3D Envelope Container */}
      <div
        className="perspective-container relative w-full flex items-center justify-center"
        style={{
          minHeight: 'min(560px, 78vh)',
        }}
      >
        {/* Main Envelope Body */}
        <div
          onClick={handleTriggerOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleTriggerOpen();
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="button"
          tabIndex={isOpen ? -1 : 0}
          aria-label={`Wedding Invitation of ${bride.fullName} and ${groom.fullName}. ${wording.envelopePrompt}`}
          className={`relative w-full max-w-[360px] sm:max-w-[390px] h-[500px] sm:h-[560px] max-h-[78vh] envelope-texture rounded-sm cursor-pointer transition-all duration-700 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] ${
            isHovered && !isOpening && !isOpen
              ? '-translate-y-1 shadow-[0_24px_50px_rgba(48,34,31,0.16)]'
              : 'translate-y-0 shadow-[0_16px_36px_rgba(48,34,31,0.12)]'
          }`}
          style={{
            border: '1px solid rgba(176, 141, 87, 0.45)',
          }}
        >
          {/* Subtle Outer Embossed Gold Border */}
          <div className="absolute inset-3 border border-[#B08D57]/40 pointer-events-none rounded-[1px]" />
          <div className="absolute inset-4 border border-[#B08D57]/20 pointer-events-none rounded-[1px]" />

          {/* Corner Traditional Ornaments on Envelope Front */}
          <div className="pointer-events-none">
            <CornerOrnament position="top-left" className="absolute top-2 left-2" size={40} />
            <CornerOrnament position="top-right" className="absolute top-2 right-2" size={40} />
            <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2" size={40} />
            <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2" size={40} />
          </div>

          {/* Inner Card Preview Peak (slides out during opening) */}
          <div
            className={`absolute left-6 right-6 top-8 bottom-8 paper-texture rounded-sm border border-[#B08D57]/40 transition-all duration-1000 ease-in-out pointer-events-none flex flex-col items-center justify-center p-6 ${
              isOpening || isOpen
                ? '-translate-y-24 scale-105 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
            style={{
              zIndex: 2,
            }}
          >
            {/* Elegant Monogram & Couple Identification on Inner Card preview */}
            <div className="flex flex-col items-center text-center">
              <MonogramBadge size={58} variant="gold" className="mb-4" />
              <span className="font-serif text-sm tracking-[0.25em] text-[#8C6D3B] uppercase mb-1">
                The Wedding of
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#641E2B] font-medium tracking-wide">
                {bride.firstName} &amp; {groom.firstName}
              </h2>
            </div>
          </div>

          {/* Lower Envelope Pocket (Front Triangular Folds) */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none overflow-hidden rounded-b-sm"
            style={{ zIndex: 4 }}
          >
            {/* Left triangle flap illusion */}
            <div
              className="absolute left-0 bottom-0 w-full h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(232, 220, 200, 0.95) 0%, rgba(244, 237, 224, 0.98) 100%)',
                clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
                filter: 'drop-shadow(2px 0 3px rgba(48, 34, 31, 0.05))',
              }}
            />
            {/* Right triangle flap illusion */}
            <div
              className="absolute right-0 bottom-0 w-full h-full"
              style={{
                background: 'linear-gradient(225deg, rgba(232, 220, 200, 0.95) 0%, rgba(244, 237, 224, 0.98) 100%)',
                clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)',
                filter: 'drop-shadow(-2px 0 3px rgba(48, 34, 31, 0.05))',
              }}
            />
            {/* Bottom triangle flap pocket */}
            <div
              className="absolute inset-x-0 bottom-0 h-full border-t border-[#B08D57]/30"
              style={{
                background: 'linear-gradient(to top, #E8DCC8 0%, #F4EDE0 100%)',
                clipPath: 'polygon(0 100%, 50% 35%, 100% 100%)',
                boxShadow: '0 -4px 12px rgba(48, 34, 31, 0.06)',
              }}
            />
          </div>

          {/* Top Flap (Folds Open in 3D) */}
          <div
            className="absolute top-0 inset-x-0 h-1/2 transition-transform duration-1000 ease-in-out preserve-3d"
            style={{
              transformOrigin: 'top center',
              transform: isOpening || isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: isOpening || isOpen ? 1 : 6,
            }}
          >
            {/* Front of the Top Flap */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden"
              style={{
                background: 'linear-gradient(to bottom, #F4EDE0 0%, #E8DCC8 100%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 92%)',
                filter: 'drop-shadow(0 4px 6px rgba(48, 34, 31, 0.12))',
              }}
            >
              {/* Delicate Gold Piping on Flap Edges */}
              <svg
                className="w-full h-full absolute inset-0 pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 2 L 50 89 L 98 2"
                  stroke="#B08D57"
                  strokeWidth="1.2"
                  strokeOpacity="0.6"
                  fill="none"
                />
              </svg>
            </div>

            {/* Backside of the Top Flap (revealed once rotated 180deg) */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden"
              style={{
                transform: 'rotateX(180deg)',
                background: 'linear-gradient(to top, #EDE3D4 0%, #FDFBF7 100%)',
                clipPath: 'polygon(0 100%, 100% 100%, 50% 8%)',
                borderBottom: '1px solid rgba(176, 141, 87, 0.3)',
              }}
            />

            {/* Center Wax Seal attached to the flap apex */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-out ${
                isOpening || isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
              }`}
              style={{
                top: '72%',
                zIndex: 10,
              }}
            >
              <WaxSeal
                size={66}
                initials={monogram.initials}
                isHovered={isHovered}
                onClick={handleTriggerOpen}
              />
            </div>
          </div>

          {/* Envelope Ambient Glow & Center Crest when closed */}
          <div
            className={`absolute top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center transition-opacity duration-500 pointer-events-none ${
              isOpening || isOpen ? 'opacity-0' : 'opacity-90'
            }`}
            style={{ zIndex: 3 }}
          >
            <span className="font-serif tracking-[0.2em] text-[#8C6D3B] text-xs uppercase mb-1">
              Wedding Invitation
            </span>
            <p className="font-serif text-lg text-[#641E2B] font-medium tracking-wide">
              {bride.firstName} &amp; {groom.firstName}
            </p>
          </div>
        </div>
      </div>

      {/* Instruction beneath the envelope: "Tap to open your invitation" */}
      <div
        className={`mt-6 text-center transition-all duration-500 ${
          isOpening || isOpen ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <button
          onClick={handleTriggerOpen}
          className="group inline-flex flex-col items-center cursor-pointer focus:outline-none"
        >
          <span className="font-serif italic text-base sm:text-lg text-[#641E2B] group-hover:text-[#4A141E] tracking-wider transition-colors">
            {wording.envelopePrompt}
          </span>
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mt-1.5 transition-all duration-300 group-hover:w-20" />
        </button>
      </div>
    </div>
  );
};
