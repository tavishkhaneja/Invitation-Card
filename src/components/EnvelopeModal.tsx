import React, { useState } from 'react';

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpened: () => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({
  isOpen,
  onOpened,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Smooth ceremonial transition to revealed invitation
    setTimeout(() => {
      onOpened();
    }, 900);
  };

  if (isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#18040a] flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-1000 overflow-hidden ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Tap to open wedding invitation of Karishma Puri & Mohit Bhardwaj"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
    >
      {/* Radial Gold/Burgundy Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(62,14,28,0.75)_0%,_rgba(20,2,8,0.98)_75%)] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Closed Envelope Cover with Karishma & Mohit and K&M Wax Seal */}
      <div
        className={`relative w-full h-[100dvh] sm:h-auto sm:max-w-[440px] sm:aspect-[941/1672] flex flex-col items-center justify-center overflow-hidden transition-transform duration-1000 ease-out ${
          isOpening ? 'scale-105 filter blur-[1px]' : 'scale-100'
        }`}
      >
        <img
          src="/images/decor/envelope-cover.png"
          alt="Karishma & Mohit Wedding Invitation Envelope"
          className="w-full h-full object-cover sm:object-contain drop-shadow-2xl"
          draggable={false}
        />

        {/* Tap to Open Prompt */}
        <div
          className={`absolute bottom-[20%] sm:bottom-[22%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10 transition-opacity duration-300 ${
            isOpening ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-2.5 h-2.5 border-r-[1.5px] border-t-[1.5px] border-[rgba(140,100,60,0.85)] -rotate-45 animate-bounce" />
          <span className="font-cinzel text-[11px] tracking-[0.28em] uppercase text-[rgba(140,100,60,0.95)] font-medium whitespace-nowrap animate-pulse">
            Tap to open
          </span>
        </div>
      </div>
    </div>
  );
};
