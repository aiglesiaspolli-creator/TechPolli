"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
};

export function Counter({ value, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1300;
        const start = performance.now();

        const frame = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(frame);
        };

        requestAnimationFrame(frame);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
