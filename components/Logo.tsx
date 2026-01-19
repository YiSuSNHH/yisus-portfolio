"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function Logo({ size = 48, className = "", animated = true }: LogoProps) {
  const Wrapper = animated ? motion.svg : "svg";
  const animationProps = animated
    ? {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
        whileHover: { scale: 1.05 },
      }
    : {};

  return (
    <Wrapper
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...animationProps}
    >
      <defs>
        {/* Gold gradient */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="25%" stopColor="#FFE599" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>

        {/* Shimmer animation gradient */}
        <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37">
            <animate
              attributeName="offset"
              values="-1;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#FFE599">
            <animate
              attributeName="offset"
              values="-0.5;1.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#D4AF37">
            <animate
              attributeName="offset"
              values="0;2"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle (optional) */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Y - Main letter (back) */}
      <g filter="url(#glow)">
        {/* Y letter - positioned at center-back */}
        <path
          d="M25 20 L50 55 L50 80 M75 20 L50 55"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* i - Small letter with dot (middle-left) */}
      <g filter="url(#glow)">
        {/* i stem */}
        <path
          d="M35 45 L35 75"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* i dot */}
        <circle cx="35" cy="35" r="4" fill="url(#goldGradient)" />
      </g>

      {/* S - Curves through center (front) */}
      <g filter="url(#glow)">
        <path
          d="M62 30 C45 30, 42 42, 50 50 C58 58, 55 70, 38 70"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* u - Small letter (middle-right) */}
      <g filter="url(#glow)">
        <path
          d="M58 50 L58 68 C58 75, 68 75, 68 68 L68 50"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Second S - smaller, accent (overlay) */}
      <g filter="url(#glow)" opacity="0.7">
        <path
          d="M72 35 C60 35, 58 43, 64 48 C70 53, 68 61, 56 61"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </Wrapper>
  );
}

// Alternative: Text-based interlocking logo like YSL
export function LogoYSL({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFE599" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Interlocking Y-i-S-u-S design */}
      <g filter="url(#glow2)">
        {/* Main Y - Large, background */}
        <path
          d="M20 15 L50 50 L50 85 M80 15 L50 50"
          stroke="url(#goldGrad2)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* S curve - weaving through Y */}
        <path
          d="M65 25 C40 25, 35 40, 50 50 C65 60, 60 75, 35 75"
          stroke="url(#goldGrad2)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Decorative dots for i */}
        <circle cx="30" cy="30" r="5" fill="url(#goldGrad2)" />
        <circle cx="70" cy="70" r="4" fill="url(#goldGrad2)" opacity="0.8" />
      </g>
    </motion.svg>
  );
}

// Circle badge style - elegant
export function LogoCircle({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <defs>
        <linearGradient id="goldGradCircle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE599" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="glowCircle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="url(#goldGradCircle)"
        strokeWidth="3"
      />

      {/* Inner circle decoration */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#goldGradCircle)"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Y and S merged beautifully */}
      <g filter="url(#glowCircle)">
        {/* Y shape - centered */}
        <path
          d="M35 28 L50 48 L50 72"
          stroke="url(#goldGradCircle)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M65 28 L50 48"
          stroke="url(#goldGradCircle)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* S weaving through */}
        <path
          d="M58 35 C42 35, 40 45, 50 50 C60 55, 58 65, 42 65"
          stroke="url(#goldGradCircle)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </g>
    </motion.svg>
  );
}

// Diamond/Shield style - premium feel
export function LogoDiamond({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08, rotate: 3 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <defs>
        <linearGradient id="goldGradDiamond" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE599" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <filter id="shadowDiamond" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#D4AF37" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Diamond/Shield shape */}
      <path
        d="M50 5 L95 35 L95 70 L50 95 L5 70 L5 35 Z"
        fill="none"
        stroke="url(#goldGradDiamond)"
        strokeWidth="2.5"
      />

      {/* Inner line */}
      <path
        d="M50 12 L88 38 L88 67 L50 88 L12 67 L12 38 Z"
        fill="none"
        stroke="url(#goldGradDiamond)"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* YS monogram inside */}
      <g filter="url(#shadowDiamond)">
        <path
          d="M32 30 L50 52 L50 75"
          stroke="url(#goldGradDiamond)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M68 30 L50 52"
          stroke="url(#goldGradDiamond)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60 38 C44 38, 42 48, 50 53 C58 58, 56 68, 40 68"
          stroke="url(#goldGradDiamond)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </g>
    </motion.svg>
  );
}

