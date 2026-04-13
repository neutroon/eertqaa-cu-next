import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center bg-slate-950">

      {/* Background Layer: The Immersive Stage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Cairo University Premium Environment"
          fill
          priority
          className="object-cover opacity-50 grayscale-[0.3] scale-105"
          quality={90}
        />
        {/* Layered Cinematic Overlays — FIXED: bg-gradient-to-* not bg-linear-to-* */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />
      </div>

      {/* Aurora System */}
      <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-cu-blue/15 rounded-full blur-[100px] md:blur-[140px] animate-float-slow opacity-60" />
      <div
        className="absolute bottom-1/4 -left-1/4 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-cu-red/5 rounded-full blur-[80px] md:blur-[120px] animate-float-slow opacity-40"
        style={{ animationDelay: "4s" }}
      />

      {/* Main Content */}
      {/* pt accounts for fixed navbar (~80px mobile, ~100px desktop) + breathing room */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-28 pb-16 sm:pt-32 md:pt-36 lg:pt-40">

        {/* Heading */}
        <div className="space-y-4 md:space-y-8 mb-6 md:mb-10 animate-stagger-in">
          <h1 className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-[9rem]
            2xl:text-[10rem]
            font-black text-white leading-[0.9] tracking-tight drop-shadow-2xl
          ">
            <span className="block opacity-90">برامج تدريبية</span>
            {/* FIXED: bg-gradient-to-r */}
            <span className="bg-gradient-to-r from-cu-gold via-orange-400 to-cu-red bg-clip-text text-transparent block mt-3 md:mt-4">
              متخصصة ومعتمدة
            </span>
          </h1>

          {/* FIXED: bg-gradient-to-r */}
          <div className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-cu-blue to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(46,49,146,0.5)]" />
        </div>

        {/* Subtext */}
        <p className="
          max-w-xs
          sm:max-w-xl
          md:max-w-2xl
          lg:max-w-4xl
          mx-auto
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          text-white/95 font-medium mb-10 md:mb-14 leading-[1.7] drop-shadow-md animate-stagger-in [animation-delay:200ms]
        ">
          انضم إلى{" "}
          <span className="text-white font-black underline decoration-cu-red underline-offset-4 md:underline-offset-8">
            أكثر من 30 برنامج
          </span>{" "}
          تدريبي متخصص واحصل على شهادة بختم النسر من الجامعة
        </p>

        {/* CTA Buttons */}
        <div className="
          flex flex-col sm:flex-row
          gap-4 sm:gap-6 md:gap-8
          justify-center items-center
          w-full sm:w-auto
          animate-stagger-in [animation-delay:400ms]
        ">
          <a
            href="#courses"
            className="
              glass-dark-spatial
              w-full sm:w-auto
              px-8 sm:px-10 md:px-12
              py-4 md:py-5 lg:py-6
              rounded-[1.5rem] md:rounded-[2rem]
              text-white
              text-lg md:text-xl lg:text-2xl
              font-black
              border-white/20
              hover:bg-white/10 hover:border-white/40
              transition-all duration-500
              min-w-0 sm:min-w-[260px] md:min-w-[320px]
              text-center
            "
          >
            استكشف البرامج
          </a>
        </div>

        {/* Trust Badges */}
        <div className="
          mt-16 sm:mt-20 md:mt-24 lg:mt-32
          pt-8 md:pt-12
          border-t border-white/10
          w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl
          flex flex-row justify-center items-center
          gap-8 sm:gap-12 lg:gap-32
          grayscale opacity-60
          hover:grayscale-0 hover:opacity-100
          transition-all duration-1000
          animate-stagger-in [animation-delay:600ms]
        ">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-2 h-2 shrink-0 bg-cu-green rounded-full shadow-[0_0_10px_#00a651]" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white whitespace-nowrap">
              ختم النسر الرسمي
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-2 h-2 shrink-0 bg-cu-blue rounded-full shadow-[0_0_10px_#2e3192]" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white whitespace-nowrap">
              نخبة المحاضرين
            </span>
          </div>
        </div>

      </div>

      {/* Stage Floor Fade — FIXED: bg-gradient-to-t */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20" />
    </section>
  );
}