import React from 'react';
import { RingCeremonyIcon, WeddingCeremonyIcon } from './DecorativeOrnament';
import { CeremonyEvent } from '../data/weddingConfig';

interface CeremonyDetailsProps {
  events: CeremonyEvent[];
  year?: string;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({ events, year }) => {
  return (
    <div className="w-full my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
        {/* Subtle vertical hairline divider between the two ceremonies on larger screens */}
        <div
          className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#B08D57]/40 to-transparent"
          aria-hidden="true"
        />

        {events.map((event) => {
          const isRing = event.iconType === 'ring';
          return (
            <div
              key={event.id}
              className="flex flex-col items-center text-center p-4 rounded-sm transition-all duration-300"
            >
              {/* Event Icon */}
              <div className="mb-2 text-[#B08D57] flex items-center justify-center">
                {isRing ? (
                  <RingCeremonyIcon size={34} color="#B08D57" />
                ) : (
                  <WeddingCeremonyIcon size={34} color="#B08D57" />
                )}
              </div>

              {/* Ceremony Title */}
              <h3 className="font-serif text-[#641E2B] text-base sm:text-lg tracking-[0.2em] uppercase font-semibold mb-1">
                {event.title}
              </h3>

              {/* Ceremony Date */}
              <div className="font-serif text-xl sm:text-2xl text-[#30221F] font-medium tracking-wide">
                <span>{event.date}</span>
                {year ? (
                  <span className="text-[#8C6D3B] text-lg sm:text-xl ml-1 font-normal">
                    , {year}
                  </span>
                ) : null}
              </div>

              {/* Delicate ornamental accent dash */}
              <div
                className="w-8 h-[1px] bg-[#B08D57]/50 mt-2.5"
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
