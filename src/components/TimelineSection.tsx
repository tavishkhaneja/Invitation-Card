import React from 'react';
import { weddingData } from '../data/weddingConfig';
import { RingCeremonyIcon, WeddingCeremonyIcon } from './DecorativeOrnament';

export const TimelineSection: React.FC = () => {
  const { timeline, event } = weddingData;

  return (
    <section aria-label="Schedule of Events" className="relative w-full text-center bg-[#f9f0e0] py-8 sm:py-10 px-3 sm:px-4 overflow-hidden">
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-8">
        {/* Torn Paper Deckle Card Background */}
        <img
          src="/images/decor/torn-edge-card.png"
          alt=""
          className="absolute inset-0 w-full h-full object-fill drop-shadow-xl pointer-events-none select-none"
        />

        <div className="relative z-10 w-full max-w-sm mx-auto">
          {/* Header with Left and Right Gold Flourishes */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10">
            <div className="w-10 sm:w-14 pointer-events-none opacity-90">
              <img
                src="/images/decor/left-flourish.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <h2 className="font-alex text-3xl sm:text-4xl text-[#8e6924] font-normal tracking-wide whitespace-nowrap leading-none pt-1">
              Schedule of Events
            </h2>

            <div className="w-10 sm:w-14 pointer-events-none opacity-90">
              <img
                src="/images/decor/right-flourish.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Timeline Events Stack */}
          <div className="relative flex flex-col items-center space-y-7">
            {/* Vertical Golden Connecting Line */}
            <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[#c5a059]/30 via-[#8e6924]/60 to-[#c5a059]/30 pointer-events-none" />

            {timeline.map((item) => {
              const isRing = item.icon === 'ring';
              return (
                <div
                  key={item.id}
                  className="relative z-10 w-full max-w-[290px] flex flex-col items-center p-5 rounded-xl bg-white/80 border border-[#c5a059]/50 shadow-sm backdrop-blur-[2px] transition-all hover:border-[#c5a059]"
                >
                  {/* Event Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#fbf5eb] border border-[#c5a059]/70 flex items-center justify-center text-[#8e6924] shadow-sm mb-2.5">
                    {isRing ? (
                      <RingCeremonyIcon size={26} color="#8e6924" />
                    ) : (
                      <WeddingCeremonyIcon size={26} color="#8e6924" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl text-[#641E2B] font-semibold tracking-wide uppercase mb-0.5">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <div className="font-serif text-xl sm:text-2xl text-[#3b291e] font-normal tracking-wide mb-1">
                    {item.date} {event.year ? `, ${event.year}` : ''}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-[#6b5241] font-light leading-relaxed max-w-[240px]">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
