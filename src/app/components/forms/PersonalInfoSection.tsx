import React from "react";
import { FormErrors } from "../../types";

interface MainInfoSectionProps {
  formErrors: FormErrors;
  clearFieldError: (fieldName: string) => void;
}

export default function MainInfoSection({
  formErrors,
  clearFieldError,
}: MainInfoSectionProps) {
  return (
    <>
      <div className="bg-gray-100 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <svg
            className="w-5 h-5 text-indigo-600 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          المعلومات الاساسية
        </h3>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="group w-full">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              الاسم *
            </label>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                onInput={() => clearFieldError("firstName")}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 transition-all duration-300 bg-white ${
                  formErrors.firstName
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-300"
                }`}
                placeholder="أدخل اسمك"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {formErrors.firstName ? (
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
              </div>
            </div>
            {formErrors.firstName && (
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
                {formErrors.firstName}
              </p>
            )}
          </div>
          {/* </div> */}
          {/* <div className="bg-gray-100 rounded-2xl p-6"> */}
          {/* <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <svg
            className="w-5 h-5 text-indigo-600 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          معلومات التواصل
        </h3> */}
          <div className="group w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              رقم الهاتف *
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                onInput={() => clearFieldError("phone")}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 transition-all duration-300 bg-white ${
                  formErrors.phone
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-300"
                }`}
                placeholder="+20 123 456 7890"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {formErrors.phone ? (
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                )}
              </div>
            </div>
            {formErrors.phone && (
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
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
