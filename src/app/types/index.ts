// Course interface
export interface Course {
  id: string;
  title: string;
  status: string;
  categoryId: string;
  description: string;
  // summary: string;
  features: string[];
  duration: number;
  availableSeats: number;
  category: {
    name: string;
  };
}
export interface Courses extends successResponse {
  data: {
    total: number;
    courses: Course[];
  };
}
interface successResponse {
  success: boolean;
  message: string;
  timestamp: string;
  statusCode: number;
}
export interface Categories extends successResponse {
  data: Category[];
}
export interface Category {
  id: string;
  name: string;
  courses: Course[];
}
// Review interface
export interface Review {
  id: number;
  courseId: number;
  studentName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  jobTitle: string;
  company: string;
}

// Form data interfaces
export interface ReviewFormData {
  courseId: number;
  studentName: string;
  rating: number;
  comment: string;
  jobTitle: string;
  company: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Voice recording states
export interface VoiceRecordingState {
  isRecording: boolean;
  audioBlob: Blob | null;
  audioUrl: string | null;
  recordingTime: number;
  isPlaying: boolean;
  recordingError: string | null;
}

// Form states
export interface FormState {
  isSubmitting: boolean;
  isUploadingVoice: boolean;
  formErrors: FormErrors;
  submitSuccess: boolean;
  submitMessage: string;
}

// API Types
export interface RegistrationPayload {
  name: string;
  phone: string;
  selectedProgram: string;
  learningPreference: string;
  message: string;
  voiceMessage: string;
}

export interface RegistrationResponse {
  success: boolean;
  data: {
    id: string;
    message: string;
  };
}

// Component Props Types
export interface RegistrationFormProps {
  courses: Courses;
  selectedCourse: string;
  setSelectedCourse: (course: string) => void;
}

// Voice Recording Hook Types
export interface VoiceRecordingHookReturn {
  voiceState: VoiceRecordingState;
  audioRef: React.RefObject<HTMLAudioElement>;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  playRecording: () => void;
  deleteRecording: () => void;
  formatTime: (seconds: number) => string;
  cleanup: () => void;
}

// Form Submission Hook Types
export interface FormSubmissionHookReturn {
  formState: FormState;
  clearFieldError: (fieldName: string) => void;
  handleFormSubmit: (
    e: React.FormEvent,
    voiceBlob: Blob | null,
    setSelectedCourse: (course: string) => void,
    onSuccess?: () => void
  ) => Promise<void>;
}
