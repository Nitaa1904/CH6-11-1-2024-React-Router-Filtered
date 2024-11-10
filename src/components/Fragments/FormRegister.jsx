import Button from "../Elements/button/Button";
import { InputForm } from "../Elements/Input";

export const FormRegister = () => {
  return (
    <form>
      <InputForm
        label={"FullName"}
        type={"text"}
        placeholder={"Insert Your Name here"}
        name={"fullName"}
      />
      <InputForm
        label={"Email"}
        type={"email"}
        placeholder={"example@gmail.com"}
        name={"email"}
      />
      <InputForm
        label={"Password"}
        type={"password"}
        placeholder={"*****"}
        name={"password"}
      />
      <InputForm
        label={"Confirm Password"}
        type={"password"}
        placeholder={"*****"}
        name={"password"}
      />
      <Button>Register</Button>
    </form>
  );
};
