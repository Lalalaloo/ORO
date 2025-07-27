"use client";
import React, { useEffect, useState } from "react";

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 3;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      setProgress(100);  // jumps to 100% when loading finishes
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-root px-4">
      <p className="mb-6 text-white font-semibold animate-pulse">
        Loading Oro, please wait...
      </p>

      <div className="w-full max-w-md h-4 bg-white/20 rounded-full overflow-hidden shadow-lg">
        <div
          className="h-full bg-yellow-400 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-white font-mono">{progress}%</p>
    </div>
  );
}
