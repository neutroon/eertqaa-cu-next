import React from "react";
import { Course, Courses, FormErrors } from "../../types";

interface CourseSelectionSectionProps {
  courses: Courses;
  selectedCourse: string;
  setSelectedCourse: (course: string) => void;
  formErrors: FormErrors;
  clearFieldError: (fieldName: string) => void;
}

export default function CourseSelectionSection({
  courses,
  selectedCourse,
  setSelectedCourse,
  formErrors,
  clearFieldError,
}: CourseSelectionSectionProps) {
  return (
    <div className="bg-gray-100 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
        <svg
          className="w-5 h-5 text-indigo-600 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        اختيار البرنامج التدريبي
      </h3>
      <div className="group">
        <label
          htmlFor="course"
          className="block text-sm font-semibold text-gray-700 mb-3"
        >
          اختر البرنامج التدريبي *
        </label>
        <div className="relative">
          <select
            id="course"
            name="course"
            required
            value={selectedCourse}
            onChange={(e) => {
              setSelectedCourse(e.target.value);
              clearFieldError("course");
            }}
            className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 transition-all duration-300 bg-white appearance-none ${
              formErrors.course
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-300"
            }`}
          >
            <option value="">اختر البرنامج التدريبي</option>
            {courses.data.courses.map(
              (course: Course) =>
                course.availableSeats > 0 && (
                  <option key={course.id} value={course.title}>
                    {course.title} - {course.category.name}
                  </option>
                )
            )}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {formErrors.course ? (
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>
        {formErrors.course && (
          <p className="mt-2 text-sm text-red-600 flex items-center">
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {formErrors.course}
          </p>
        )}
      </div>
    </div>
  );
}
