import React from 'react';
import { weddingData } from '../data/weddingConfig';
import { RotateCcw } from 'lucide-react';
import { MonogramBadge } from './DecorativeOrnament';

interface ClosingSectionProps {
  onReplay?: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onReplay }) => {
  const { couple, invitationMessage } = weddingData;

  return (
    <footer
      aria-label="Closing Invitation"
      className="relative w-full text-center pt-12 sm:pt-16 pb-16 bg-[#f6f1e8] overflow-hidden"
    >
      <div className="relative z-20 max-w-[420px] mx-auto px-6 flex flex-col items-center">
        {/* Monogram Badge */}
        <div className="mb-4">
          <MonogramBadge size={56} variant="gold" />
        </div>

        <div className="mb-1">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#a67d2b] font-light tracking-wide">
            Hope to see you there!
          </h2>
        </div>

        <div className="mb-3">
          <p className="font-serif text-2xl sm:text-3xl text-[#6c513f] font-normal tracking-wide">
            {couple.bride} &amp; {couple.groom}
          </p>
        </div>

        <p className="font-serif italic text-base text-[#784f16]/90 max-w-xs mx-auto mb-8">
          &ldquo;{invitationMessage.closing}&rdquo;
        </p>

        {/* Replay Invitation Action Button */}
        {onReplay && (
          <div>
            <button
              onClick={onReplay}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/85 hover:bg-white text-[#784f16] border border-[#c5a059]/70 font-cinzel text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <RotateCcw size={14} className="text-[#a67d2b]" />
              <span>View invitation again</span>
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};
