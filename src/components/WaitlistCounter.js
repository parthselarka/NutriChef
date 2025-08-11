"use client";

import { useState, useEffect } from "react";

export function WaitlistCounter({ fallback = 1000 }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch("/api/waitlist-stats");
        const data = await response.json();

        if (data.success && data.count >= 0) {
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
        // Keep default count as 0
      } finally {
        setIsLoading(false);
      }
    }

    fetchCount();
  }, []);

  const displayCount = 212 + count;

  if (isLoading) {
    return <span className="animate-pulse">{fallback}+</span>;
  }

  return <span>{displayCount}+</span>;
}
