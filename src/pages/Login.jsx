import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderLogin from "../components/HeaderLogin";
import { Link } from "react-router"; 

function Login() {
const login = async (email, password) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("token", data.token); // salva o token
    return true;
  } else {
    alert("Login falhou: " + data.message);
    return false;
  }
}
const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [Data, setData] = useState("");
  const navigate = useNavigate();

  const fazerLogin = async (e) => {
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://sua-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem("✅ Login realizado com sucesso!");
        setTimeout(() => navigate("/dashboard"), 1000); 
      } else {
        setMensagem(dados.mensagem || "❌ Erro ao fazer login");
      }
    } catch (error) {
      setMensagem("❌ Erro na requisição. Verifique sua conexão ou tente novamente.");
      console.error("Erro no login:", error);
    const success = await login(email, nome);
    if (success) {
      navigate("/perfil");
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
        <button className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
 </>  
  );
}

export default Login;
