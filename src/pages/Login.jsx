import React, { useState } from "react";
import { useNavigate } from "react-router"; 
import HeaderLogin from "../components/HeaderLogin";
import { Link } from "react-router"; 

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const fazerLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://sua-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha, nome, dataNascimento }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem("✅ Login realizado com sucesso!");
        navigate("/dashboard");
      } else {
        setMensagem(dados.mensagem || "❌ Erro ao fazer login");
      }
    } catch (error) {
      setMensagem("❌ Erro na requisição");
      console.error(error);
    }
  };

  return (
    <>
      <HeaderLogin />
      <div className="login-page d-flex justify-content-center align-items-center vh-100">
        <div className="login-box bg-dark p-4 rounded-4 shadow text-center w-100" style={{ maxWidth: "400px" }}>
          <h2 className="login-title mb-4">Bem-vindo(a)</h2>
          <form onSubmit={fazerLogin} className="login-form">
            <div className="mb-3 text-start">
              <input
                type="text"
                className="form-control"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-3 text-start">
              <input
                type="date"
                className="form-control"
                placeholder="Data de nascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </div>
            <div className="mb-3 text-start">
              <input
                type="email"
                className="form-control"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 text-start">
              <input
                type="password"
                className="form-control"
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Entrar
            </button>
          </form>
          {mensagem && <p className="login-msg mt-3">{mensagem}</p>}
          <div className="mt-3">
            <Link to="/cadastrar-se" className="text-light text-decoration-underline">
              Cadastrar-se
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
