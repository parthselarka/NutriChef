// Optimized motion presets for better performance
export const motionPresets = {
  // Use transform properties instead of layout properties
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
  },

  slideInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },

  // Optimized accordion animation
  accordion: {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
    exit: { opacity: 0, scaleY: 0 },
    transition: {
      duration: 0.2,
      ease: "easeOut",
      opacity: { duration: 0.15 },
    },
  },
};

// Performance-optimized viewport settings
export const viewportOnce = { once: true, margin: "-100px" };
