import { useEffect, useState } from "react";
import { Categories, Category, Course, Courses } from "../types";
import CourseCard from "./CourseCard";
import { getCategories } from "../services/api";

interface CoursesSectionProps {
  courses: Courses;
  selectedCourse: string;
  onCourseSelect: (courseName: string) => void;
}

export default function CoursesSection({
  courses,
  selectedCourse,
  onCourseSelect,
}: CoursesSectionProps) {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [categories, setCategories] = useState<Categories>({
    success: true,
    message: "",
    timestamp: "",
    statusCode: 0,
    data: [],
  });
  const [loading, setLoading] = useState(false);
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setShowAllCourses(false);
  };

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "الكل"
      ? courses.data.courses
      : courses.data.courses.filter(
          (course) => course.categoryId === selectedCategory
        );

  const loadCategories = async () => {
    try {
      setLoading(true);
      const categories = await getCategories();
      setCategories(categories);
    } catch (error) {
      console.error("Error loading categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);
  return (
    <section
      id="courses"
      className="rounded-t-4xl py-32 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect professional-shadow text-indigo-800 text-sm font-semibold mb-8 border border-indigo-200 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <svg
              className="w-5 h-5 ml-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            برامج معتمدة ومتخصصة
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 arabic-heading animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gray-900 block mb-2">برامجنا</span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              التدريبية
            </span>
          </h2>
          <p
            className="text-center text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto arabic-text leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            أكثر من 30 برنامج تدريبي متخصص في مختلف المجالات مع شهادات معتمدة من
            جامعة القاهرة وقابلة للتوثيق من وزارة الخارجيه
          </p>

          {/* Course Count */}
          {/* <div className="text-center mb-6">
            <p className="text-lg text-gray-600 arabic-text">
              عرض {filteredCourses.length} من أصل {courses.data.courses.length}{" "}
              برامج تدريبية
              {selectedCategory !== "الكل" &&
                ` في فئة ${
                  categories.data.find(
                    (category) => category.id === selectedCategory
                  )?.name
                }`}
            </p>
          </div> */}

          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => handleCategoryFilter("الكل")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                selectedCategory === "الكل"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 hover:bg-indigo-600 hover:text-white border-gray-200 hover:border-indigo-600"
              }`}
            >
              الكل ({courses.data.courses.length})
            </button>
            {categories.data.map((category: Category) => {
              const categoryCount = courses.data.courses.filter(
                (course) => course.categoryId === category.id
              ).length;

              if (categoryCount === 0) {
                return null;
              }
              if (category.courses.length === 0) {
                return null;
              }
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                    selectedCategory === category.id
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-700 hover:bg-indigo-600 hover:text-white border-gray-200 hover:border-indigo-600"
                  }`}
                >
                  {category.name} ({categoryCount})
                </button>
              );
            })}
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                جاري تحميل البرامج...
              </div>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709"
                  />
                </svg>
                لا توجد برامج في هذه الفئة حالياً
              </div>
              <button
                onClick={() => handleCategoryFilter("الكل")}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                عرض جميع البرامج
              </button>
            </div>
          ) : (
            (true
              ? // showAllCourses
                filteredCourses
              : filteredCourses.slice(0, 9)
            ).map(
              (course: Course, index: number) =>
                course.availableSeats > 0 && (
                  <CourseCard
                    key={course.id}
                    course={course}
                    index={index}
                    selectedCourse={selectedCourse}
                    onCourseSelect={onCourseSelect}
                  />
                )
            )
          )}
        </div>
        {/* 
        <div className="text-center">
          {filteredCourses.length > 9 && (
            <button
              id="all-courses"
              onClick={() => {
                setShowAllCourses(!showAllCourses);
                if (showAllCourses) {
                  window.scroll({
                    top: 2400,
                    behavior: "smooth",
                  });
                }
              }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors border-2 border-indigo-600"
            >
              {showAllCourses
                ? "إخفاء البرامج"
                : `عرض جميع البرامج (${filteredCourses.length} برنامج)`}
            </button>
          )}
        </div> */}
      </div>
    </section>
  );
}
