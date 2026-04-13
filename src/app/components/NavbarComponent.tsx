"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? "pt-4" : "pt-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-700 ${scrolled
              ? "glass-spatial rounded-[3rem] px-10 py-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.06)] border-white/60"
              : "bg-transparent py-2 border-transparent"
            }`}
        >
          {/* Brand Logo: Clean & High Contrast */}
          <div className="flex items-center gap-6">
            <Image
              src="/cu-logo.png"
              alt="Cairo University Logo"
              width={scrolled ? 50 : 65}
              height={scrolled ? 50 : 65}
              className="object-contain transition-all duration-700 hover:scale-110 drop-shadow-md"
            />
            <div className={`flex flex-col border-l-2 pl-6 transition-all duration-700 ${scrolled ? "border-slate-200" : "border-slate-300"
              }`}>
              <span className="text-xl font-black text-slate-950 font-family-outfit tracking-tighter">برامج جامعة القاهرة</span>
              <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${scrolled ? "text-cu-blue" : "text-slate-500"
                }`}>Cairo University</span>
            </div>
          </div>

          {/* Desktop Navigation: Minimalist Pill */}
          <div className="hidden lg:flex items-center gap-12">
            {["الرئيسية", "البرامج", "من نحن", "تواصل معنا"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-black text-slate-900 transition-all hover:text-cu-blue tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-cu-red transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* High-End CTA Button */}
          <div className="flex items-center gap-6">
            <a
              href="#register"
              className={`btn-boutique py-3.5 px-8 text-sm tracking-tight transition-all ${scrolled
                  ? "btn-boutique-red"
                  : "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
                }`}
            >
              انضم الآن
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
