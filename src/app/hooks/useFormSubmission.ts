import { useState, useCallback } from "react";
import { FormErrors, FormState } from "../types";
import { uploadVoiceMessage } from "../services/voiceService";
import { submitRegistration } from "../services/api";

export const useFormSubmission = () => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isUploadingVoice: false,
    formErrors: {},
    submitSuccess: false,
    submitMessage: "",
  });

  const clearFieldError = useCallback(
    (fieldName: string) => {
      if (formState.formErrors[fieldName]) {
        setFormState((prev) => {
          const newErrors = { ...prev.formErrors };
          delete newErrors[fieldName];
          return { ...prev, formErrors: newErrors };
        });
      }
    },
    [formState.formErrors]
  );

  const handleFormSubmit = useCallback(
    async (
      formData: any,
      voiceBlob: Blob | null,
      setSelectedCourse: (course: string) => void,
      onSuccess?: () => void
    ) => {
      // Reset previous states
      setFormState((prev) => ({
        ...prev,
        formErrors: {},
        submitSuccess: false,
        submitMessage: "",
      }));

      setFormState((prev) => ({ ...prev, isSubmitting: true }));

      try {
        // Get form values from React Hook Form data
        const firstName = formData.firstName?.trim() || "";
        const phone = formData.phone?.trim() || "";
        const course = formData.course || "";
        const preferredMethod = formData.preferredMethod || "";
        const message = formData.message?.trim() || "";

        // Basic validation - React Hook Form handles most validation
        if (!firstName || !phone) {
          setFormState((prev) => ({ ...prev, isSubmitting: false }));
          return;
        }

        let voiceMessageUrl = "";

        // Upload voice message if exists
        if (voiceBlob) {
          try {
            voiceMessageUrl = await uploadVoiceMessage(voiceBlob);
          } catch (error) {
            setFormState((prev) => ({
              ...prev,
              formErrors: {
                voiceMessage:
                  error instanceof Error
                    ? error.message
                    : "فشل في رفع الرسالة الصوتية",
              },
              isSubmitting: false,
            }));
            return;
          }
        }

        // Prepare API payload
        const payload = {
          name: firstName,
          phone: phone,
          selectedProgram: course,
          learningPreference: preferredMethod
            ? preferredMethod === "online"
              ? "أونلاين عبر زوم"
              : "حضورياً في الجامعة"
            : "", // Empty string if no preference selected
          message: message,
          voiceMessage: voiceMessageUrl,
        };

        // Submit form to API
        const result = await submitRegistration(payload);

        // Success handling
        setFormState((prev) => ({
          ...prev,
          submitSuccess: true,
          submitMessage: `تم إرسال طلب التسجيل بنجاح! رقم الطلب: ${
            result.data?.id?.substring(0, 8) || "غير محدد"
          }`,
        }));

        // Reset selected course
        setSelectedCourse("");

        // Call success callback
        if (onSuccess) {
          onSuccess();
        }

        // Scroll to success message
        setTimeout(() => {
          const successElement = document.getElementById("success-message");
          if (successElement) {
            successElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 100);
      } catch (error) {
        console.error("Form submission error:", error);
        setFormState((prev) => ({
          ...prev,
          formErrors: {
            submit:
              error instanceof Error
                ? error.message
                : "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.",
          },
        }));
      } finally {
        setFormState((prev) => ({ ...prev, isSubmitting: false }));
      }
    },
    []
  );

  return {
    formState,
    clearFieldError,
    handleFormSubmit,
  };
};
