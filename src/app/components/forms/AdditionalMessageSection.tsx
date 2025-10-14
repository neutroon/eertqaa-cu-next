import React from "react";

export default function AdditionalMessageSection() {
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
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
        رسالة إضافية
      </h3>
      <div className="group">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-3"
        >
          أخبرنا عن توقعاتك أو أي استفسارات (اختياري)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-gray-300 resize-none"
          placeholder="أخبرنا عن توقعاتك من البرنامج أو أي استفسارات لديك..."
        ></textarea>
      </div>
    </div>
  );
}
