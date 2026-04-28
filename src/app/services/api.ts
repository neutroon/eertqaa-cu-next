import { Categories, Category, Courses } from "../types";
import { API_CONFIG } from "../utils/constants";

// Registration API Types
export interface RegistrationPayload {
  name: string;
  phone: string;
  selectedProgram: {
    name: string;
    courseId: string;
  };
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
  const fallbackCourses: Courses = {
    success: false,
    message: "",
    timestamp: "",
    statusCode: 500,
    data: {
      total: 0,
      courses: [],
    },
  };

  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.COURSES}`
    );

    if (!response.ok) {
      return {
        ...fallbackCourses,
        message: `HTTP ${response.status}: Failed to load courses`,
        statusCode: response.status,
      };
    }

    const payload = (await response.json()) as Partial<Courses>;
    const courses = payload?.data?.courses;

    if (!Array.isArray(courses)) {
      return {
        ...fallbackCourses,
        message: payload?.message || "Invalid courses payload",
        statusCode: payload?.statusCode ?? 500,
      };
    }

    return {
      success: payload?.success ?? true,
      message: payload?.message ?? "",
      timestamp: payload?.timestamp ?? "",
      statusCode: payload?.statusCode ?? 200,
      data: {
        total:
          typeof payload?.data?.total === "number"
            ? payload.data.total
            : courses.length,
        courses,
      },
    };
  } catch {
    return {
      ...fallbackCourses,
      message: "Unable to load courses data",
    };
  }
};

export const getCategories = async (): Promise<Categories> => {
  const fallbackCategories: Categories = {
    success: false,
    message: "",
    timestamp: "",
    statusCode: 500,
    data: [],
  };

  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATEGORIES}`
    );

    if (!response.ok) {
      return {
        ...fallbackCategories,
        message: `HTTP ${response.status}: Failed to load categories`,
        statusCode: response.status,
      };
    }

    const payload = (await response.json()) as Partial<Categories>;
    const categories = payload?.data;

    if (!Array.isArray(categories)) {
      return {
        ...fallbackCategories,
        message: payload?.message || "Invalid categories payload",
        statusCode: payload?.statusCode ?? 500,
      };
    }

    return {
      success: payload?.success ?? true,
      message: payload?.message ?? "",
      timestamp: payload?.timestamp ?? "",
      statusCode: payload?.statusCode ?? 200,
      data: categories,
    };
  } catch {
    return {
      ...fallbackCategories,
      message: "Unable to load categories data",
    };
  }
};
