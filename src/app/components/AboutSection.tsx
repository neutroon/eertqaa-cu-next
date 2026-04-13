import Image from "next/image";

export default function AboutSection() {
  const steps = [
    {
      title: "اختيار التخصص الأكاديمي",
      description:
        "استعرض مجموعتنا المتنوعة من الدبلومات المهنية المعتمدة واختر ما يناسب شغفك ومسارك الوظيفي بدقة.",
    },
    {
      title: "التسجيل والمتابعة الرسمية",
      description:
        "بعد ملء البيانات، سيقوم أحد مستشارينا الأكاديميين بالتواصل معك لتأكيد الحجز وتوجيهك لخطوات القبول.",
    },
    {
      title: "الدراسة والشهادة المعتمدة",
      description:
        "ابدأ رحلتك التعليمية في صرح جامعة القاهرة، واحصل في النهاية على شهادتك الموثقة بختم النسر.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 md:gap-16 lg:gap-24">

          {/* Image Area */}
          <div className="w-full lg:w-1/2 relative animate-fade-in order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] lg:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-4 sm:border-8 md:border-[12px] lg:border-[16px] border-white">
              <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] relative bg-slate-100">
                <Image
                  src="/hero-bg.png"
                  alt="جامعة القاهرة"
                  fill
                  className="object-cover contrast-110 saturate-[0.8]"
                />
              </div>

              {/* Glass tag — scaled down on mobile, repositioned */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 glass-modern px-4 sm:px-5 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl md:rounded-[2rem] border-white/50 shadow-xl backdrop-blur-3xl animate-float max-w-[180px] sm:max-w-none">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cu-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cu-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      تأسست عام
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-black text-slate-950 leading-none">
                      1908 م
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background ornaments — smaller on mobile */}
            <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 -right-10 sm:-right-16 md:-right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cu-blue/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-cu-red/5 rounded-full blur-[50px] sm:blur-[70px] md:blur-[100px] -translate-x-1/2 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-right animate-fade-in-up order-1 lg:order-2">
            <div className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-cu-blue/5 text-cu-blue font-black text-[10px] sm:text-xs rounded-full mb-6 sm:mb-8 md:mb-10 border border-cu-blue/10 uppercase tracking-widest">
              رسالة التعليم العالي
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-950 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight arabic-heading">
              منارة العلم في <br />
              <span className="text-cu-blue italic">قلب القاهرة</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 mb-8 sm:mb-10 md:mb-12 lg:mb-16 arabic-text leading-relaxed font-bold">
              نحن في جامعة القاهرة نؤمن بأن التعليم هو المفتاح الحقيقي للمستقبل. برامجنا ليست مجرد مناهج، بل هي تجارب حية تفتح لك آفاقاً مهنية لا حدود لها، مع ضمان الاعتماد الرسمي والتوثيق الحكومي.
            </p>

            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-5 sm:gap-6 md:gap-8 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass-modern text-cu-blue text-lg sm:text-xl md:text-2xl font-black rounded-2xl sm:rounded-[1.5rem] md:rounded-[1.75rem] flex items-center justify-center shadow-lg border-white group-hover:bg-cu-blue group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-6 shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-950 mb-2 sm:mb-3 md:mb-4 arabic-heading group-hover:text-cu-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-700 arabic-text leading-relaxed text-sm sm:text-base font-bold">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}