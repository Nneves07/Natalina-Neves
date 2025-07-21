import { motion } from 'framer-motion';
import clsx from 'clsx';
import { forwardRef, ComponentPropsWithRef } from 'react';

interface FuturisticButtonProps extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'neutral';
  className?: string;
}

const variantStyles = {
  primary: 'bg-white text-black border-2 border-blue-400/40 shadow-blue-400/20',
  accent: 'bg-gradient-to-r from-pink-400 to-purple-400 text-white border-2 border-pink-400/40 shadow-pink-400/20',
  neutral: 'bg-white/10 text-white border-2 border-white/20 shadow-white/10',
};

const FuturisticButton = forwardRef<HTMLButtonElement, FuturisticButtonProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.04, boxShadow: '0 0 32px 8px rgba(59,130,246,0.15)' }}
        whileTap={{ scale: 0.97, boxShadow: '0 0 48px 16px rgba(236,72,153,0.25)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={clsx(
          'relative px-8 py-4  mb-10 rounded-2xl font-medium transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400/40',
          variantStyles[variant],
          className
        )}
        ref={ref}
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
        tabIndex={props.tabIndex}
        // Solo pasamos props estándar del botón para evitar conflictos con motion
      >
        {/* Borde animado */}
        <span className={clsx('absolute inset-0 rounded-2xl pointer-events-none z-0', {
          'bg-gradient-to-r from-blue-400/20 via-transparent to-purple-400/20 animate-gradient-x': variant === 'primary',
          'bg-gradient-to-r from-pink-400/20 via-transparent to-purple-400/20 animate-gradient-x': variant === 'accent',
          'bg-white/5': variant === 'neutral',
        })} />
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </motion.button>
    );
  }
);

export default FuturisticButton; 