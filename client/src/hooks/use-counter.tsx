import { useState, useEffect } from "react";

interface UseCounterOptions {
  end: number;
  start?: number;
  duration?: number;
  startCounting?: boolean;
}

export function useCounter(options: UseCounterOptions) {
  const { end, start = 0, duration = 2000, startCounting = false } = options;
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!startCounting) return;

    const increment = (end - start) / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [startCounting, end, start, duration]);

  return count;
}
