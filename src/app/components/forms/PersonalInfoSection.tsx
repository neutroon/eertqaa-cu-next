"use client";

import { UseFormRegister, Control, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IFormValues } from "../../types";

interface PersonalInfoSectionProps {
  register: UseFormRegister<IFormValues>;
  control: Control<IFormValues>;
  formErrors: Record<string, string>;
  clearFieldError: (name: string) => void;
}

export default function PersonalInfoSection({
  register,
  control,
  formErrors,
  clearFieldError,
}: PersonalInfoSectionProps) {

  const inputBase = "w-full bg-slate-50 border-2 border-slate-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl text-slate-900 transition-all focus:bg-white focus:border-cu-blue focus:shadow-xl focus:shadow-cu-blue/5 outline-none font-medium placeholder:text-slate-300";
  const label = "block text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-3 sm:mb-4 md:mb-5 px-1 sm:px-2";
  const errorRow = "mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-cu-red flex items-center gap-2 animate-fade-in";

  return (
    <div className="animate-fade-in">
      {/* Sub-header */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 arabic-heading whitespace-nowrap">
          البيانات الشخصية
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">

        {/* Full Name */}
        <div className="relative group">
          <label className={label}>الاسم بالكامل</label>
          <input
            {...register("firstName", { required: "يرجى إدخال الاسم بالكامل" })}
            type="text"
            placeholder="مثال: أحمد محمد علي"
            className={`${inputBase} ${formErrors.firstName ? "border-cu-red bg-red-50" : ""}`}
            onFocus={() => clearFieldError("firstName")}
          />
          {formErrors.firstName && (
            <span className={errorRow}>
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {formErrors.firstName}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="relative group">
          <label className={label}>رقم الهاتف (واتساب)</label>
          <Controller
            name="phone"
            control={control}
            rules={{ 
              required: "رقم الهاتف مطلوب",
              validate: (value) => 
                !value || isValidPhoneNumber(value) || "يرجى إدخال رقم هاتف صحيح"
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                international
                defaultCountry="EG"
                value={value}
                onChange={(val) => {
                  onChange(val);
                  clearFieldError("phone");
                }}
                placeholder="012 3456 7890"
                className={`phone-input-container !flex ${formErrors.phone ? "is-error" : ""}`}
                numberInputProps={{
                  className: `w-full bg-slate-50 border-2 border-slate-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl text-slate-900 transition-all focus:bg-white focus:border-cu-blue focus:shadow-xl focus:shadow-cu-blue/5 outline-none font-medium placeholder:text-slate-300 ${formErrors.phone ? "border-cu-red bg-red-50" : ""}`
                }}
              />
            )}
          />
          {formErrors.phone && (
            <span className={errorRow}>
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {formErrors.phone}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}