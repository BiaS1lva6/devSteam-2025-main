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
      <div className="container py-5 d-flex justify-content-center align-items-center vh-100">
        <div className="login-box w-100 p-4" style={{ maxWidth: "400px" }}>
          <h2 className="login-title text-center">Bem-vindo(a)</h2>
          <form onSubmit={fazerLogin} className="login-form">
            <div className="mb-3 text-start">
              <input
                type="text"
                className="form-control"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3 text-start">
              <input
                type="date"
                className="form-control"
                placeholder="Data de nascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3 text-start">
              <input
                type="email"
                className="form-control"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-4 text-start">
              <input
                type="password"
                className="form-control"
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-success w-100">Entrar</button>
            </div>
          </form>
          {mensagem && <p className="login-msg text-center mt-3">{mensagem}</p>}
          <div className="d-flex justify-content-center">
            <Link
              to={"/cadastrar-se"}
              className="text-light dropdown-item my-3 text-center"
            >
              Cadastrar-se
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
