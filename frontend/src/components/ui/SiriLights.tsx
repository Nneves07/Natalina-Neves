import { motion } from 'framer-motion';

const SiriLights = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Top LED Bar - Single thick bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-3"
        style={{
          background: 'linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #ee82ee, #ff0080)',
          backgroundSize: '400% 100%',
          boxShadow: '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(64, 224, 208, 0.3)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Right LED Bar - Single thick bar */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-3"
        style={{
          background: 'linear-gradient(180deg, #ff0080, #ff8c00, #40e0d0, #ee82ee, #ff0080)',
          backgroundSize: '100% 400%',
          boxShadow: '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(64, 224, 208, 0.3)',
        }}
        animate={{
          backgroundPosition: ['50% 0%', '50% 100%', '50% 0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Bottom LED Bar - Single thick bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-3"
        style={{
          background: 'linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #ee82ee, #ff0080)',
          backgroundSize: '400% 100%',
          boxShadow: '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(64, 224, 208, 0.3)',
        }}
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Left LED Bar - Single thick bar */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-3"
        style={{
          background: 'linear-gradient(180deg, #ff0080, #ff8c00, #40e0d0, #ee82ee, #ff0080)',
          backgroundSize: '100% 400%',
          boxShadow: '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(64, 224, 208, 0.3)',
        }}
        animate={{
          backgroundPosition: ['50% 100%', '50% 0%', '50% 100%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner Connectors - Enhanced */}
      <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
      <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-400/50"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg shadow-orange-400/50"></div>

      {/* Enhanced Glow Effects */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-cyan-400/30 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-emerald-400/30 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 bottom-0 w-6 bg-gradient-to-r from-purple-400/30 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 bottom-0 w-6 bg-gradient-to-l from-orange-400/30 via-transparent to-transparent"></div>

      {/* Corner Glow Effects */}
      <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-cyan-400/40 to-transparent rounded-full"></div>
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-400/40 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-emerald-400/40 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-orange-400/40 to-transparent rounded-full"></div>

      {/* Subtle Ambient Glow */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 20% 20%, #ff0080, transparent 50%), radial-gradient(circle at 80% 80%, #40e0d0, transparent 50%), radial-gradient(circle at 40% 60%, #ee82ee, transparent 50%)',
        }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default SiriLights; 