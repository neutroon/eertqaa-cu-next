"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative text-center text-white z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 text-center">
          <div className="w-15 h-13 rounded-xl flex items-center justify-center -mb-2 -me-2.5 group-hover:scale-110 transition-transform">
            {/* <Image
              src="/logo.svg"
              alt="رواء"
              width={100}
              height={100}
              className="w-full h-full object-cover "
            /> */}
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent arabic-heading">
            رواء
          </h1>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 arabic-text text-center">
            جاري تحميل المحتوى
          </h2>
          <p className="text-indigo-200 arabic-text text-center">
            برامج تدريبية معتمدة من جامعة القاهرة
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-4 text-white/80 font-mono text-sm">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
