"use client";

import { UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../types";

interface AdditionalMessageSectionProps {
  register: UseFormRegister<IFormValues>;
  formErrors: Record<string, string>;
  clearFieldError: (name: string) => void;
}

export default function AdditionalMessageSection({
  register,
  formErrors,
  clearFieldError,
}: AdditionalMessageSectionProps) {

  const textareaBase = "w-full bg-slate-50 border-2 border-slate-100 rounded-2xl sm:rounded-[2rem] px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-7 text-base sm:text-lg md:text-xl text-slate-900 transition-all focus:bg-white focus:border-cu-blue focus:shadow-xl focus:shadow-cu-blue/5 outline-none font-medium min-h-[160px] sm:min-h-[200px] md:min-h-[240px] resize-none placeholder:text-slate-300";

  return (
    <div className="animate-fade-in [animation-delay:800ms]">
      {/* Sub-header */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 arabic-heading whitespace-nowrap">
          ملاحظات إضافية
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className="relative group">
        <label className="block text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-3 sm:mb-4 md:mb-5 px-1 sm:px-2">
          هل تود إرسال أي تفاصيل إضافية للجنة الأكاديمية؟
        </label>

        <div className="relative">
          <textarea
            {...register("message")}
            placeholder="اكتب استفساراتك أو طموحاتك المهنية هنا..."
            className={`${textareaBase} ${formErrors.message ? "border-cu-red bg-red-50" : ""}`}
            onFocus={() => clearFieldError("message")}
          />
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 w-10 sm:w-14 h-px bg-slate-100" />
        </div>

        {formErrors.message && (
          <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-cu-red flex items-center gap-2 animate-fade-in">
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {formErrors.message}
          </span>
        )}
      </div>
    </div>
  );
}