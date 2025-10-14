import { Course } from "../types";

interface CourseCardProps {
  course: Course;
  index: number;
  selectedCourse: string;
  onCourseSelect: (courseName: string) => void;
}

export default function CourseCard({
  course,
  index,
  selectedCourse,
  onCourseSelect,
}: CourseCardProps) {
  return (
    <div
      key={course.id}
      className="group professional-card p-8 hover:border-indigo-300 transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up border-2 border-transparent hover:border-gradient-to-br from-indigo-200 to-purple-200"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Enhanced Course Header */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center space-x-3">
          <div className="relative">
            {/* category */}
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-200 group-hover:scale-105 transition-transform">
              {course.category.name}
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition-all duration-300 p-3 hover:bg-red-50 rounded-xl group-hover:scale-110 transform">
          <svg
            className="w-6 h-6 hover:fill-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* course name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors arabic-heading leading-tight">
        {course.title}
      </h3>

      {/* Course Info */}
      {/* available seats */}
      {/* duration */}
      <div className="flex items-center justify-between mb-4">
        {course.availableSeats > 0 ? (
          <div className="flex items-center text-green-600 text-sm">
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">
              {course.availableSeats} مقعد متاح
            </span>
          </div>
        ) : (
          <div className="flex items-center text-red-600 text-sm">
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">مكتمل العدد</span>
          </div>
        )}
        {/* <div className="text-sm text-gray-500">
          {course.duration == 1
            ? "شهر"
            : course.duration == 2
            ? "شهرين"
            : course.duration > 2 && course.duration < 11
            ? `${course.duration} شهور`
            : `${course.duration >= 10 ? "أشهر" : "شهر"} `}
        </div> */}
      </div>

      {/* static  */}
      {/* description */}
      <p className="text-gray-600 mb-4 leading-relaxed arabic-text">
        {course.description ||
          "برنامج تدريبي متخصص مع شهادة معتمدة من جامعة القاهرة"}
      </p>

      {/* Content Summary */}
      {/* <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
          <svg
            className="w-4 h-4 text-indigo-600 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          ملخص المحتوى
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed arabic-text">
          {course.summary ||
            "للحصول على تفاصيل المحتوى الكاملة، يرجى التسجيل في البرنامج أو التواصل معنا للاستفسار عن المنهج التفصيلي والمحاضرات."}
        </p>
      </div> */}

      {/* static  */}
      {/* Course Features */}
      <div className="space-y-3 mb-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
          <svg
            className="w-4 h-4 text-indigo-600 me-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          مميزات البرنامج
        </h4>
        {course.features &&
          Array.isArray(course.features) &&
          course.features.map((feature, index) => (
            <div
              className="flex items-center text-sm text-gray-600"
              key={index}
            >
              <div className="flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-500 ml-2"
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
              <div className="flex items-center justify-center">
                {typeof feature === "string"
                  ? feature
                  : (feature as { name?: string; title?: string })?.name ||
                    (feature as { name?: string; title?: string })?.title}
                {(!course.features ||
                  !Array.isArray(course.features) ||
                  course.features.length === 0) &&
                  " شهادة معتمدة من جامعة القاهرة"}
              </div>
            </div>
          ))}
        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 text-indigo-600 me-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm.25-4.5a.75.75 0 01-1.5 0c0-2.5 3.5-2.25 3.5-5.25 0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5a.75.75 0 01-1.5 0c0-2.21 1.79-4 4-4s4 1.79 4 4c0 3.25-3.5 3.5-3.5 5.25z" />
          </svg>
          للمزيد من التفاصيل سجل الآن{" "}
        </div>
      </div>

      {/* static  */}
      {/* Action Buttons */}
      <div className="space-y-3">
        {course.availableSeats > 0 ? (
          <button
            onClick={() => onCourseSelect(course.title)}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
              selectedCourse === course.title
                ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700"
            }`}
          >
            {selectedCourse === course.title
              ? "✓ تم اختيار هذا البرنامج"
              : "سجل الآن مجاناً"}
          </button>
        ) : (
          <button
            disabled
            className="w-full py-3 px-6 rounded-xl font-semibold bg-gray-300 text-gray-500 cursor-not-allowed"
          >
            مكتمل العدد
          </button>
        )}
      </div>
    </div>
  );
}
