"use client";

import { UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../types";

interface LearningPreferencesSectionProps {
  register: UseFormRegister<IFormValues>;
  formErrors: Record<string, string>;
  clearFieldError: (name: string) => void;
}

export default function LearningPreferencesSection({
  register,
  formErrors,
  clearFieldError,
}: LearningPreferencesSectionProps) {

  const options = [
    { id: "online", label: "التعلم عن بعد (أونلاين)", icon: "🌐" },
    { id: "presence", label: "الحضور المباشر (بالجامعة)", icon: "🏛️" },
  ];

  return (
    <div className="animate-fade-in [animation-delay:400ms]">
      {/* Sub-header */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 arabic-heading whitespace-nowrap">
          تفضيلات الدراسة
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className="relative">
        <p className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-5 sm:mb-7 px-1 sm:px-2">
          اختر نظام الدراسة المفضل لك
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {options.map((option) => (
            <label key={option.id} className="relative cursor-pointer group/option">
              <input
                {...register("preferredMethod")}
                type="radio"
                value={option.id}
                className="peer sr-only"
                onChange={() => clearFieldError("preferredMethod")}
              />
              <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-5 p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[2rem] bg-slate-50 border-2 border-slate-100 transition-all duration-500 peer-checked:bg-white peer-checked:border-cu-blue peer-checked:shadow-[0_20px_50px_-15px_rgba(46,49,146,0.12)] hover:border-cu-blue/30 text-right sm:text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl shrink-0 grayscale-[0.4] group-hover/option:grayscale-0 transition-all">
                  {option.icon}
                </span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-slate-600 peer-checked:text-cu-blue flex-1 sm:flex-none">
                  {option.label}
                </span>
                {/* Radio indicator — hidden on mobile row layout, visible on sm+ */}
                {/* <div className="hidden sm:flex w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-slate-200 items-center justify-center transition-all peer-checked:border-cu-blue peer-checked:bg-cu-blue shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-all" />
                  </div> */}
              </div>
            </label>
          ))}
        </div>

        {formErrors.preferredMethod && (
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm font-bold text-cu-red flex items-center justify-center gap-2 animate-bounce">
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {formErrors.preferredMethod}
          </div>
        )}
      </div>
    </div>
  );
}