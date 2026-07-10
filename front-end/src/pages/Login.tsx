import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      
      if (!email || !password) {
        setError("Email e senha são obrigatórios");
        return;
      }

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        setError("");
        const data = await response.json();
        console.log(data);
      }

      if (response.status === 400) {
        setError("Email ou senha inválidos");
        return;
      }

      if (response.status === 404) {
        setError("Usuário não encontrado");
        return;
      }
    } catch (error) {
      console.error(error);
    }
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

        <div className="mb-3 flex flex-col gap-2">
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
          <p className="text-left text-sm font-bold text-[#F8E2CF]">{error}</p>
        </div>
        <Button title="Login" variant="primary" type="submit" />
        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="secondary" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
