"use client";

import { useEffect, useState } from "react";
import { IFormValues, RegistrationFormProps } from "../types";
import { useVoiceRecording } from "../hooks/useVoiceRecording";
import { useFormSubmission } from "../hooks/useFormSubmission";
import { useForm } from "react-hook-form";

import PersonalInfoSection from "./forms/PersonalInfoSection";
import CourseSelectionSection from "./forms/CourseSelectionSection";
import LearningPreferencesSection from "./forms/LearningPreferencesSection";
import AdditionalMessageSection from "./forms/AdditionalMessageSection";
import VoiceRecordingSection from "./forms/VoiceRecordingSection";

export default function RegistrationFormRefactored({
  courses,
  selectedCourse,
  setSelectedCourse,
}: RegistrationFormProps) {
  const [courseObject, setCourseObject] = useState<{
    name: string;
    courseId: string;
  } | null>(null);

  const {
    voiceState,
    audioRef,
    startRecording,
    stopRecording,
    playRecording,
    deleteRecording,
    formatTime,
    cleanup,
  } = useVoiceRecording();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const { formState, clearFieldError, handleFormSubmit } = useFormSubmission();

  useEffect(() => {
    if (selectedCourse && !courseObject) {
      const foundCourse = courses.data.courses.find(
        (course) => course.title === selectedCourse
      );
      if (foundCourse) {
        setCourseObject({ name: foundCourse.title, courseId: foundCourse.id });
      }
    }
  }, [selectedCourse, courses, courseObject]);

  const onSubmit = (data: IFormValues) => {
    const formDataWithCourse = {
      ...data,
      course: courseObject || { name: "", courseId: "" },
    };
    handleFormSubmit(formDataWithCourse, voiceState.audioBlob, setSelectedCourse, () => {
      onFormSuccess(formDataWithCourse);
      reset();
      setCourseObject(null);
    });
  };

  useEffect(() => {
    return () => { cleanup(); };
  }, [cleanup]);

  const onFormSuccess = (data: IFormValues) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: data.course?.name || "General Inquiry",
        content_category: "Course Registration",
        value: 0.0,
        currency: "USD",
      });
    }
    deleteRecording();
  };

  return (
    <section
      id="register"
      className="bg-slate-50 relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Accent line — FIXED: bg-gradient-to-r */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-24 right-0 sm:right-24 w-[400px] sm:w-[700px] lg:w-[1000px] h-[400px] sm:h-[700px] lg:h-[1000px] bg-cu-gold/10 rounded-full blur-[120px] sm:blur-[160px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-24 left-0 sm:left-24 w-[300px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[600px] lg:h-[800px] bg-cu-blue/10 rounded-full blur-[100px] sm:blur-[140px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20 lg:mb-28 flex flex-col items-center animate-fade-in-up">
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-cu-gold mb-6 sm:mb-8 md:mb-10 shadow-[0_0_15px_rgba(255,242,0,0.4)]" />
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-950 mb-6 sm:mb-8 md:mb-10 leading-tight arabic-heading">
            استمارة <span className="text-cu-blue">الالتحاق الرسمية</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-600 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-r-4 border-cu-red pr-4 sm:pr-6 md:pr-10 arabic-text-premium font-medium text-right leading-relaxed">
            يرجى تعبئة استمارة التسجيل المبدئي بدقة تامة لضمان مراجعة طلبك.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border-2 border-slate-100 relative overflow-hidden">

          {/* Certificate frame decoration */}
          <div className="absolute inset-4 sm:inset-8 border border-slate-100 rounded-xl sm:rounded-[1rem] pointer-events-none z-0" />
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-cu-gold/30 rounded-tl-xl" />
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-cu-gold/30 rounded-br-xl" />

          {formState.submitSuccess ? (
            <div className="text-center py-12 sm:py-20 md:py-28 animate-fade-in flex flex-col items-center relative z-10">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-slate-950 text-white rounded-full flex items-center justify-center mb-8 sm:mb-12 md:mb-16 shadow-2xl relative">
                <div className="absolute inset-0 bg-cu-blue/30 blur-3xl rounded-full" />
                <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 relative z-10 text-cu-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-950 mb-4 sm:mb-6 arabic-heading">
                تم استلام طلبكم بنجاح
              </h3>
              <p className="text-slate-500 text-base sm:text-xl md:text-2xl mb-12 sm:mb-16 arabic-text-premium font-bold max-w-xs sm:max-w-md leading-relaxed">
                {formState.submitMessage}
              </p>

              {/* Success Roadmap */}
              <div className="w-full max-w-2xl bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 mb-12 sm:mb-16">
                <div className="flex flex-col gap-8 text-right">
                  <div className="flex items-center gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-cu-green text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,166,81,0.3)]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1 border-b border-slate-200 pb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-cu-green arabic-text-premium">1. تسجيل البيانات</h4>
                      <p className="text-sm sm:text-base text-slate-400 font-bold arabic-text mt-1">اكتملت بنجاح في {new Date().toLocaleDateString('ar-EG')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center shrink-0">
                      <span className="text-lg font-black font-mono">2</span>
                    </div>
                    <div className="flex-1 border-b border-slate-200 pb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-400 arabic-text-premium">2. اتصال من منسق الحجز</h4>
                      <p className="text-sm sm:text-base text-slate-400 font-medium arabic-text mt-1">سيتم التواصل معك خلال 24 ساعة عمل.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center shrink-0">
                      <span className="text-lg font-black font-mono">3</span>
                    </div>
                    <div className="flex-1 border-b border-slate-200 pb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-400 arabic-text-premium">3. استلام الأوراق</h4>
                      <p className="text-sm sm:text-base text-slate-400 font-medium arabic-text mt-1">مراجعة المستندات الثبوتية والمؤهلات.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center shrink-0">
                      <span className="text-lg font-black font-mono">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-400 arabic-text-premium">4. دفع القسط الأول</h4>
                      <p className="text-sm sm:text-base text-slate-400 font-medium arabic-text mt-1">تفعيل العضوية والبدء في الدراسة.</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="btn-boutique btn-boutique-primary px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-7 text-base sm:text-xl md:text-2xl"
              >
                العودة للرئيسية
              </button>
            </div>
          ) : (
            <form
              className="space-y-12 sm:space-y-16 md:space-y-20 relative z-10"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <PersonalInfoSection
                register={register}
                control={control}
                formErrors={{
                  ...formState.formErrors,
                  ...(errors.firstName?.message && { firstName: errors.firstName.message }),
                  ...(errors.phone?.message && { phone: errors.phone.message }),
                }}
                clearFieldError={clearFieldError}
              />

              <CourseSelectionSection
                register={register}
                courses={courses}
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
                setCourseObject={setCourseObject}
                formErrors={{
                  ...formState.formErrors,
                  ...(errors.course?.message && { course: errors.course.message }),
                }}
                clearFieldError={clearFieldError}
              />

              <LearningPreferencesSection
                register={register}
                formErrors={{
                  ...formState.formErrors,
                  ...(errors.preferredMethod?.message && { preferredMethod: errors.preferredMethod.message }),
                }}
                clearFieldError={clearFieldError}
              />

              {/* <VoiceRecordingSection
                voiceState={voiceState}
                formErrors={formState.formErrors}
                isUploadingVoice={formState.isUploadingVoice}
                startRecording={startRecording}
                stopRecording={stopRecording}
                playRecording={playRecording}
                deleteRecording={deleteRecording}
                formatTime={formatTime}
                audioRef={audioRef}
              /> */}

              <AdditionalMessageSection
                register={register}
                formErrors={{
                  ...formState.formErrors,
                  ...(errors.message?.message && { message: errors.message.message }),
                }}
                clearFieldError={clearFieldError}
              />

              {/* Submit */}
              <div className="pt-8 sm:pt-12 md:pt-16 border-t border-slate-100 text-center flex flex-col items-center">
                <button
                  type="submit"
                  disabled={formState.isSubmitting || formState.isUploadingVoice}
                  className={`btn-boutique btn-boutique-red w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl shadow-[0_30px_60px_-15px_rgba(238,49,36,0.35)] transition-all duration-700 hover:scale-[1.01] active:scale-[0.98] ${formState.isSubmitting || formState.isUploadingVoice
                    ? "opacity-60 cursor-not-allowed"
                    : ""
                    }`}
                >
                  {formState.isSubmitting || formState.isUploadingVoice ? (
                    <span className="flex items-center gap-3 sm:gap-5 justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 sm:h-7 sm:w-7 border-[3px] border-white/30 border-t-white" />
                      جاري معالجة طلبكم...
                    </span>
                  ) : (
                    "تأكيد عملية التسجيل"
                  )}
                </button>

                <div className="mt-6 sm:mt-10 flex flex-col items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-5 px-5 sm:px-10 py-3 sm:py-4 rounded-full bg-slate-50 border border-slate-100">
                    <div className="w-2 h-2 bg-cu-green rounded-full shadow-[0_0_10px_#00a651]" />
                    <span className="text-xs sm:text-sm font-bold text-slate-400 tracking-wider uppercase">
                      حماية البيانات مشفرة بالكامل
                    </span>
                  </div>
                  {formState.formErrors.submit && (
                    <div className="mt-4 sm:mt-6 bg-red-50 text-cu-red p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-red-100 font-bold arabic-text shadow-lg animate-shake text-sm sm:text-base">
                      {formState.formErrors.submit}
                    </div>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}