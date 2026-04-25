import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      delay: delay,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [text, count, delay]);

  return (
    <span className="inline-flex items-center">
      <motion.span>{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1.1em] bg-primary ml-1"
      />
    </span>
  );
};
