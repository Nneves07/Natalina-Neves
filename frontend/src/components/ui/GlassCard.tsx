import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'accent' | 'neutral';
}

const variantStyles = {
  primary: 'bg-white/10 border-blue-400/30 shadow-blue-400/20',
  accent: 'bg-gradient-to-br from-pink-400/10 to-purple-400/10 border-pink-400/30 shadow-pink-400/20',
  neutral: 'bg-white/5 border-white/10 shadow-white/10',
};

const borderGradient = {
  primary: 'from-blue-400/40 via-purple-400/30 to-pink-400/40',
  accent: 'from-pink-400/40 via-purple-400/30 to-blue-400/40',
  neutral: 'from-white/20 via-gray-200/10 to-white/20',
};

const GlassCard = ({ children, className = '', variant = 'neutral' }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.035, boxShadow: '0 8px 48px 0 rgba(59,130,246,0.18)', filter: 'brightness(1.08)' }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={clsx(
        'relative rounded-3xl p-8 md:p-10 border overflow-hidden backdrop-blur-2xl transition-all duration-300 group',
        variantStyles[variant],
        className
      )}
      tabIndex={0}
    >
      {/* Fondo glassmórfico extra: doble gradiente y blur */}
      <div className={clsx('absolute inset-0 z-0 pointer-events-none rounded-3xl', {
        'bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10': variant === 'primary',
        'bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-blue-400/10': variant === 'accent',
        'bg-white/5': variant === 'neutral',
      })} />
      {/* Borde con gradiente animado */}
      <span
        className={clsx('absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent z-10',
          `bg-gradient-to-br ${borderGradient[variant]} animate-gradient-x`)}
        aria-hidden="true"
        style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}
      />
      {/* Glow dinámico al hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.25, scale: 1.04 }}
        transition={{ duration: 0.4 }}
        style={{ background: 'radial-gradient(ellipse at 60% 40%, #a78bfa55 0%, transparent 70%)' }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center gap-2">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard; 