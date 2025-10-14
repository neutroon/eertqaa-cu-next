"use client";

import { useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function LazySection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {isVisible ? children : <div className="min-h-[200px]" />}
    </div>
  );
}
