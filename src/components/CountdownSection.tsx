import React, { useState, useEffect } from 'react';

interface CountdownSectionProps {
  targetDateStr?: string;
}

export const CountdownSection: React.FC<CountdownSectionProps> = () => {
  // Target: Ring Ceremony 1 December (or Wedding 28 December)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLoaded: false,
  });

  useEffect(() => {
    // Calculate target date for upcoming 1 December
    const now = new Date();
    let currentYear = now.getFullYear();
    let target = new Date(`${currentYear}-12-01T10:00:00`);
    if (target.getTime() < now.getTime()) {
      target = new Date(`${currentYear + 1}-12-01T10:00:00`);
    }

    const updateTimer = () => {
      const diff = target.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLoaded: true });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds, isLoaded: true });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section aria-label="Celebration Countdown" className="relative w-full text-center py-10 bg-[#f9f0e0] overflow-hidden">
      <div className="mb-6 px-4">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#a67d2b] font-light tracking-wide">
          The Celebration Begins In
        </h2>
      </div>

      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {items.map((item, idx) => {
            const displayVal = timeLeft.isLoaded ? String(item.value).padStart(2, '0') : '--';
            return (
              <React.Fragment key={item.label}>
                <div className="flex flex-col items-center min-w-[58px] sm:min-w-[72px] p-2.5 sm:p-3 rounded-xl bg-white/70 border border-[#c5a059]/40 shadow-sm backdrop-blur-[2px]">
                  <span className="font-serif text-2xl sm:text-3xl text-[#5a4233] font-normal leading-none tracking-tight">
                    {displayVal}
                  </span>
                  <span className="font-cinzel text-[9.5px] sm:text-[11px] text-[#8e6924] uppercase tracking-wider font-medium mt-1.5">
                    {item.label}
                  </span>
                </div>

                {idx < items.length - 1 && (
                  <span className="text-[#a67d2b]/60 font-serif text-xl -mt-4 font-bold select-none">
                    :
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
