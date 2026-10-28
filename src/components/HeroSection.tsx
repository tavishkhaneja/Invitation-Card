import React from 'react';
import { weddingData } from '../data/weddingConfig';
import { ScratchCard } from './ScratchCard';

export const HeroSection: React.FC = () => {
  const { couple, event } = weddingData;

  return (
    <section aria-label="Wedding Hero" className="relative w-full text-center bg-[#f9f0e0]">
      {/* Swans Video & Floating Petals Container */}
      <div className="relative w-full h-[100dvh] min-h-[700px] max-h-[960px] sm:aspect-[9/16] sm:h-auto sm:max-h-none flex flex-col items-center justify-start overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/swan_frame.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
        >
          <source src="/videos/swans.mp4" type="video/mp4" />
        </video>

        {/* Floating Rose Petals Drift Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-[16%] left-[12%] w-6 opacity-75 animate-[driftPetal1_9s_infinite_linear]">
            <img src="/images/decor/petals.png" alt="" className="w-full h-auto object-contain" />
          </div>
          <div className="absolute top-[26%] right-[14%] w-5 opacity-80 animate-[driftPetal2_11s_infinite_linear]">
            <img src="/images/decor/petals.png" alt="" className="w-full h-auto object-contain -rotate-45" />
          </div>
          <div className="absolute top-[42%] left-[18%] w-5 opacity-65 animate-[driftPetal1_12s_infinite_linear_2s]">
            <img src="/images/decor/petals.png" alt="" className="w-full h-auto object-contain rotate-12" />
          </div>
          <div className="absolute top-[55%] right-[22%] w-4 opacity-70 animate-[driftPetal2_10s_infinite_linear_3s]">
            <img src="/images/decor/petals.png" alt="" className="w-full h-auto object-contain rotate-45" />
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 w-full flex flex-col items-center justify-start pt-[38%] sm:pt-[34%] px-4 pointer-events-none">
          {/* Couple Names */}
          <div className="flex flex-col items-center text-center my-1">
            <h1
              className="font-alex text-[48px] sm:text-[62px] text-[#784f16] leading-[1.0] tracking-wide"
              style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 0 12px rgba(120,79,22,0.18)' }}
            >
              {couple.bride}
            </h1>

            <div
              className="font-alex text-2xl sm:text-3xl text-[#784f16] my-0.5 leading-none"
              style={{ textShadow: '0 1px 2px rgba(255,255,255,0.85)' }}
            >
              &amp;
            </div>

            <h1
              className="font-alex text-[48px] sm:text-[62px] text-[#784f16] leading-[1.0] tracking-wide"
              style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 0 12px rgba(120,79,22,0.18)' }}
            >
              {couple.groom}
            </h1>

            <p className="font-serif text-[11px] sm:text-[12.5px] text-[#6a4212]/90 tracking-wider font-light mt-2 max-w-[320px] leading-tight">
              {couple.blessing}
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-5 sm:mt-7 flex flex-col items-center gap-1.5">
            <span
              className="font-alex text-2xl sm:text-[28px] text-[#784f16] tracking-wider leading-none"
              style={{ textShadow: '0 1px 2px rgba(255,255,255,0.85)' }}
            >
              Scroll down
            </span>
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-3 text-[#784f16] animate-bounce"
            >
              <path
                d="M2 2L12 11L22 2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Swaying Rose Bushes Left & Right */}
        <div className="absolute left-[-10px] sm:left-[-16px] bottom-[-24px] sm:bottom-[-32px] w-[49%] sm:w-[47%] max-w-[239px] pointer-events-none z-30 animate-sway-left drop-shadow-md">
          <img
            src="/images/decor/rose-sway-left.png"
            alt=""
            className="w-full h-auto object-contain select-none"
          />
        </div>
        <div className="absolute right-[-10px] sm:right-[-16px] bottom-[-24px] sm:bottom-[-32px] w-[51%] sm:w-[49%] max-w-[250px] pointer-events-none z-30 animate-sway-right drop-shadow-md">
          <img
            src="/images/decor/rose-sway-right.png"
            alt=""
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

      {/* Torn Edge Paper Card (Two Souls, One Destiny & Scratch Card) */}
      <div className="relative w-full -mt-20 sm:-mt-28 z-20 px-0 sm:-mx-2 sm:w-[calc(100%+16px)] pb-10 flex justify-center">
        <div className="relative w-full min-h-[460px] sm:min-h-[500px] flex flex-col items-center justify-center p-8 sm:p-10">
          <img
            src="/images/decor/torn-edge-card.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill drop-shadow-xl pointer-events-none select-none"
          />

          <div className="relative z-10 w-full max-w-[340px] mx-auto text-center pt-8 sm:pt-10 pb-4">
            {/* Poetic Lines */}
            <div
              className="font-script text-[34px] sm:text-[40px] text-[#8e671d] leading-[1.25] tracking-wide mb-3"
              style={{ textShadow: '0 1px 1px rgba(255,255,255,0.7)' }}
            >
              <p>Two Souls</p>
              <p>One destiny</p>
              <p className="text-[28px] sm:text-[34px]">A lifetime of togetherness</p>
            </div>

            <div className="font-serif text-[15px] sm:text-[16.5px] text-[#4d382b] font-normal leading-relaxed max-w-[310px] mx-auto space-y-1.5">
              <p className="font-medium text-[#3b291e] tracking-wide">
                Dear Friends and Family
              </p>
              <p className="text-[#523d2f] leading-[1.6]">
                Together with our families, we invite you to join us in celebrating a beautiful beginning filled with love, happiness and togetherness.
              </p>
            </div>

            <div className="w-16 h-[1px] bg-[#9a7228]/45 mx-auto my-3" />

            {/* Interactive Scratch-To-Reveal Card */}
            <ScratchCard
              ringCeremonyDate={event.ringCeremonyDate}
              weddingDate={event.weddingDate}
              venueText={`${event.venueName}, ${event.locality}`}
              year={event.year}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
