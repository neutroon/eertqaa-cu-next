export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "شهادة معتمدة",
      description: "الشهادات والتدريب والمحتوى معتمدين من جامعة القاهرة",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600"
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
      title: "مرونة في التعلم",
      description: "برامج أونلاين عبر زوم أو حضورياً في الجامعة",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600"
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
      title: "نخبة مخصصة",
      description: "فريق التدريب نخبة التخصص من دكاترة ومدربين معتمدين",
    },
  ];

  return (
    <section
      id="features"
      className="py-32 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect professional-shadow text-indigo-800 text-sm font-semibold mb-8 border border-indigo-200 animate-fade-in-up">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
            <svg
              className="w-5 h-5 ml-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            مميزات استثنائية
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-8 arabic-heading animate-fade-in-up flex gap-2 justify-center flex-wrap"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gray-900 block mb-2">
              لماذا تختار برامج
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                رواء
              </span>
            </span>

            <span className="text-gray-900 block mb-2">من جامعة القاهرة؟</span>
          </h2>
          <p
            className="text-xl text-center md:text-2xl text-gray-700 max-w-4xl mx-auto arabic-text leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            مميزات فريدة وخدمات متميزة تجعل من برامجنا التدريبية الخيار الأمثل
            لتطوير مهاراتك المهنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="professional-card p-8 hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 elevated-shadow">
                  <div className="text-white transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 arabic-heading group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 arabic-text leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
