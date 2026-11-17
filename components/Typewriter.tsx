"use client";

import { useEffect, useState } from "react";

export function Typewriter({ text, delay = 600, speed = 45 }: { text: string; delay?: number; speed?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setCount(text.length), 0);
      return () => clearTimeout(t);
    }
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <span className="typewriter">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className="caret" aria-hidden="true" />
      <span className="typewriter-rest" aria-hidden="true">{text.slice(count)}</span>
    </span>
  );
}