// Minimal square - tech/modern style
export function LogoSquare({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="goldGradSquare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Rounded square background */}
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="16"
        fill="url(#goldGradSquare)"
        opacity="0.1"
      />
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="16"
        fill="none"
        stroke="url(#goldGradSquare)"
        strokeWidth="2"
      />

      {/* Clean Y */}
      <path
        d="M30 25 L50 50 L50 75"
        stroke="url(#goldGradSquare)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M70 25 L50 50"
        stroke="url(#goldGradSquare)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Subtle S accent */}
      <path
        d="M62 32 C48 32, 46 42, 52 48"
        stroke="url(#goldGradSquare)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </motion.svg>
  );
}

// Stylized signature - artistic
export function LogoSignature({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 150 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="goldGradSig" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#FFE599" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <filter id="glowSig" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Flowing signature style */}
      <g filter="url(#glowSig)">
        {/* Y */}
        <motion.path
          d="M15 20 Q30 45, 30 55 L30 80"
          stroke="url(#goldGradSig)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0 }}
        />
        <motion.path
          d="M45 20 Q30 45, 30 55"
          stroke="url(#goldGradSig)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* i */}
        <motion.path
          d="M55 45 L55 75"
          stroke="url(#goldGradSig)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.circle
          cx="55"
          cy="35"
          r="4"
          fill="url(#goldGradSig)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />

        {/* S */}
        <motion.path
          d="M75 35 C60 35, 58 48, 70 52 C82 56, 80 70, 65 70"
          stroke="url(#goldGradSig)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* u */}
        <motion.path
          d="M90 45 L90 65 Q90 75, 100 75 L100 45"
          stroke="url(#goldGradSig)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {/* S (final) */}
        <motion.path
          d="M115 35 C100 35, 98 48, 110 52 C122 56, 120 70, 105 70"
          stroke="url(#goldGradSig)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />

        {/* Decorative underline */}
        <motion.path
          d="M20 85 Q75 90, 130 82"
          stroke="url(#goldGradSig)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </g>
    </motion.svg>
  );
}

// Octagon frame - balanced & symmetrical
export function LogoOctagon({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <defs>
        <linearGradient id="goldGradOct" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE599" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="glowOct" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Octagon frame */}
      <polygon
        points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
        fill="none"
        stroke="url(#goldGradOct)"
        strokeWidth="2.5"
      />

      {/* Inner octagon accent */}
      <polygon
        points="35,12 65,12 85,35 85,65 65,88 35,88 15,65 15,35"
        fill="none"
        stroke="url(#goldGradOct)"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* YS monogram */}
      <g filter="url(#glowOct)">
        <path
          d="M32 28 L50 50 L50 72"
          stroke="url(#goldGradOct)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M68 28 L50 50"
          stroke="url(#goldGradOct)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M58 35 C44 35, 42 45, 50 50 C58 55, 56 65, 42 65"
          stroke="url(#goldGradOct)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </g>
    </motion.svg>
  );
}

// Crest/Emblem style - royal & luxurious
export function LogoCrest({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <defs>
        <linearGradient id="goldGradCrest" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE599" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="glowCrest" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#D4AF37" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Shield/Crest shape */}
      <path
        d="M50 5 L95 15 L95 60 Q95 95, 50 110 Q5 95, 5 60 L5 15 Z"
        fill="none"
        stroke="url(#goldGradCrest)"
        strokeWidth="2.5"
      />

      {/* Inner shield */}
      <path
        d="M50 12 L88 20 L88 58 Q88 88, 50 102 Q12 88, 12 58 L12 20 Z"
        fill="none"
        stroke="url(#goldGradCrest)"
        strokeWidth="1"
        opacity="0.35"
      />

      {/* Crown accent at top */}
      <path
        d="M35 8 L40 3 L50 8 L60 3 L65 8"
        stroke="url(#goldGradCrest)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />

      {/* YS monogram */}
      <g filter="url(#glowCrest)">
        <path
          d="M32 32 L50 55 L50 82"
          stroke="url(#goldGradCrest)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M68 32 L50 55"
          stroke="url(#goldGradCrest)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60 40 C44 40, 42 52, 50 58 C58 64, 56 76, 40 76"
          stroke="url(#goldGradCrest)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </g>
    </motion.svg>
  );
}

