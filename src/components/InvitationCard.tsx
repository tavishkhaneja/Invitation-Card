import React from 'react';
import { weddingConfig } from '../data/weddingConfig';
import {
  CornerOrnament,
  CrestOrnament,
  DividerOrnament,
  MonogramBadge,
} from './DecorativeOrnament';
import { CeremonyDetails } from './CeremonyDetails';
import { VenueDetails } from './VenueDetails';
import { RotateCcw } from 'lucide-react';

interface InvitationCardProps {
  onClose?: () => void;
  isOpening?: boolean;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({
  onClose,
  isOpening = false,
}) => {
  const { bride, groom, wording, events, venue, year } = weddingConfig;

  return (
    <article
      className={`relative w-full max-w-[540px] mx-auto paper-texture rounded-sm border border-[#B08D57]/50 shadow-2xl transition-all duration-700 ease-out select-none ${
        isOpening ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'
      }`}
      style={{
        boxShadow:
          '0 4px 6px -1px rgba(100, 30, 43, 0.05), 0 20px 40px -4px rgba(48, 34, 31, 0.12), 0 0 0 1px rgba(176, 141, 87, 0.25)',
      }}
      aria-label="Wedding Invitation Card for Karishma Puri and Mohit Bhardwaj"
    >
      {/* Decorative Outer Hairline Inset Frame with Antique Gold Border */}
      <div className="absolute inset-3 border border-[#B08D57]/40 pointer-events-none rounded-[1px]" />
      <div className="absolute inset-4 border border-[#B08D57]/20 pointer-events-none rounded-[1px]" />

      {/* Four Traditional Indian Corner Ornaments */}
      <div className="pointer-events-none">
        <CornerOrnament position="top-left" className="absolute top-2.5 left-2.5" size={44} />
        <CornerOrnament position="top-right" className="absolute top-2.5 right-2.5" size={44} />
        <CornerOrnament position="bottom-left" className="absolute bottom-2.5 left-2.5" size={44} />
        <CornerOrnament position="bottom-right" className="absolute bottom-2.5 right-2.5" size={44} />
      </div>

      {/* Main Card Content Container */}
      <div className="px-6 py-10 sm:px-10 sm:py-12 flex flex-col items-center text-center relative z-10">
        
        {/* Top Auspicious Crest Motif */}
        <div className="mb-3 text-[#B08D57]">
          <CrestOrnament size={58} />
        </div>

        {/* Section A: Opening Greeting */}
        <p className="font-serif italic text-base sm:text-lg text-[#8C6D3B] tracking-wide mb-3">
          {wording.greeting}
        </p>

        {/* Couple's Names - Primary Visual Focal Point */}
        <header className="my-2 sm:my-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-[0.08em] text-[#641E2B] leading-tight uppercase">
            {bride.fullName}
          </h1>

          {/* "Weds" Connective with delicate ornamental wings */}
          <div className="flex items-center justify-center gap-3 my-1.5 sm:my-2">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57]/70 to-[#B08D57]" />
            <span className="font-serif italic text-lg sm:text-xl text-[#B08D57] font-normal lowercase tracking-widest px-1">
              {wording.connective}
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-[#B08D57]/70 to-[#B08D57]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-[0.08em] text-[#641E2B] leading-tight uppercase">
            {groom.fullName}
          </h2>
        </header>

        {/* Subtle Separator */}
        <DividerOrnament width="80%" className="my-3 sm:my-4" />

        {/* Section B: Invitation Message */}
        <p className="text-sm sm:text-base text-[#30221F]/85 font-normal leading-relaxed max-w-[400px] mx-auto tracking-normal px-2">
          {wording.mainMessage}
        </p>

        {/* Section C: Ceremony Details */}
        <div className="w-full">
          <CeremonyDetails events={events} year={year} />
        </div>

        {/* Section D: Venue */}
        <VenueDetails venue={venue} headerLabel={wording.venueHeader} />

        {/* Section E: Closing Message */}
        <div className="mt-4 pt-2 w-full flex flex-col items-center">
          <p className="font-serif italic text-base sm:text-lg text-[#641E2B] tracking-wide mb-3">
            &ldquo;{wording.closingMessage}&rdquo;
          </p>

          {/* Delicate Ornamental Monogram Badge */}
          <div className="mt-2">
            <MonogramBadge size={54} variant="maroon" />
          </div>
        </div>

        {/* Replay Invitation Control */}
        {onClose && (
          <footer className="mt-8 pt-5 border-t border-[#B08D57]/25 w-full flex items-center justify-center text-xs text-[#8C6D3B]">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#B08D57]/40 text-[#641E2B] hover:text-[#4A141E] hover:border-[#B08D57] hover:bg-[#E8DCC8]/30 transition-all cursor-pointer font-medium tracking-wider"
              aria-label={wording.replayActionLabel}
            >
              <RotateCcw size={13} />
              <span>{wording.replayActionLabel}</span>
            </button>
          </footer>
        )}

      </div>
    </article>
  );
};
