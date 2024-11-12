// page/Login.jsx
import { Link } from "react-router-dom";
import { FormLogin } from "../components/Fragments/FormLogin";
import { AuthLayout } from "../Layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormLogin />
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
