import * as Yup from "yup";

const emailValidation = Yup.string()
  .email("Invalid email address")
  .required("Required");
const passwordValidation = Yup.string()
  .required("Required")
  .min(6, "Password must be at least 6 characters");

export const signUpValidationSchema = Yup.object({
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});

export const loginValidationSchema = Yup.object({
  email: emailValidation,
  password: passwordValidation,
});
