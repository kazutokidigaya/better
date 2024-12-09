import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../utils/validationSchema";

const LoginForm: React.FC = () => {
  const storedEmail = localStorage.getItem("userEmail") || "";

  return (
    <Formik
      initialValues={{
        email: storedEmail,
        password: "",
        rememberMe: !!storedEmail,
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        if (values.rememberMe) {
          localStorage.setItem("userEmail", values.email);
        } else {
          localStorage.removeItem("userEmail");
        }
        alert("Login Successful");
      }}
    >
      <Form className="w-[360px] lg:w-[400px] mx-auto p-6 bg-gray-800 rounded shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
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
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="flex items-center">
          <Field
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-sm">
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="w-full p-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
