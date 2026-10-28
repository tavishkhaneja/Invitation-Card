import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  autoStartOnOpen?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoStartOnOpen = false }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoStartOnOpen && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay may be restricted until user gesture
      });
    }
  }, [autoStartOnOpen, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/divenire.mp3"
        loop
        preload="auto"
      />

      <div className="fixed bottom-5 right-5 z-[100]">
        <button
          onClick={togglePlay}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 border cursor-pointer active:scale-95 ${
            isPlaying
              ? 'bg-[#641E2B]/85 text-[#f9f0e0] border-[#c5a059]/60 shadow-[0_4px_20px_rgba(100,30,43,0.4)]'
              : 'bg-[#1c070f]/80 text-[#c5a059] border-[#c5a059]/30 hover:border-[#c5a059]/80'
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Mute Music' : 'Play Celebration Melody'}
        >
          {isPlaying ? (
            <>
              {/* Animated Soundwave bars */}
              <div className="flex items-center gap-[2px] h-3.5">
                <span className="w-[2px] h-full bg-[#c5a059] animate-[pulse_0.8s_infinite]" />
                <span className="w-[2px] h-2 bg-[#c5a059] animate-[pulse_0.6s_infinite_0.2s]" />
                <span className="w-[2px] h-full bg-[#c5a059] animate-[pulse_0.9s_infinite_0.4s]" />
              </div>
              <Volume2 size={16} className="text-[#c5a059]" />
            </>
          ) : (
            <VolumeX size={16} className="text-[#c5a059]" />
          )}
          <span className="text-[11px] font-cinzel uppercase tracking-wider font-medium">
            {isPlaying ? 'Music On' : 'Music'}
          </span>
        </button>
      </div>
    </>
  );
};
