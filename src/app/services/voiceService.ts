import { CLOUDINARY_CONFIG } from "../utils/constants";

export const uploadVoiceMessage = async (audioBlob: Blob): Promise<string> => {
  try {
    // Option 1: Try Cloudinary first
    const cloudName = CLOUDINARY_CONFIG.CLOUD_NAME;

    if (cloudName) {
      const formData = new FormData();
      formData.append("file", audioBlob);
      formData.append("upload_preset", CLOUDINARY_CONFIG.UPLOAD_PRESET);
      formData.append("resource_type", CLOUDINARY_CONFIG.RESOURCE_TYPE);
      formData.append("folder", CLOUDINARY_CONFIG.FOLDER);

      const timestamp = Date.now();
      formData.append("public_id", `voice_message_${timestamp}`);

      console.log("Trying Cloudinary upload...");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Cloudinary upload successful:", result.secure_url);
        return result.secure_url;
      } else {
        console.warn("Cloudinary failed, trying fallback:", result);
      }
    }

    // Option 2: Fallback to file.io
    console.log("Using fallback upload service...");

    const fallbackFormData = new FormData();
    fallbackFormData.append(
      "file",
      audioBlob,
      `voice_message_${Date.now()}.webm`
    );

    const fallbackResponse = await fetch("https://file.io", {
      method: "POST",
      body: fallbackFormData,
    });

    if (!fallbackResponse.ok) {
      throw new Error(`Fallback upload failed: ${fallbackResponse.status}`);
    }

    const fallbackResult = await fallbackResponse.json();

    if (fallbackResult.success && fallbackResult.link) {
      console.log("Fallback upload successful:", fallbackResult.link);
      return fallbackResult.link;
    } else {
      throw new Error("Fallback upload failed");
    }
  } catch (error) {
    console.error("Voice upload error:", error);
    throw new Error("فشل في رفع الرسالة الصوتية");
  }
};
