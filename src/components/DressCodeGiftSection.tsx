import React from 'react';
import { weddingData } from '../data/weddingConfig';

export const DressCodeGiftSection: React.FC = () => {
  const { dressCode, giftPreference } = weddingData;

  return (
    <section
      aria-label="Dress Code and Gift Preference"
      className="relative w-full text-center py-14 sm:py-16 bg-[#f6f1e8] overflow-hidden"
    >
      {/* Swaying Rose Top Right */}
      <div className="absolute top-2 right-[-20px] w-36 sm:w-44 pointer-events-none z-10 animate-[swayTopRight_6s_infinite_linear]">
        <img
          src="/images/decor/rose-accent.png"
          alt=""
          className="w-full h-auto object-contain opacity-90"
        />
      </div>

      {/* Swaying Card Decor Bottom Left */}
      <div className="absolute bottom-2 left-[-15px] w-32 sm:w-36 pointer-events-none z-10 animate-[swayBottomLeft_5s_infinite_linear]">
        <img
          src="/images/decor/torn-card-bg.png"
          alt=""
          className="w-full h-auto object-contain opacity-75"
        />
      </div>

      <div className="relative z-20 max-w-[420px] mx-auto px-6 space-y-10">
        {/* Dress Code Block */}
        <div className="space-y-2.5">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#a67d2b] font-light tracking-wide">
            {dressCode.title}
          </h2>
          <p className="font-serif text-base sm:text-[17px] text-[#5a4336] font-light leading-relaxed max-w-sm mx-auto">
            {dressCode.description}
          </p>
        </div>

        {/* Delicate Golden Divider */}
        <div className="w-20 h-[1px] bg-[#c5a059]/50 mx-auto" />

        {/* Gift Preference Block */}
        <div className="space-y-2.5">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#a67d2b] font-light tracking-wide">
            {giftPreference.title}
          </h2>
          <p className="font-serif text-base sm:text-[17px] text-[#5a4336] font-light leading-relaxed max-w-sm mx-auto">
            {giftPreference.description}
          </p>
        </div>
      </div>
    </section>
  );
};
