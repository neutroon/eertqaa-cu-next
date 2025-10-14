import React from "react";

export default function LearningPreferencesSection() {
  return (
    <div className="bg-gray-100 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
        <svg
          className="w-5 h-5 text-indigo-600 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        تفضيلات التعلم
      </h3>
      <div className="group">
        <label
          htmlFor="preferredMethod"
          className="block text-sm font-semibold text-gray-700 mb-3"
        >
          طريقة التعلم المفضلة (اختياري)
        </label>
        <div className="relative">
          <select
            id="preferredMethod"
            name="preferredMethod"
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white appearance-none hover:border-gray-300"
          >
            <option value="">اختر طريقة التعلم (اختياري)</option>
            <option value="online">أونلاين عبر زوم</option>
            <option value="offline">حضورياً في الجامعة</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
          </div>
        </div>
      </div>
    </div>
  );
}
