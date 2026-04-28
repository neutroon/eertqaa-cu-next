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
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [categories, setCategories] = useState<Categories>({
    success: true,
    message: "",
    timestamp: "",
    statusCode: 0,
    data: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  const filteredCourses =
    selectedCategory === "الكل"
      ? [...courses.data.courses].sort((a, b) => {
          const priorityCategories = [
            "برامج التغذية",
            "البرامج المعتمدة من الجامعة",
          ];
          const aPriority = priorityCategories.includes(a.category?.name || "")
            ? 1
            : 0;
          const bPriority = priorityCategories.includes(b.category?.name || "")
            ? 1
            : 0;
          return bPriority - aPriority;
        })
      : courses.data.courses.filter(
          (course) => course.categoryId === selectedCategory,
        );

  return (
    <section
      id="courses"
      className="section-padding bg-white relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Heritage Accents — FIXED: bg-gradient-to-r */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-12 right-0 sm:right-12 w-48 h-48 sm:w-96 sm:h-96 bg-cu-gold/5 rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="absolute bottom-12 left-0 sm:left-12 w-48 h-48 sm:w-96 sm:h-96 bg-cu-blue/5 rounded-full blur-[80px] sm:blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 lg:mb-28 flex flex-col items-center animate-fade-in-up">
          <div className="w-16 sm:w-24 h-px bg-cu-gold mb-6 sm:mb-10 shadow-[0_0_10px_rgba(255,242,0,0.5)]" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-slate-950 mb-6 sm:mb-10 leading-tight arabic-heading">
            صرح المعرفة{" "}
            <span className="text-cu-blue">والريادة الأكاديمية</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-600 font-medium arabic-text-premium max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-r-4 border-cu-red pr-4 sm:pr-6 md:pr-10 text-right">
            اكتشف برامجنا التدريبية التي تجمع بين الخبرة العملية وأحدث المنهجيات
            العالمية، مصممة خصيصاً لتأهيلك لسوق العمل وصناعة مستقبل مهني قوي.
          </p>
        </div>

        {/* Category Filter Tabs */}
        {/* On mobile: horizontally scrollable row; on lg+: centered wrap */}
        <div className="mb-10 sm:mb-14 md:mb-16 lg:mb-20 border-b border-slate-100 pb-0 animate-fade-in">
          <div className="flex lg:flex-wrap lg:justify-center gap-2 sm:gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible pb-0 scrollbar-none snap-x snap-mandatory px-1">
            <button
              onClick={() => setSelectedCategory("الكل")}
              className={`relative shrink-0 snap-start py-3 sm:py-4 px-3 sm:px-2 text-base sm:text-lg lg:text-xl font-bold transition-all whitespace-nowrap ${
                selectedCategory === "الكل"
                  ? "text-cu-blue"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              جميع البرامج
              {selectedCategory === "الكل" && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cu-blue rounded-t-full shadow-[0_-4px_10px_rgba(46,49,146,0.3)] animate-fadeIn" />
              )}
            </button>

            {!loading &&
              [...categories.data]
                .filter(
                  (category: Category) => category.name !== "برامج التغذية",
                )
                .sort((a, b) => {
                  const priorityNames = ["البرامج المعتمدة من الجامعة"];
                  const aIsPriority = priorityNames.includes(a.name);
                  const bIsPriority = priorityNames.includes(b.name);
                  if (aIsPriority && !bIsPriority) return -1;
                  if (!aIsPriority && bIsPriority) return 1;
                  return 0;
                })
                .map((category: Category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative shrink-0 snap-start py-3 sm:py-4 px-3 sm:px-2 text-base sm:text-lg lg:text-xl font-bold transition-all whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "text-cu-blue"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {category.name === "البرامج المعتمدة من الجامعة"
                      ? "برامج التغذية"
                      : category.name}
                    {selectedCategory === category.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cu-blue rounded-t-full shadow-[0_-4px_10px_rgba(46,49,146,0.3)] animate-fadeIn" />
                    )}
                  </button>
                ))}
          </div>
          {/* Bottom border sits below the scroll area */}
          <div className="h-px bg-slate-100 mt-0" />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-[2rem] bg-slate-50 border border-slate-100 animate-pulse"
              />
            ))
          ) : filteredCourses.length > 0 ? (
            filteredCourses
              .filter((course: Course) => course.availableSeats > 0)
              .map((course: Course, index: number) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  selectedCourse={selectedCourse}
                  onCourseSelect={onCourseSelect}
                />
              ))
          ) : (
            <div className="col-span-full text-center py-20 sm:py-32 md:py-48 bg-slate-50 rounded-2xl sm:rounded-[3rem] border-2 border-dashed border-slate-200">
              <p className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-bold arabic-heading px-4">
                لا توجد برامج متاحة في هذا التصنيف حالياً.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
