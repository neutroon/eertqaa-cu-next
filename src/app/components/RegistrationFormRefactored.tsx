import { useEffect } from "react";
import { RegistrationFormProps } from "../types";
import { useVoiceRecording } from "../hooks/useVoiceRecording";
import { useFormSubmission } from "../hooks/useFormSubmission";

// Form sections
import MainInfoSection from "./forms/PersonalInfoSection";
import CourseSelectionSection from "./forms/CourseSelectionSection";
import LearningPreferencesSection from "./forms/LearningPreferencesSection";
import AdditionalMessageSection from "./forms/AdditionalMessageSection";
import VoiceRecordingSection from "./forms/VoiceRecordingSection";

export default function RegistrationFormRefactored({
  courses,
  selectedCourse,
  setSelectedCourse,
}: RegistrationFormProps) {
  // Custom hooks
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

  const { formState, clearFieldError, handleFormSubmit } = useFormSubmission();

  // Cleanup effect
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  const onFormSuccess = () => {
    deleteRecording();
  };

  return (
    <section
      id="register"
      className="py-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-20"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            تسجيل مجاني
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 arabic-heading">
            سجل الآن
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto arabic-text">
            احجز مكانك في البرنامج القادم واحصل على شهادة معتمدة من جامعة عين
            شمس
          </p>
        </div>

        <div className="bg-white text-background rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Selected Course Display */}
          {selectedCourse && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-green-800 font-semibold">
                  تم اختيار البرنامج: {selectedCourse}
                </span>
              </div>
            </div>
          )}

          {/* Success Message */}
          {formState.submitSuccess && (
            <div
              id="success-message"
              className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl"
            >
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-600 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="text-green-800 font-bold text-lg">
                    تم إرسال الطلب بنجاح!
                  </h4>
                  <p className="text-green-700 mt-1">
                    {formState.submitMessage}
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    سيتم التواصل معك قريباً لتأكيد التسجيل.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Global Error Message */}
          {formState.formErrors.submit && (
            <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl">
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-red-600 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="text-red-800 font-bold text-lg">
                    خطأ في إرسال الطلب
                  </h4>
                  <p className="text-red-700 mt-1">
                    {formState.formErrors.submit}
                  </p>
                </div>
              </div>
            </div>
          )}

          <form
            className="space-y-8"
            noValidate
            onSubmit={(e) =>
              handleFormSubmit(
                e,
                voiceState.audioBlob,
                setSelectedCourse,
                onFormSuccess
              )
            }
          >
            {/* Form Sections */}
            <MainInfoSection
              formErrors={formState.formErrors}
              clearFieldError={clearFieldError}
            />

            <CourseSelectionSection
              courses={courses}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
              formErrors={formState.formErrors}
              clearFieldError={clearFieldError}
            />

            <LearningPreferencesSection />

            <AdditionalMessageSection />

            <VoiceRecordingSection
              voiceState={voiceState}
              formErrors={formState.formErrors}
              isUploadingVoice={formState.isUploadingVoice}
              startRecording={startRecording}
              stopRecording={stopRecording}
              playRecording={playRecording}
              deleteRecording={deleteRecording}
              formatTime={formatTime}
              audioRef={audioRef}
            />

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={formState.isSubmitting || formState.isUploadingVoice}
                className={`group py-5 px-12 rounded-2xl text-lg font-bold transition-all duration-300 shadow-2xl w-full md:w-auto ${
                  formState.isSubmitting || formState.isUploadingVoice
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 hover:shadow-indigo-500/25 transform hover:-translate-y-1"
                }`}
              >
                <span className="flex items-center justify-center">
                  {formState.isSubmitting || formState.isUploadingVoice ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                      {formState.isUploadingVoice
                        ? "جاري رفع الرسالة الصوتية..."
                        : "جاري إرسال الطلب..."}
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      إرسال الطلب الآن
                    </>
                  )}
                </span>
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * جميع الحقول المطلوبة يجب ملؤها
              </p>
              {(formState.isSubmitting || formState.isUploadingVoice) && (
                <p className="text-sm text-blue-600 mt-2">
                  يرجى الانتظار... لا تقم بإغلاق الصفحة
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
