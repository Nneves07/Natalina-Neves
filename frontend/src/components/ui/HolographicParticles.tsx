import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  text?: string;
  color: string;
}

const HolographicParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = [];
    const techTerms = ['AI', 'ML', 'LLM', 'API', 'GPU', 'NLP', 'CV', 'RL', 'DL', 'MLOps'];
    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'];

    for (let i = 0; i < 25; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        text: Math.random() > 0.7 ? techTerms[Math.floor(Math.random() * techTerms.length)] : undefined,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setParticles(initialParticles);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y - 100],
            opacity: [particle.opacity, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {particle.text ? (
            <motion.div
              className="text-xs font-mono font-bold"
              style={{ color: particle.color }}
              animate={{
                textShadow: [
                  `0 0 5px ${particle.color}`,
                  `0 0 10px ${particle.color}`,
                  `0 0 15px ${particle.color}`,
                  `0 0 5px ${particle.color}`,
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {particle.text}
            </motion.div>
          ) : (
            <motion.div
              className="rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              }}
              animate={{
                boxShadow: [
                  `0 0 ${particle.size * 2}px ${particle.color}`,
                  `0 0 ${particle.size * 4}px ${particle.color}`,
                  `0 0 ${particle.size * 2}px ${particle.color}`,
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Energy Field Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Mouse Trail Effect */}
      <motion.div
        className="absolute w-4 h-4 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background: 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-cyan-400 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="text-2xl">⚡</div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-purple-400 opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="text-2xl">🧠</div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-green-400 opacity-20"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-2xl">🚀</div>
      </motion.div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 100 100 Q 300 50 500 100 T 900 100"
          stroke="cyan"
          strokeWidth="1"
          fill="none"
          animate={{
            strokeDasharray: [0, 1000],
            strokeDashoffset: [0, -1000],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.path
          d="M 100 200 Q 400 150 700 200 T 1100 200"
          stroke="purple"
          strokeWidth="1"
          fill="none"
          animate={{
            strokeDasharray: [0, 1000],
            strokeDashoffset: [0, -1000],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
};

export default HolographicParticles; 