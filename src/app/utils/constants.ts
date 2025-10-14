// API Configuration
export const API_CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/v1",
  ENDPOINTS: {
    LEADS: "/leads",
    COURSES: "/courses",
    CATEGORIES: "/courses/categories",
  },
} as const;

// Cloudinary Configuration
export const CLOUDINARY_CONFIG = {
  CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  UPLOAD_PRESET: "voice_messages",
  RESOURCE_TYPE: "video",
  FOLDER: "رواء/voice-messages",
} as const;

// Voice Recording Configuration
export const VOICE_RECORDING_CONFIG = {
  AUDIO_CONSTRAINTS: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
  },
  MIME_TYPE: "audio/webm;codecs=opus",
  MAX_RECORDING_TIME: 300, // 5 minutes in seconds
} as const;

// Form Configuration
export const FORM_CONFIG = {
  MAX_MESSAGE_LENGTH: 1000,
  MIN_NAME_LENGTH: 2,
  PHONE_REGEX: /^[0-9+\-\s()]+$/,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  RECORDING: {
    NOT_ALLOWED: "يرجى السماح بالوصول للميكروفون لتسجيل الرسالة الصوتية",
    NOT_FOUND: "لم يتم العثور على ميكروفون متاح",
    GENERIC: "حدث خطأ أثناء بدء التسجيل",
  },
  FORM: {
    NAME_REQUIRED: "الاسم مطلوب",
    NAME_TOO_SHORT: "الاسم يجب أن يكون أكثر من حرفين",
    PHONE_REQUIRED: "رقم الهاتف مطلوب",
    PHONE_INVALID: "رقم الهاتف غير صحيح",
    COURSE_REQUIRED: "يرجى اختيار البرنامج التدريبي",
    // METHOD_REQUIRED removed - preferred method is now optional
    SUBMIT_ERROR: "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.",
    VOICE_UPLOAD_ERROR: "فشل في رفع الرسالة الصوتية",
  },
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: "تم إرسال طلب التسجيل بنجاح!",
  RECORDING_SUCCESS: "تم التسجيل بنجاح!",
} as const;
