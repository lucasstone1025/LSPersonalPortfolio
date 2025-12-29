import { motion } from 'framer-motion';

const EarthElement = ({
  position = 'bottom-right',
  size = 'medium',
  glowColor = 'nebula-pink'
}) => {
  // Size configurations (in pixels)
  const sizeMap = {
    small: 160,
    medium: 220,
    large: 350,
  };

  // Position configurations
  const positionMap = {
    'bottom-right': { bottom: '-10%', right: '-5%' },
    'top-left': { top: '-10%', left: '-5%' },
    'bottom-left': { bottom: '-10%', left: '-5%' },
    'top-right': { top: '-10%', right: '-5%' },
  };

  // Glow color mapping to shadow
  const glowMap = {
    'nebula-pink': '0 0 60px rgba(255, 105, 180, 0.4), 0 0 100px rgba(255, 105, 180, 0.2)',
    'nebula-coral': '0 0 60px rgba(255, 140, 66, 0.4), 0 0 100px rgba(255, 140, 66, 0.2)',
    'nebula-orange': '0 0 60px rgba(255, 107, 53, 0.4), 0 0 100px rgba(255, 107, 53, 0.2)',
    'primary-500': '0 0 60px rgba(59, 130, 246, 0.4), 0 0 100px rgba(59, 130, 246, 0.2)',
  };

  const earthSize = sizeMap[size] || sizeMap.medium;
  const earthPosition = positionMap[position] || positionMap['bottom-right'];
  const earthGlow = glowMap[glowColor] || glowMap['nebula-pink'];

  return (
    <motion.div
      className="absolute pointer-events-none hidden md:block"
      style={{
        ...earthPosition,
        width: `${earthSize}px`,
        height: `${earthSize}px`,
        zIndex: 2,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 0.9,
        scale: 1,
        rotate: 360,
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        rotate: {
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, #4a9eff 0%, #1e40af 50%, #0c1e3f 100%)`,
          boxShadow: earthGlow,
          mixBlendMode: 'screen',
        }}
      >
        {/* Earth image will be added here once user provides it */}
        {/* For now, using a gradient sphere as placeholder */}
        <div
          className="w-full h-full rounded-full opacity-30"
          style={{
            background: `
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.8) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(0,100,0,0.3) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      {/* Floating animation overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default EarthElement;
