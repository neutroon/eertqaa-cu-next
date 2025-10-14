import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Enhanced Header */}
      <header className="  glass-effect border-b border-white/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-6">
            <div className="flex items-center space-x-4 backdrop-blur-sm sm:border-2 border-white rounded-2xl px-2">
              <div className="bg-opacity-20 backdrop-blur-sm sm:border-e-2 border-white flex items-center justify-center">
                <Image
                  src="/cu-logo.png"
                  alt="جامعة القاهرة"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-700 hidden lg:block">
                <div className="text-xl font-bold">برامج جامعة القاهرة</div>
                <div className="text-sm opacity-80">بالتعاون مع رواء</div>
              </div>
            </div>

            <nav className="flex gap-2 order-3 md:order-2 w-full ms-auto md:w-auto justify-around">
              <a
                href="#courses"
                className="relative px-2 sm:px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 font-semibold group arabic-text"
              >
                <span className="relative z-10">البرامج</span>
                <div className="absolute inset-0 bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
              <a
                href="#about"
                className="relative px-2 sm:px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 font-semibold group arabic-text"
              >
                <span className="relative z-10 whitespace-nowrap">
                  عن البرنامج
                </span>
                <div className="absolute inset-0 bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
              <a
                href="#features"
                className="relative px-2 sm:px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 font-semibold group arabic-text"
              >
                <span className="relative z-10">المميزات</span>
                <div className="absolute inset-0 bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
              <a
                href="#register"
                className="premium-button bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 sm:px-4 py-2 text-sm font-bold arabic-button"
              >
                <span className="relative z-10">التسجيل</span>
              </a>
            </nav>
            {/* <div className="rounded-xl flex items-center order-2 md:order-3 justify-center group-hover:scale-110 transition-transform">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent arabic-heading">
                رواء
              </h1>
              <Image
                src="/logo.svg"
                alt="رواء"
                width={100}
                height={100}
                className=" object-cover -ms-2.5 w-12 h-10"
              />
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
