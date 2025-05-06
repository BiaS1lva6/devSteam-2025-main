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
        // Aqui você pode redirecionar ou salvar token
        navigate("/dashboard"); // Exemplo de redirecionamento
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
      <div className="container py-5 w-50">
        <div className="login-box">
          <h2 className="login-title">Bem-vindo(a)</h2>
          <form onSubmit={fazerLogin} className="login-form">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="date"
                placeholder="Data de nascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="corBotao btn w-50">
                Entrar
              </button>
            </div>
          </form>
          {mensagem && <p className="login-msg">{mensagem}</p>}
          <div className="d-flex justify-content-center">
            <Link
              to={"/cadastrar-se"}
              className="d-flex justify-content-center text-light dropdown-item my-3"
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
