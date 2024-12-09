import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpValidationSchema } from "../utils/validationSchema";

interface SignUpFormProps {
  onSuccess: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  const validatePasswordStrength = (password: string) => {
    if (password.length > 8 && /\W/.test(password)) {
      setPasswordStrength("Strong");
    } else if (password.length > 5) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={signUpValidationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Sign Up Successful");
        resetForm();
        onSuccess();
      }}
    >
      {({ setFieldValue }) => (
        <Form className="lg:w-[400px] w-[360px] mx-auto p-6 bg-gray-800 rounded shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              placeholder="Enter your password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("password", e.target.value);
                validatePasswordStrength(e.target.value);
              }}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
            <div className="mt-1 text-sm">
              Password Strength:{" "}
              <span
                className={`font-bold ${
                  passwordStrength === "Strong"
                    ? "text-green-500"
                    : passwordStrength === "Medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {passwordStrength || "Weak"}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2  mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
