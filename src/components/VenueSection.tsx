import React from 'react';
import { weddingData } from '../data/weddingConfig';
import { ExternalLink, MapPin } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const { event } = weddingData;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${event.mapsQuery}`;
  const embedMapsUrl = `https://maps.google.com/maps?q=${event.mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      aria-label="Event Location and Venue"
      className="relative w-full text-center py-12 sm:py-16 bg-[#f9f0e0] overflow-hidden"
    >
      <div className="relative z-20 max-w-[440px] mx-auto px-4">
        {/* Title */}
        <div className="mb-1">
          <h2 className="font-script text-4xl sm:text-5xl text-[#a67d2b] tracking-wide leading-none">
            Location
          </h2>
        </div>

        {/* Ornate Divider Flourish */}
        <div className="w-20 sm:w-24 mx-auto mt-1 mb-4 pointer-events-none">
          <img
            src="/images/decor/acomm-decor.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Venue Information */}
        <div className="space-y-1 mb-6 text-center">
          <h3 className="font-serif text-2xl sm:text-[28px] text-[#543f33] font-normal tracking-wide">
            {event.venueName}
          </h3>
          <p className="font-serif text-sm sm:text-base text-[#6b5241] font-light max-w-sm mx-auto leading-relaxed">
            {event.venueAddress}
          </p>
        </div>

        {/* Palace Venue Illustration */}
        <div className="relative w-full max-w-[400px] mx-auto mb-8 pointer-events-none">
          <div className="relative aspect-[16/10] w-full drop-shadow-sm">
            <img
              src="/images/decor/palace-venue.png"
              alt="Venue Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Map Card Framed by Top & Bottom Flourishes */}
        <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto mt-6">
          {/* Top Map Flourish */}
          <div className="absolute top-0 -translate-y-[calc(100%-1.5px)] left-1/2 -translate-x-1/2 w-48 sm:w-56 pointer-events-none z-30">
            <img
              src="/images/decor/map-flourish-top.png"
              alt=""
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* Interactive Map Box */}
          <div className="relative w-full aspect-[4/4.2] rounded-2xl overflow-hidden border-[1.5px] border-[#c5a059] shadow-md bg-white">
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/95 text-[#1a73e8] font-sans text-xs font-medium shadow-md hover:bg-gray-50 border border-gray-200/90 transition-all active:scale-95 cursor-pointer select-none"
            >
              <span>Open in Maps</span>
              <ExternalLink size={13} className="text-[#1a73e8]" />
            </a>

            <iframe
              title="Venue Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={embedMapsUrl}
              className="w-full h-full"
            />
          </div>

          {/* Bottom Map Flourish */}
          <div className="absolute bottom-0 translate-y-[calc(100%-1.5px)] left-1/2 -translate-x-1/2 w-48 sm:w-56 pointer-events-none z-30">
            <img
              src="/images/decor/map-flourish-bottom.png"
              alt=""
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Plain Text Venue Address Fallback & Directions Link */}
        <div className="mt-12 text-center">
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#c5a059] text-[#784f16] bg-white/80 hover:bg-[#c5a059]/10 font-cinzel text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <MapPin size={14} className="text-[#a67d2b]" />
            <span>Get Directions to {event.venueName}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
