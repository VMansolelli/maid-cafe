import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!name || !email || !password || !confirmPassword || !cep) {
        setError("Preencha todos os campos");
        return;
      }

      if (password !== confirmPassword) {
        setError("As senhas não coincidem");
        return;
      }

      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, cep }),
      });

      switch (response.status) {
        case 409:
          setError("Usuário já existe");
          break;
        case 400:
          setError("Todos os campos são obrigatórios");
          break;
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setCep("");
          setError("");
          break;
        case 500:
          setError("Erro interno do servidor");
          break;
        default:
          setError("");
      }

      const data = await response.json();

      console.log(data);

    } catch (error) {
      console.error(error);
      return;
    }
  }
  return (
    <form
      className="flex h-screen items-center justify-center bg-[#2A1911]"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img src="./Logo.png" alt="" className="mx-auto mb-4 h-auto w-24" />
        </Link>

        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          placeholder="Confirmar Senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
          value={cep}
        />
        <p className="text-left text-sm font-bold text-[#F8E2CF]">{error}</p>

        <div className="mt-3 flex w-full flex-col gap-2">
          <Button title="Criar Conta" type="submit" variant="primary" />
          <Link to="/login" className="w-full">
            <Button title="Já tenho uma conta" variant="secondary" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
