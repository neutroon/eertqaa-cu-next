import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 overflow-hidden relative">
      {/* Brand Aesthetic Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cu-blue/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cu-blue/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Brand Vision Column */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="flex items-center gap-6 mb-10 group">
              <div className="relative w-14 h-20 grayscale transition-all group-hover:grayscale-0 group-hover:brightness-100">
                <Image
                  src="/cu-logo.jpeg"
                  alt="جامعة"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white arabic-heading leading-tight tracking-tight">
                  منصة برامج تدريبية معتمدة
                </h3>
                <p className="text-xs uppercase tracking-[0.4em] font-black text-cu-gold mt-2">
                  Official Educational Portal
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xl arabic-text leading-relaxed font-bold mb-12 max-w-xl">
              نؤمن بأن التعليم عالي الجودة يجب أن يكون متاحًا لكل طموح. نقدم
              برامج تدريبية معتمدة تهدف إلى تطوير المهارات العملية وتأهيل
              الأفراد لتحقيق نجاح مهني مستدام في سوق العمل.
            </p>
            <div className="flex gap-5">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center hover:bg-cu-blue hover:text-white transition-all border border-white/5 group shadow-xl"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 bg-white/10 rounded-full group-hover:bg-white/40 transition-all scale-75 group-hover:scale-100" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-6 lg:col-span-6 xl:col-span-3">
            <h4 className="text-2xl font-black mb-10 border-r-8 border-cu-blue pr-6 arabic-heading">
              خريطة المنصة
            </h4>
            <ul className="grid grid-cols-1 gap-6">
              {[
                { n: "الرئيسية", h: "#" },
                { n: "البرامج", h: "#courses" },
                { n: "من نحن", h: "#about" },
                { n: "التسجيل والإلتحاق", h: "#register" },
              ].map((link) => (
                <li key={link.n}>
                  <a
                    href={link.h}
                    className="text-slate-400 hover:text-white text-lg font-bold transition-all flex items-center gap-4 group"
                  >
                    <span className="w-2 h-2 bg-slate-800 rounded-full group-hover:bg-cu-blue group-hover:scale-150 transition-all shadow-glow" />
                    {link.n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Accreditations Card */}
          <div className="md:col-span-6 lg:col-span-6 xl:col-span-4">
            <h4 className="text-2xl font-black mb-10 border-r-8 border-cu-red pr-6 arabic-heading">
              الشهادات والاعتمادات
            </h4>
            <div className="glass-dark rounded-3xl p-10 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cu-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <p className="text-slate-300 arabic-text leading-relaxed text-base font-bold mb-2 relative z-10">
                جميع البرامج تقدم شهادات معتمدة وموثقة وفق الأطر الرسمية، مع
                إمكانية التصديق من الجهات المختصة للاستخدام داخل وخارج مصر.:
              </p>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                <div className="glass-modern bg-white/5! p-5 rounded-3xl flex flex-col items-center gap-3 text-center border border-white/5 group-hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cu-blue/20 flex items-center justify-center text-cu-blue font-black">1</div>
                  <div className="text-xs font-black text-white">إعتماد الجامعة</div>
                </div>
                <div className="glass-modern bg-white/5! p-5 rounded-3xl flex flex-col items-center gap-3 text-center border border-white/5 group-hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cu-red/20 flex items-center justify-center text-cu-red font-black">2</div>
                  <div className="text-xs font-black text-white">ختم النسر</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Global Footer Bar */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-12">
          <div className="order-2 xl:order-1">
            <p className="text-slate-500 text-base font-bold arabic-text text-center xl:text-right">
              &copy; {currentYear} جميع الحقوق محفوظة للمنصة
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-black text-slate-600 uppercase tracking-[0.2em] order-1 xl:order-2">
            <a href="#" className="hover:text-cu-blue transition-all">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-cu-blue transition-all">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-cu-blue transition-all">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>

      {/* Modern Gradient Floor */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-linear-to-r from-cu-blue via-cu-red to-cu-blue opacity-50 shadow-[0_0_20px_rgba(46,49,146,0.3)]" />
    </footer>
  );
}
