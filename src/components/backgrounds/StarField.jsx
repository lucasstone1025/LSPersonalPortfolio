import { useMemo } from 'react';

const StarField = () => {
  // Generate stars with random positions and sizes
  // Using useMemo to prevent regeneration on re-renders
  // Optimized star counts for better performance
  const stars = useMemo(() => {
    const starArray = [];
    const isMobile = window.innerWidth < 768;

    // Reduce star count on mobile for better performance
    const smallCount = isMobile ? 80 : 150;
    const mediumCount = isMobile ? 50 : 100;
    const largeCount = isMobile ? 20 : 60;

    // Layer 1: Small stars (fast twinkle)
    for (let i = 0; i < smallCount; i++) {
      starArray.push({
        id: `small-${i}`,
        size: 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random()}s`,
        animationDelay: `${Math.random() * 3}s`,
        animation: 'twinkle-fast',
      });
    }

    // Layer 2: Medium stars (medium twinkle)
    for (let i = 0; i < mediumCount; i++) {
      starArray.push({
        id: `medium-${i}`,
        size: 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random()}s`,
        animationDelay: `${Math.random() * 4}s`,
        animation: 'twinkle',
      });
    }

    // Layer 3: Large stars (slow twinkle)
    for (let i = 0; i < largeCount; i++) {
      starArray.push({
        id: `large-${i}`,
        size: 3,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${4 + Math.random() * 2}s`,
        animationDelay: `${Math.random() * 5}s`,
        animation: 'twinkle-slow',
      });
    }

    return starArray;
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            background: star.size >= 3 ? '#ffffff' : star.size === 2 ? '#ffffff' : '#f0f0f0',
            boxShadow: star.size >= 3 ? '0 0 6px rgba(255,255,255,1)' : star.size === 2 ? '0 0 4px rgba(255,255,255,0.9)' : '0 0 2px rgba(255,255,255,0.5)',
            animation: `${star.animation} ${star.animationDuration} ease-in-out infinite`,
            animationDelay: star.animationDelay,
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default StarField;
