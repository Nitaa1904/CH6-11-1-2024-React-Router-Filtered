import { Link } from "react-router-dom";
import { FormLogin } from "../components/Fragments/FormLogin";
import { AuthLayout } from "../Layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p>
        Don't have a account? <Link to="/register">Register</Link>
      </p>
    </AuthLayout>
  );
};
