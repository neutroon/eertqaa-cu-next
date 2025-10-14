export default function AboutSection() {
  const steps = [
    {
      number: "1",
      title: "التسجيل",
      description: "سجل بياناتك وانتظر تكوين المجموعة",
    },
    // {
    //   number: "2",
    //   title: "تكوين المجموعة",
    //   description: "عند اكتمال العدد المطلوب، تبدأ البرنامج الشهر القادم",
    // },
    {
      number: "2",
      title: "بدء البرنامج",
      description: "برامج أونلاين عبر زوم أو حضورياً في جامعة القاهرة",
    },
    {
      number: "3",
      title: "الحصول على الشهادة",
      description: "شهادة مختومة بختم النسر من جامعة القاهرة",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-gray-100 via-slate-100 to-indigo-100 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-32 w-64 h-64 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse"></div>
      <div
        className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect professional-shadow text-indigo-800 text-sm font-semibold mb-8 border border-indigo-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <svg
                className="w-5 h-5 ml-2 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              خطوات بسيطة
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 arabic-heading">
              <span className="text-gray-900 block mb-2">كيفية تنفيذ</span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                البرنامج؟
              </span>
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start group animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-all duration-300 elevated-shadow">
                    {step.number}
                  </div>
                  <div className="mr-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 arabic-heading group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 arabic-text leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="professional-card p-10 hover:scale-105 transition-all duration-500 bg-gradient-to-br from-white to-indigo-50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center me-4 elevated-shadow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent arabic-heading">
                    جامعة القاهرة
                  </h3>
                  <div className="flex items-center text-green-600 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full me-2 animate-pulse"></div>
                    <span className="text-sm font-semibold">معتمدة رسمياً</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 arabic-text leading-relaxed text-lg">
                إحدى أعرق الجامعات المصرية، تأسست عام 1908 وتضم عدداً كبيراً من
                الكليات والمراكز العلمية المتخصصة. تتميز بسمعتها الأكاديمية
                المتميزة وشهاداتها المعترف بها محلياً وإقليمياً.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-indigo-600">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold arabic-text">
                    شهادة معتمدة ومعترف بها
                  </span>
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold arabic-text">
                    قابلة للتوثيق من وزارة الخارجية
                  </span>
                </div>
                <div className="flex items-center text-purple-600">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold arabic-text">
                    مختومة بختم النسر الرسمي
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
