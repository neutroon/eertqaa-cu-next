import { Categories, Category, Courses } from "../types";
import { API_CONFIG } from "../utils/constants";

// Registration API Types
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

// API Service Functions
export const submitRegistration = async (
  payload: RegistrationPayload
): Promise<RegistrationResponse> => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LEADS}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `HTTP ${response.status}: فشل في إرسال الطلب`
    );
  }

  return await response.json();
};

export const getCourses = async (): Promise<Courses> => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.COURSES}`
  );
  return await response.json();
};

export const getCategories = async (): Promise<Categories> => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATEGORIES}`
  );
  return await response.json();
};
