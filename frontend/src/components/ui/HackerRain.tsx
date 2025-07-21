import { useEffect, useRef } from 'react';

const CHARACTERS = '01abcdef∑λΩΞΣµπ∫∇≡≠⊕⊗∂∑'.split('');

const getRandomChar = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

const HackerRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId: number;
    const fontSize = 28;
    let columns = Math.floor((canvas.width || window.innerWidth) / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.globalAlpha = 0.28;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#06b6d4'); // cyan-400
      gradient.addColorStop(1, '#a78bfa'); // purple-400
      ctx.fillStyle = gradient;

      for (let i = 0; i < columns; i++) {
        const text = getRandomChar();
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);
        if (y > canvas.height && Math.random() > 0.995) {
          drops[i] = 0;
        }
        drops[i] += 0.6;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20 w-full h-full hidden md:block"
      style={{
        opacity: 0.28,
        mixBlendMode: 'lighten',
        filter: 'blur(0.5px)',
        transition: 'opacity 1.2s',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
};

export default HackerRain; 