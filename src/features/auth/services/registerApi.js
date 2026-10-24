import axios from "axios";

const API_URL = "https://knowledgeshop.runasp.net/api/auth/Account/Register";

export const registerUser = async (data) => {
  try {
    const response = await axios.post(API_URL,data);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    const responseData = error.response?.data;
    return {
      success: false,
      message:
        responseData?.errors?.join(" ") ||
        responseData?.message ||
        "Create account failed",
    };
  }
};