"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 ease-in-out ${
        scrolled ? "pt-4" : "pt-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3">
        <div
          className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
            scrolled
              ? "glass-spatial rounded-e-[3rem] rounded-s-lg px-2 ps-0.5 py-1 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border-white/60"
              : "bg-transparent py-4 border-transparent"
          }`}
        >
          {/* Brand Logo & Professional Titles: Heraldic Plate */}
          <div className="flex items-center gap-8 group">
            <div className="relative group/logo">
              {/* Heraldic Shield Plate */}
              <div
                className={`absolute inset-0 -inset-y-2 -inset-x-2 rounded-b-full transition-all duration-700 ${
                  scrolled
                    ? "bg-white/10 blur-sm scale-90 border border-slate-200"
                    : "glass-spatial bg-white/10 border-white/20 shadow-[0_0_40px_rgba(255,242,0,0.15)] scale-110"
                }`}
              />
              <Image
                src="/cu-logo.png"
                alt="Cairo University Logo"
                width={scrolled ? 50 : 75}
                height={scrolled ? 50 : 75}
                className={`object-contain transition-all duration-700 relative z-10 drop-shadow-2xl ${
                  !scrolled ? "brightness-[1.05] saturate-[1.1]" : ""
                }`}
              />
            </div>

            <div
              className={`hidden sm:flex flex-col border-l-2 pl-8 transition-all duration-700 ${
                scrolled ? "border-slate-200" : "border-white/20"
              }`}
            >
              <span
                className={`text-2xl font-black font-family-outfit tracking-tighter transition-colors duration-700 ${
                  scrolled ? "text-slate-950" : "text-white"
                }`}
              >
                برامج تدريبية معتمدة
              </span>
              <span
                className={`text-[10px] font-black tracking-[0.4em] uppercase transition-colors duration-700 ${
                  scrolled ? "text-cu-blue" : "text-white/60"
                }`}
              >
                Professional Learning
              </span>
            </div>
          </div>

          {/* Navigation Links: Minimalist Luxury */}
          <div className="hidden lg:flex items-center gap-14">
            {[
              { name: "الرئيسية", href: "#" },
              { name: "البرامج", href: "#courses" },
              { name: "من نحن", href: "#about" },
              { name: "تواصل معنا", href: "#register" },
            ].map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-black transition-all duration-700 tracking-wide relative group ${
                  scrolled ? "text-slate-900" : "text-white/90"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-1 transition-all group-hover:w-full rounded-full ${
                    scrolled ? "bg-cu-blue" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Executive CTA: Dynamic Transition */}
          <div className="flex items-center gap-8">
            <a
              href="#register"
              className={`btn-boutique py-4 px-10 text-base tracking-tight transition-all duration-700 ${
                scrolled
                  ? "btn-boutique-red shadow-[0_20px_40px_-10px_rgba(238,49,36,0.3)]"
                  : "glass-dark-spatial bg-white/10! text-white border-white/20 hover:!bg-white hover:text-slate-950 hover:border-white shadow-none"
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
