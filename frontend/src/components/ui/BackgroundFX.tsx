import { motion } from 'framer-motion';

const BackgroundFX = () => {
  return (
    <>
      {/* Fondo animado de gradientes */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(120deg, #0f2027 0%, #2c5364 100%)',
        }}
        animate={{
          backgroundPosition: [
            '0% 50%',
            '100% 50%',
            '0% 50%'
          ],
          filter: [
            'blur(0px) brightness(1)',
            'blur(2px) brightness(1.1)',
            'blur(0px) brightness(1)'
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Glassmorfismo global sutil */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-2xl" />
        {/* Halos y brillos */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full bg-gradient-to-tr from-pink-400/20 via-cyan-400/10 to-transparent blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </>
  );
};

export default BackgroundFX; 