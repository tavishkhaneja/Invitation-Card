import React, { useRef, useState, useEffect, useCallback } from 'react';

interface ScratchCardProps {
  ringCeremonyDate: string;
  weddingDate: string;
  venueText: string;
  year?: string;
  onRevealed?: () => void;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  ringCeremonyDate,
  weddingDate,
  venueText,
  year,
  onRevealed,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isScratching = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = rect.width || 300;
    const height = rect.height || 100;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Luxury Antique Gold Foil Gradient
    const goldGrad = ctx.createLinearGradient(0, 0, width, height);
    goldGrad.addColorStop(0, '#edd07b');
    goldGrad.addColorStop(0.2, '#cb9b36');
    goldGrad.addColorStop(0.42, '#fae49d');
    goldGrad.addColorStop(0.68, '#b38122');
    goldGrad.addColorStop(0.88, '#e8c366');
    goldGrad.addColorStop(1, '#c08c2a');
    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, width, height);

    // Radial Gold Light highlight in center
    const rad = ctx.createRadialGradient(0.5 * width, 0.4 * height, 5, 0.5 * width, 0.5 * height, 0.65 * width);
    rad.addColorStop(0, 'rgba(255, 248, 205, 0.55)');
    rad.addColorStop(0.45, 'rgba(215, 165, 55, 0.25)');
    rad.addColorStop(1, 'rgba(125, 80, 15, 0.35)');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, width, height);

    // Gold glitter speckles
    const speckles = Math.floor(width * height * 0.4);
    const colors = ['#ffffff', '#fff8db', '#ffe07d', '#eed066', '#caa03a', '#8e6015', '#fff4c7'];
    for (let i = 0; i < speckles; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() < 0.88 ? Math.random() * 1.3 : Math.random() * 2.2;
      const col = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillStyle = col;
      ctx.globalAlpha = Math.random() * 0.7 + 0.3;
      ctx.fillRect(x, y, size, size);
    }

    ctx.globalAlpha = 1;

    // Delicate Double Hairline Borders
    ctx.strokeStyle = 'rgba(255, 242, 190, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(3, 3, width - 6, height - 6);

    ctx.strokeStyle = 'rgba(145, 95, 20, 0.45)';
    ctx.lineWidth = 1;
    ctx.strokeRect(6, 6, width - 12, height - 12);

    // Stamped Labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(70, 45, 10, 0.5)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;

    ctx.font = 'bold 12px serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('✦   ✦   ✦', width / 2, height / 2 - 18);

    ctx.font = "600 13px 'Playfair Display', Georgia, serif";
    ctx.fillStyle = '#fffdf7';
    ctx.fillText('SCRATCH TO REVEAL DATES', width / 2, height / 2);

    ctx.font = 'italic 10px Georgia, serif';
    ctx.fillStyle = 'rgba(255, 248, 220, 0.95)';
    ctx.fillText('rub with finger or cursor', width / 2, height / 2 + 18);

    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      initCanvas();
    }, 100);
    const onResize = () => {
      if (!isRevealed) initCanvas();
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', onResize);
    };
  }, [initCanvas, isRevealed]);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    const grad = ctx.createRadialGradient(x, y, 0, x, y, 22);
    grad.addColorStop(0, 'rgba(0, 0, 0, 1)');
    grad.addColorStop(0.7, 'rgba(0, 0, 0, 0.8)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    // Check progress
    checkScratchedPercent();
  };

  const checkScratchedPercent = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparentPixels = 0;
      const totalPixels = data.length / 4;
      // Sample every 16th pixel for high performance
      for (let i = 3; i < data.length; i += 64) {
        if (data[i] < 128) {
          transparentPixels++;
        }
      }
      const sampledTotal = totalPixels / 16;
      if (transparentPixels / sampledTotal > 0.38) {
        revealFull();
      }
    } catch {}
  };

  const revealFull = () => {
    setIsRevealed(true);
    onRevealed?.();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isScratching.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isScratching.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isScratching.current = false;
  };

  return (
    <div className="relative w-full max-w-[320px] mx-auto my-3 select-none">
      <div
        ref={containerRef}
        className="relative w-full min-h-[96px] bg-[#fbf5eb] border border-[#c5a059]/50 rounded-lg p-3 shadow-inner flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Hidden Content Revealed Beneath Scratch Layer */}
        <div className="flex flex-col items-center justify-center space-y-1 py-1">
          <div className="flex items-center gap-1.5 text-xs tracking-wider text-[#a67d2b] font-medium uppercase font-cinzel">
            <span>Ring Ceremony &bull; The Wedding</span>
          </div>

          <div className="font-serif text-lg sm:text-xl text-[#641E2B] font-semibold tracking-wide">
            {ringCeremonyDate} &amp; {weddingDate} {year ? `, ${year}` : ''}
          </div>

          <div className="text-xs text-[#523d2f] font-light tracking-wide">
            {venueText}
          </div>
        </div>

        {/* Scratch Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none transition-opacity duration-700 ${
            isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Scratch card to reveal wedding dates"
        />
      </div>

      {/* Accessible reveal toggle */}
      {!isRevealed && (
        <button
          onClick={revealFull}
          className="mt-1.5 text-[11px] text-[#8e671d] hover:text-[#641E2B] underline tracking-wider font-cinzel uppercase cursor-pointer"
        >
          Tap to reveal directly
        </button>
      )}
    </div>
  );
};
