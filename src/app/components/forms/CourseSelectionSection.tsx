"use client";

import { UseFormRegister } from "react-hook-form";
import { Courses, IFormValues } from "../../types";

interface CourseSelectionSectionProps {
  register: UseFormRegister<IFormValues>;
  courses: Courses;
  selectedCourse: string;
  setSelectedCourse: (course: string) => void;
  setCourseObject: (obj: { name: string; courseId: string }) => void;
  formErrors: Record<string, string>;
  clearFieldError: (name: string) => void;
}

export default function CourseSelectionSection({
  register,
  courses,
  selectedCourse,
  setSelectedCourse,
  setCourseObject,
  formErrors,
  clearFieldError,
}: CourseSelectionSectionProps) {

  const selectBase = "w-full bg-slate-50 border-2 border-slate-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl text-slate-900 transition-all focus:bg-white focus:border-cu-blue appearance-none cursor-pointer font-medium";
  const label = "block text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-3 sm:mb-4 md:mb-5 px-1 sm:px-2";

  return (
    <div className="animate-fade-in [animation-delay:200ms]">
      {/* Sub-header */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 arabic-heading whitespace-nowrap">
          اختيار البرنامج الدراسي
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className="relative group">
        <label className={label}>اختر البرنامج من القائمة الرسمية</label>
        <div className="relative">
          <select
            {...register("course.courseId")}
            className={`${selectBase} ${formErrors.course ? "border-cu-red bg-red-50" : ""}`}
            value={courses.data.courses.find((c) => c.title === selectedCourse)?.id || ""}
            onChange={(e) => {
              const selectedId = e.target.value;
              const foundCourse = courses.data.courses.find((c) => c.id === selectedId);
              if (foundCourse) {
                setSelectedCourse(foundCourse.title);
                setCourseObject({ name: foundCourse.title, courseId: foundCourse.id });
                clearFieldError("course");
              }
            }}
          >
            <option value="" disabled>--- اختر البرنامج التدريبي (اختياري) ---</option>
            {courses.data.courses.filter((course) => course.availableSeats > 0).map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>

          {/* Arrow — RTL: positioned on the left */}
          <div className="absolute left-3 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-400 group-hover:text-cu-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {formErrors.course && (
          <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-cu-red flex items-center gap-2 animate-fade-in">
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {formErrors.course}
          </span>
        )}
      </div>

      {/* Info note */}
      <div className="mt-5 sm:mt-7 md:mt-10 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] bg-cu-blue/5 border border-cu-blue/10 flex items-start sm:items-center gap-4 sm:gap-6">
        <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-cu-blue text-white flex items-center justify-center shrink-0 shadow-md">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-slate-700 font-bold arabic-text-premium leading-relaxed">
          جميع البرامج الواردة معتمدة بشكل رسمي من جامعة القاهرة وتخضع لرقابة الجودة الأكاديمية.
        </p>
      </div>
    </div>
  );
}