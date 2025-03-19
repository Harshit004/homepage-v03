"use client";

import React, { useEffect, useState, useRef } from "react";

function formatNumber(
  number: number,
  separator: string = ",",
  decimals: number = 2, // default to 2 decimals
  decimal: string = "."
): string {
  const options: Intl.NumberFormatOptions = {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  };

  let formatted = number.toLocaleString("en-US", options);

  if (separator !== ",") formatted = formatted.replace(/,/g, separator);
  if (decimal !== ".") formatted = formatted.replace(/\./g, decimal);

  return formatted;
}

interface CounterProps {
  end: number;
  duration: number;
  separator?: string;
  decimals?: number;
  decimal?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration,
  separator = ",",
  decimals = 2, // default to 2 decimals if not provided
  decimal = ".",
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const frameDuration = 1000 / 60;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const totalFrames = Math.round((duration * 1000) / frameDuration);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const newValue = end * progress;

      setCurrentValue(newValue);

      if (frame === totalFrames) {
        clearInterval(counterInterval);
      }
    }, frameDuration);

    return () => clearInterval(counterInterval);
  }, [hasStarted, end, duration]);

  return (
    <div ref={counterRef} className="inline-block text-4xl font-bold">
      {formatNumber(currentValue, separator, decimals, decimal)}
    </div>
  );
};

export default Counter;
