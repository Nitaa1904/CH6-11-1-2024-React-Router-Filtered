// Fragments/FormLogin.jsx
import { useState } from "react";
import axios from "axios";
import Button from "../Elements/button/Button";
import { InputForm } from "../Elements/Input";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        { email, password }
      );
      console.log(response);

      if (response.data.isSuccess) {
        const token = response.data.data.token;
        const username = response.data.data.username;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem(
          "rahasia punya imam",
          "aku bangga bgt sama kalian FSW2 !"
        );
      }
    } catch (err) {
      console.log(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <InputForm
        label="Email address"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit">Login</Button>
    </form>
  );
};
