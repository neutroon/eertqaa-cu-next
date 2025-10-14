import { FormErrors } from "../types";

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  const firstName = (formData.get("firstName") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const course = formData.get("course") as string;
  const preferredMethod = formData.get("preferredMethod") as string;

  if (!firstName) {
    errors.firstName = "الاسم مطلوب";
  } else if (firstName.length < 2) {
    errors.firstName = "الاسم يجب أن يكون أكثر من حرفين";
  }

  if (!phone) {
    errors.phone = "رقم الهاتف مطلوب";
  } else if (!/^[0-9+\-\s()]+$/.test(phone)) {
    errors.phone = "رقم الهاتف غير صحيح";
  }

  if (!course) {
    errors.course = "يرجى اختيار البرنامج التدريبي";
  }

  // preferredMethod is now optional - no validation needed

  return errors;
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[0-9+\-\s()]+$/;
  return phoneRegex.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};
