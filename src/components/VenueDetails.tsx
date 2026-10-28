import React from 'react';

interface VenueDetailsProps {
  venue: {
    name: string;
    locality: string;
  };
  headerLabel?: string;
}

export const VenueDetails: React.FC<VenueDetailsProps> = ({
  venue,
  headerLabel = 'THE VENUE',
}) => {
  return (
    <div className="w-full text-center my-5 px-4">
      {/* Venue Header */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="w-6 h-[1px] bg-[#B08D57]/40" aria-hidden="true" />
        <span className="text-xs sm:text-sm tracking-[0.25em] text-[#8C6D3B] font-semibold uppercase">
          {headerLabel}
        </span>
        <span className="w-6 h-[1px] bg-[#B08D57]/40" aria-hidden="true" />
      </div>

      {/* Venue Name */}
      <h4 className="font-serif text-2xl sm:text-3xl text-[#641E2B] font-semibold tracking-wide">
        {venue.name}
      </h4>

      {/* Locality / Road */}
      <p className="text-sm sm:text-base text-[#30221F]/80 font-normal tracking-wider mt-1">
        {venue.locality}
      </p>
    </div>
  );
};
