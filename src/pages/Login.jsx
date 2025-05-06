import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mensagem, setMensagem] = useState('');
import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderLogin from "../components/HeaderLogin";
import { Link } from "react-router";

const Login = () => {
  const [nome, setNome] = useState("");

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const fazerLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://sua-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha, nome, dataNascimento }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem('✅ Login realizado com sucesso!');
        // Aqui você pode redirecionar ou salvar token
      } else {
        setMensagem(dados.mensagem || '❌ Erro ao fazer login');
      }
    } catch (error) {
      setMensagem('❌ Erro na requisição');
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Bem-vindo(a)</h2>
        <form onSubmit={fazerLogin} className="login-form">
   <>
    <HeaderLogin/>
    
    <div className="container py-5 w-50">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="date"
            placeholder="Data de nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
            className="form-control "
            type="text"
            name="frmNome"
            id="frmNome"
            placeholder="Nome"
          />
        </div>

        <div className="mb-3">
       
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        {mensagem && <p className="login-msg">{mensagem}</p>}
      </div>
            className="form-control"
            type="email"
            name="frmEmail"
            id="frmEmail"
            placeholder="Email"
          />
        </div>
        <div className="d-flex justify-content-center">
        <button className="corBotao btn w-50">Entrar</button></div>
        <div>
        <Link to={"/cadastrar-se"} className="d-flex justify-content-center text-light dropdown-item my-3">
          Cadastrar-se
        </Link>
      
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;
