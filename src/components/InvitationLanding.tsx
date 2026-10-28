import React, { useState, useEffect } from 'react';
import { EnvelopeModal } from './EnvelopeModal';
import { HeroSection } from './HeroSection';
import { CountdownSection } from './CountdownSection';
import { TimelineSection } from './TimelineSection';
import { DressCodeGiftSection } from './DressCodeGiftSection';
import { VenueSection } from './VenueSection';
import { ClosingSection } from './ClosingSection';

export const InvitationLanding: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if URL query ?open=true was passed
    if (new URLSearchParams(window.location.search).has('open')) {
      const t = setTimeout(() => {
        setIsOpen(true);
      }, 0);
      return () => clearTimeout(t);
    }
  }, []);

  const handleOpened = () => {
    setIsOpen(true);
  };

  const handleReplay = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#18040a] text-[#4a2e1b] overflow-x-hidden select-none">
      {/* Royal Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(62,14,28,0.75)_0%,_rgba(20,2,8,0.98)_75%)]" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Opening Envelope Screen */}
      <EnvelopeModal
        isOpen={isOpen}
        onOpened={handleOpened}
      />

      {/* Main Revealed Wedding Invitation Card (replicated from neha-pratik) */}
      <div
        className={`relative z-10 transition-all duration-1000 ease-out transform ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-[0.985] translate-y-3 pointer-events-none'
        }`}
      >
        <div className="max-w-[480px] mx-auto min-h-screen bg-[#f9f0e0] shadow-[0_0_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Section 1: Royal Hero with Swans, Floating Petals, Names, and Scratch Card */}
          <HeroSection />

          {/* Section 2: Celebration Countdown */}
          <CountdownSection />

          {/* Section 3: Schedule of Events */}
          <TimelineSection />

          {/* Section 4: Dress Code & Gift Preference with Swaying Roses */}
          <DressCodeGiftSection />

          {/* Section 5: Location, Starland GT Karnal Road & Map */}
          <VenueSection />

          {/* Section 6: Closing Celebration & Replay Action */}
          <ClosingSection onReplay={handleReplay} />
        </div>
      </div>
    </main>
  );
};
