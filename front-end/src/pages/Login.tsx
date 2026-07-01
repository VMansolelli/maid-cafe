import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email, password });
  }
  return (
    <form
      className="flex h-screen items-center justify-center bg-[#2A1911]"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./Logo.png" alt="" className="mb-4 h-auto w-24" />
        </Link>

        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Login" variant="primary" />
        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="secondary" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
