"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pauseVid, setPauseVid] = useState(false);
  const toggleVideo = () => {
    if (pauseVid) {
      setPauseVid(!pauseVid);
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    } else if (videoRef.current) {
      setPauseVid(!pauseVid);
      videoRef.current.pause();
    }
  };

  const handleVideoError = () => {
    // alert("عذراً، حدث خطأ في تحميل الفيديو. يرجى المحاولة مرة أخرى.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-78px)] flex items-center">
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
                    // src="https://res.cloudinary.com/duncei4g4/video/upload/v1760407332/Rawaa_ouv0d8.mov"
                    src="https://res.cloudinary.com/dbguvim9b/video/upload/v1763689460/Rawaa_1_f4hxag.mov"
                    type="video/mp4"
                  />
                  عذراً، متصفحك لا يدعم تشغيل الفيديو.
                </video>

                {/* Video Overlay with Controls */}
                <div className="absolute inset-0 transition-all duration-300">
                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleVideo}
                    className="absolute top-8 right-24 z-20 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center text-background transition-all duration-300 group"
                  >
                    {pauseVid ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="#CCCCCC"
                          strokeWidth="0"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
                            fill="#155dfc"
                          ></path>{" "}
                        </g>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z"
                            fill="#155dfc"
                          ></path>{" "}
                        </g>
                      </svg>
                    )}
                  </button>

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
                        مختومة بختم النسر من جامعة القاهرة
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
