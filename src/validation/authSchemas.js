
import * as yup from "yup";

export const registerSchema = yup.object({
    fullName: yup
        .string()
        .trim()
        .required("Full name is required")
        .min(3, "Full name must be at least 3 characters")
        .max(50, "Full name must not exceed 50 characters"),

   userName: yup
        .string()
        .trim()
        .required("User name is required")
        .min(3, "User name must be at least 3 characters")
        .max(50, "User name must not exceed 50 characters"),
        
    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(
          /^(?:\+970|00970|0)?5[6-9]\d{7}$/,
          "Please enter a valid Palestinian mobile number"
        ),

    email: yup
        .string()
        .trim()
        .required("Email is required")
        .email("Please enter a valid email address"),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number"),
});

export const loginSchema = yup.object({
    email: yup
        .string()
        .trim()
        .required("Email is required")
        .email("Please enter a valid email address"),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number"),

});
