import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = { from: number; to: number; suffix?: string };

export default function Counter({ from, to, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * (to - from) + from));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString("cs-CZ")}
      {suffix}
    </span>
  );
}