// Minimal ring - clean & modern
export function LogoRing({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <defs>
        <linearGradient id="goldGradRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE599" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="glowRing" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer ring with gap */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="url(#goldGradRing)"
        strokeWidth="3"
        strokeDasharray="220 60"
        strokeLinecap="round"
      />

      {/* Inner accent ring */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="url(#goldGradRing)"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Simple Y only - minimalist */}
      <g filter="url(#glowRing)">
        <path
          d="M32 28 L50 52 L50 72"
          stroke="url(#goldGradRing)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M68 28 L50 52"
          stroke="url(#goldGradRing)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Small S accent */}
      <path
        d="M56 40 C46 40, 45 48, 50 52"
        stroke="url(#goldGradRing)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </motion.svg>
  );
}

// Lotus/Flower style - Eastern elegance (matching Bạch Lạp Kim metal element)
export function LogoLotus({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 180 }}
    >
      <defs>
        <linearGradient id="goldGradLotus" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE599" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="glowLotus" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lotus petals frame */}
      <g opacity="0.7">
        {/* Top petal */}
        <path
          d="M50 5 Q65 25, 50 40 Q35 25, 50 5"
          stroke="url(#goldGradLotus)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Right petals */}
        <path
          d="M80 25 Q70 45, 55 45 Q65 35, 80 25"
          stroke="url(#goldGradLotus)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M95 50 Q75 55, 60 50 Q75 45, 95 50"
          stroke="url(#goldGradLotus)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Left petals */}
        <path
          d="M20 25 Q30 45, 45 45 Q35 35, 20 25"
          stroke="url(#goldGradLotus)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M5 50 Q25 55, 40 50 Q25 45, 5 50"
          stroke="url(#goldGradLotus)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Bottom petals */}
        <path
          d="M25 85 Q40 70, 50 65 Q40 75, 25 85"
          stroke="url(#goldGradLotus)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M75 85 Q60 70, 50 65 Q60 75, 75 85"
          stroke="url(#goldGradLotus)"
          strokeWidth="1.5"
          fill="none"
        />
      </g>

      {/* Center circle */}
      <circle
        cx="50"
        cy="50"
        r="22"
        fill="none"
        stroke="url(#goldGradLotus)"
        strokeWidth="2"
      />

      {/* YS inside */}
      <g filter="url(#glowLotus)">
        <path
          d="M40 38 L50 50 L50 62"
          stroke="url(#goldGradLotus)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M60 38 L50 50"
          stroke="url(#goldGradLotus)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M55 42 C47 42, 46 48, 50 51 C54 54, 53 60, 45 60"
          stroke="url(#goldGradLotus)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </g>
    </motion.svg>
  );
}

// Monogram style - clean and modern
export function LogoMonogram({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <defs>
        <linearGradient id="goldGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE599" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#D4AF37" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Outer hexagon frame */}
      <polygon
        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
        fill="none"
        stroke="url(#goldGrad3)"
        strokeWidth="2"
      />

      {/* Inner design - Y and S interlocked */}
      <g filter="url(#shadow)">
        {/* Y shape */}
        <path
          d="M30 25 L50 50 L50 75"
          stroke="url(#goldGrad3)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M70 25 L50 50"
          stroke="url(#goldGrad3)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* S shape overlapping */}
        <path
          d="M60 30 C40 30, 38 42, 50 50 C62 58, 60 70, 40 70"
          stroke="url(#goldGrad3)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </g>
    </motion.svg>
  );
}
