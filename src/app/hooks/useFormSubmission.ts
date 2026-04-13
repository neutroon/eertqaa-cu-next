import { useState, useCallback } from "react";
import { FormState } from "../types";
import { uploadVoiceMessage } from "../services/voiceService";
import { submitRegistration, RegistrationPayload } from "../services/api";

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
    [formState.formErrors],
  );

  const handleFormSubmit = useCallback(
    async (
      formData: any,
      voiceBlob: Blob | null,
      setSelectedCourse: (course: string) => void,
      onSuccess?: () => void,
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
        // Get form values from React Hook Form data (Mapped to API specs)
        const name = formData.firstName?.trim() || "";
        const phone = formData.phone?.trim() || "";
        const course = formData.course || null;
        const preferredMethod = formData.preferredMethod || "";
        const message = formData.message?.trim() || "";

        // Basic validation (Name and Phone are strictly required)
        if (!name || !phone) {
          setFormState((prev) => ({ 
            ...prev, 
            formErrors: { 
              ...(!name && { firstName: "الاسم مطلوب" }),
              ...(!phone && { phone: "رقم الهاتف مطلوب" }),
            },
            isSubmitting: false 
          }));
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

        // Prepare API payload (Strictly matching Official Specs)
        const payload: RegistrationPayload = {
          name: name,
          phone: phone,
          selectedProgram: {
            name: course?.name || "",
            courseId: course?.courseId || ""
          },
          learningPreference: preferredMethod === "online" 
            ? "أونلاين عبر زوم" 
            : preferredMethod === "presence" 
            ? "حضورياً في الجامعة" 
            : "",
          message: message,
          voiceMessage: voiceMessageUrl,
        };

        // Submit form to API
        const result = await submitRegistration(payload);

        // Success handling
        setFormState((prev) => ({
          ...prev,
          submitSuccess: true,
          submitMessage: `تم استلام طلبكم بنجاح. رقم المرجعي: ${
            result.data?.id?.substring(0, 8) || "CU-LEAD"
          }`,
        }));

        // Reset selected course
        setSelectedCourse("");

        // Call success callback
        if (onSuccess) {
          onSuccess();
        }

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
    [],
  );

  return {
    formState,
    clearFieldError,
    handleFormSubmit,
  };
};
