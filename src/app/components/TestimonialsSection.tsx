import React from "react";

const reviews = [
  {
    studentName: "د. أحمد كمال",
    jobTitle: "أخصائي تغذية علاجية",
    rating: 5,
    comment:
      "تجربة تعليمية استثنائية. المحتوى العلمي دقيق جداً والمحاضرون على أعلى مستوى من الكفاءة الأكاديمية. الشهادة المعتمدة ساعدتني كثيراً في مساري المهني.",
    image: "/avatar-1.png",
  },
  {
    studentName: "سارة محمود",
    jobTitle: "مدير موارد بشرية",
    rating: 5,
    comment:
      "الدبلومة المهنية في الإدارة كانت تحولاً حقيقياً في فهمي للقيادة المؤسسية. نظام الدراسة الأونلاين مرن جداً ويناسب جداول العمل المزدحمة.",
    image: "/avatar-2.png",
  },
  {
    studentName: "ليلى حسن",
    jobTitle: "معالج نفسي",
    rating: 5,
    comment:
      "أنصح بشدة بهذه البرامج التدريبية. المصداقية والاحترافية واضحة في كل التفاصيل، والشهادة المعتمدة كانت إضافة قوية لمساري المهني.",
    image: "/avatar-3.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Brand Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cu-blue/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cu-red/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="text-cu-blue font-black uppercase tracking-widest text-sm mb-4">
            قصص نجاح خريجينا
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-tight arabic-heading">
            نحن فخورون <br />
            <span className="text-slate-400 font-bold italic">
              بشركاء النجاح
            </span>
          </h2>
        </div>

        {/* Testimonials Grid - Modern Glass 2.0 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group glass-modern p-10 rounded-[3.5rem] border-white hover:border-cu-blue/20 hover:shadow-2xl hover:shadow-cu-blue/10 transition-all duration-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Rating */}
              <div className="flex text-cu-gold mb-10">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current drop-shadow-sm"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment - High Contrast */}
              <p className="text-xl text-slate-900 arabic-text leading-relaxed font-bold italic mb-12">
                &quot;{review.comment}&quot;
              </p>

              {/* Student Profile - Modern Interaction */}
              <div className="flex items-center gap-5 mt-auto pt-10 border-t border-slate-200/50">
                <div className="w-16 h-16 bg-slate-200 rounded-[1.25rem] flex items-center justify-center font-black text-slate-500 overflow-hidden border-4 border-white shadow-xl transform transition-transform group-hover:rotate-6 group-hover:scale-110">
                  {review.studentName[3]}
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-950 leading-none mb-2">
                    {review.studentName}
                  </h4>
                  <p className="text-[10px] text-cu-blue font-black uppercase tracking-widest">
                    {review.jobTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Bar */}
        <div className="mt-24 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-xs">
            أكثر من 10,000 خريج معتمد في أنحاء الوطن العربي
          </p>
        </div>
      </div>
    </section>
  );
}
