"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
    if (!showVideo) {
      // Add slight delay to show loading state
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(console.error);
        }
      }, 100);
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  //   const handleVideoLoadStart = () => {
  //     const loadingOverlay = document.getElementById("video-loading");
  //     if (loadingOverlay) {
  //       loadingOverlay.style.display = "block";
  //     }
  //   };

  //   const handleVideoCanPlay = () => {
  //     const loadingOverlay = document.getElementById("video-loading");
  //     if (loadingOverlay) {
  //       loadingOverlay.style.display = "none";
  //     }
  //   };

  const handleVideoError = () => {
    alert("عذراً، حدث خطأ في تحميل الفيديو. يرجى المحاولة مرة أخرى.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-78px)] flex items-center">
        {/* Full Screen Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Close Button */}
              <button
                onClick={toggleVideo}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                // onLoadStart={handleVideoLoadStart}
                // onCanPlay={handleVideoCanPlay}
                onError={handleVideoError}
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNGY0NmU1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN2M3M2U5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjQ4IiBmb250LWZhbWlseT0iQXJpYWwiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+2KzYp9mF2LnYqSDYudmK2YYg2LTZhdizPC90ZXh0Pjwvc3ZnPg=="
              >
                <source
                  src="https://www.asu.edu.eg/videos/finalVed.mp4"
                  type="video/mp4"
                />
                عذراً، متصفحك لا يدعم تشغيل الفيديو.
              </video>

              {/* Loading Overlay */}
              {/* <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300"
                id="video-loading"
              >
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="arabic-text">جاري تحميل الفيديو...</p>
                </div>
              </div> */}
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center absolute top-0 start-0 end-0 bottom-0 w-full">
            {/* Autoplay Video Background */}
            <div className="absolute  inset-0 z-10">
              <div className="relative w-full h-full overflow-hidden">
                {/* Background Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  //   onLoadStart={handleVideoLoadStart}
                  //   onCanPlay={handleVideoCanPlay}
                  onError={handleVideoError}
                >
                  <source
                    src="https://gorswhbdzcoealrnwjeh.supabase.co/storage/v1/object/sign/videos/Eertqaa1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80OGE2Zjg3Yi1kYTU1LTQxNmItOWRmMC0yYzZhYmRlNDk1ZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvRWVydHFhYTEubXA0IiwiaWF0IjoxNzU5Njg4NzM0LCJleHAiOjE3OTEyMjQ3MzR9.CwDsZk4BylMJ9xBX-5FGhpQDr9Tk7iGZ-B0hRPvpT5g"
                    type="video/mp4"
                  />
                  عذراً، متصفحك لا يدعم تشغيل الفيديو.
                </video>

                {/* Video Overlay with Controls */}
                <div className="absolute inset-0 transition-all duration-300">
                  {/* Fullscreen Button */}
                  {/* <button
                    onClick={toggleVideo}
                    className="absolute top-8 right-24 z-20 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 group"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button> */}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-12 z-20">
                    <div className="max-w-4xl mx-auto">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white arabic-heading leading-tight">
                        <span className="block mb-2">برامج تدريبية</span>
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                          متخصصة ومعتمدة
                        </span>
                      </h1>
                      <p className="text-center text-gray-200 arabic-text text-xl md:text-2xl mb-8 leading-relaxed">
                        انضم إلى أكثر من 30 برنامج تدريبي متخصص واحصل على شهادة
                        مختومة بختم النسر من جامعة عين شمس
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          href="#register"
                          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-lg font-bold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <svg
                            className="w-5 h-5 me-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                          سجل الآن مجاناً
                        </a>
                        <a
                          href="#courses"
                          className="inline-flex items-center justify-center px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-blue-600 text-lg font-bold rounded-xl hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
                        >
                          <svg
                            className="w-5 h-5 me-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          استكشف البرامج
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loading Overlay for Background Video */}
                {/* <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 z-30"
                  id="video-loading"
                >
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-6"></div>
                    <p className="arabic-text text-xl">جاري تحميل الفيديو...</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
