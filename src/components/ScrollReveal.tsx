/**
 * ScrollReveal.tsx — Framer Motion wrapper for scroll-triggered animations
 * Used for hero stagger sequence and richer section reveals.
 * Import into Astro pages with client:load or client:visible.
 */
import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** 'fade-up' | 'fog' — choose the animation preset */
  variant?: 'fade-up' | 'fog';
  className?: string;
}

const variants: Record<string, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
  },
  fog: {
    hidden: { opacity: 0, filter: 'blur(8px) saturate(0.2)' },
    visible: (delay: number) => ({
      opacity: 1,
      filter: 'blur(0px) saturate(1)',
      transition: { duration: 1.1, ease: 'easeOut', delay },
    }),
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  variant = 'fade-up',
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants[variant]}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/**
 * HeroStagger — wraps hero content with a staggered fade-up sequence.
 * Children appear one-by-one based on their index.
 */
interface HeroStaggerProps {
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroStagger({ children, className }: HeroStaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({ children, className }: HeroStaggerProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
