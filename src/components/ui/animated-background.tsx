import { motion } from "framer-motion";

interface FloatingOrbProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: "sm" | "md" | "lg" | "xl";
}

export const FloatingOrb = ({ 
  className = "", 
  delay = 0, 
  duration = 8,
  size = "md" 
}: FloatingOrbProps) => {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
        y: [0, -30, 0],
      }}
      transition={{ 
        duration, 
        delay,
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${sizes[size]} ${className}`}
    />
  );
};

interface GridPatternProps {
  className?: string;
}

export const GridPattern = ({ className = "" }: GridPatternProps) => (
  <div 
    className={`absolute inset-0 opacity-[0.03] pointer-events-none ${className}`}
    style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} 
  />
);

interface ParticlesProps {
  count?: number;
  className?: string;
}

export const Particles = ({ count = 20, className = "" }: ParticlesProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: [null, "-20%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

interface GradientMeshProps {
  className?: string;
}

export const GradientMesh = ({ className = "" }: GradientMeshProps) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 to-transparent blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
  </div>
);

interface WaveSeparatorProps {
  className?: string;
  flip?: boolean;
}

export const WaveSeparator = ({ className = "", flip = false }: WaveSeparatorProps) => (
  <div className={`absolute left-0 right-0 overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="w-full h-16 md:h-24"
    >
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill="hsl(var(--secondary) / 0.5)"
      />
    </svg>
  </div>
);
