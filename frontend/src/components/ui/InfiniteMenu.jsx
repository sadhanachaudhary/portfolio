import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function InfiniteMenu({ items, baseVelocity = 2 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const directionFactor = useRef(1);
  const skew = useTransform(smoothVelocity, [-1000, 1000], [-10, 10]);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Calculate the wrapping value based on the total width.
  // We use -20 and -120 to wrap seamlessly. The exact values depend on item size.
  const x = useTransform(baseX, (v) => `${wrap(-20, -120, v)}%`);

  return (
    <div className="relative overflow-hidden flex m-0 whitespace-nowrap flex-nowrap py-10">
      <motion.div 
        className="flex whitespace-nowrap flex-nowrap gap-12"
        style={{ x, skewX: skew }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="block text-4xl md:text-6xl font-black text-gray-800 uppercase tracking-tighter hover:text-purple-600 transition-colors duration-300">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
