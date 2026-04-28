import React from "react";

const features = [
  {
    title: "اعتماد رسمي",
    description:
      "شهادات معتمدة ومختومة بختم النسر من الجامعات قابلة للتوثيق من وزارة الخارجية المصرية.",
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    color: "cu-red",
  },
  {
    title: "نخبة المحاضرين",
    description:
      "تُدار البرامج بواسطة أفضل الأكاديميين والممارسين المختصين في مجالات التغذية وعلم النفس والإدارة.",
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "cu-blue",
  },
  {
    title: "بيئة تعليمية مرنة",
    description:
      "خيارات متنوعة للدراسة بنظام الأونلاين التفاعلي عبر زوم أو بنظام الحضور المباشر في مقر الجامعة.",
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "cu-green",
  },
  {
    title: "محتوى متطور",
    description:
      "حقيبة تدريبية شاملة ومحدثة دورياً لتواكب أحدث المعايير العلمية والطلبات الفعلية لسوق العمل.",
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    color: "cu-gold",
  },
];

const colorMap: Record<string, string> = {
  "cu-red": "group-hover:text-cu-red group-hover:bg-red-50",
  "cu-blue": "group-hover:text-cu-blue group-hover:bg-blue-50",
  "cu-green": "group-hover:text-cu-green group-hover:bg-green-50",
  "cu-gold": "group-hover:text-cu-gold group-hover:bg-yellow-50",
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-white relative py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-right mb-10 sm:mb-14 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 rounded-full text-cu-blue text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-5 md:mb-6">
            لماذا برامجنا هي الأفضل؟
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-tight arabic-heading">
            مميزات تجعل تجربتك <br />
            <span className="text-cu-blue italic">رائدة ومتميزة</span>
          </h2>
        </div>

        {/* Grid: 1-col → 2-col (sm) → 4-col (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-modern p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl md:rounded-[3rem] border-slate-100 hover:border-cu-blue/20 hover:shadow-2xl hover:shadow-cu-blue/10 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon container */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-slate-50 rounded-2xl sm:rounded-[1.5rem] md:rounded-[1.75rem] flex items-center justify-center mb-5 sm:mb-6 md:mb-7 lg:mb-8 border border-slate-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${colorMap[feature.color]}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-950 mb-3 sm:mb-4 arabic-heading leading-[1.3] group-hover:text-cu-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-700 arabic-text leading-relaxed text-sm sm:text-base font-bold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
