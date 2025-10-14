import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "#courses", label: "البرامج" },
    { href: "#about", label: "عن البرنامج" },
    { href: "#features", label: "المميزات" },
    { href: "#register", label: "التسجيل" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-tr from-blue-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="animate-fade-in-up">
            <div className="flex items-center group">
              {/* <div className="w-12 h-10 rounded-xl flex items-center justify-center -mb-2 -me-2.5 group-hover:scale-110 transition-transform">
                <Image
                  src="/logo.svg"
                  alt="رواء"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover "
                />
              </div> */}
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent arabic-heading">
                رواء
              </h3>
            </div>
            <p className="text-gray-300 mb-6 arabic-text leading-relaxed text-lg">
              برامج تدريبية معتمدة من جامعة القاهرة مع شهادات قابلة للتوثيق من
              وزارة الخارجية
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-2xl font-bold mb-6 arabic-heading text-white">
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group arabic-text text-lg"
                  >
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h4 className="text-2xl font-bold mb-6 arabic-heading text-white">
              تواصل معنا
            </h4>
            <div className="space-y-4">
              {/* <div className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                  <a href="mailto:info@eertqaa.com" className="font-semibold">
                    info@رواء.com
                  </a>
                </div>
              </div> */}

              <div className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center me-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">الهاتف</p>
                  <a
                    dir="ltr"
                    href="tel:+201123880088"
                    className="font-semibold"
                  >
                    +20 112 388 0088
                  </a>
                </div>
              </div>

              <div className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center me-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">العنوان</p>
                  <p className="font-semibold arabic-text">
                    جامعة القاهرة، القاهرة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-700 mt-12 pt-8 text-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-gray-300 arabic-text text-center text-lg">
            &copy; 2025 رواء جميع الحقوق محفوظة.
            {/* تم التطوير بـ ❤️ لخدمة
            التعليم المتميز. */}
          </p>
        </div>
      </div>
    </footer>
  );
}
