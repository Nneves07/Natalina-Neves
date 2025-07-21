import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SiriLights = () => {
  // Motion values para color adaptativo
  const mouseY = useMotionValue(0);
  const rightGradient = useTransform(mouseY, [0, window.innerHeight], [
    'linear-gradient(180deg, #40e0d0 0%, #ff8c00 50%, #ff0080 100%)',
    'linear-gradient(180deg, #ff0080 0%, #40e0d0 50%, #ff8c00 100%)'
  ]);
  const leftGradient = useTransform(mouseY, [0, window.innerHeight], [
    'linear-gradient(180deg, #ee82ee 0%, #40e0d0 50%, #ff8c00 100%)',
    'linear-gradient(180deg, #ff8c00 0%, #ee82ee 50%, #40e0d0 100%)'
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handler para actualizar el color según la posición del mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ pointerEvents: 'auto' }}
    >
      {/* Barra lateral derecha interactiva */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-1 md:w-1.5 group"
        style={{
          background: rightGradient,
          filter: 'blur(2px) drop-shadow(0 0 12px #40e0d0) drop-shadow(0 0 24px #ff0080)',
          opacity: 0.7,
        }}
        whileHover={{
          filter: 'blur(4px) drop-shadow(0 0 24px #40e0d0) drop-shadow(0 0 48px #ff0080)',
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
      />

      {/* Barra lateral izquierda interactiva */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-1 md:w-1.5 group"
        style={{
          background: leftGradient,
          filter: 'blur(2px) drop-shadow(0 0 12px #ee82ee) drop-shadow(0 0 24px #40e0d0)',
          opacity: 0.7,
        }}
        whileHover={{
          filter: 'blur(4px) drop-shadow(0 0 24px #ee82ee) drop-shadow(0 0 48px #40e0d0)',
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
      />

      {/* Conectores de esquina minimalistas */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/40"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/40"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-400/40"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg shadow-orange-400/40"></div>

      {/* Glow lateral más sutil */}
      <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-purple-400/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-cyan-400/20 via-transparent to-transparent"></div>
    </div>
  );
};

export default SiriLights; 