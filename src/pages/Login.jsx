import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderLogin from "../components/HeaderLogin";
import { Link } from "react-router";

const Login = () => {
  const [nome, setNome] = useState("");

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devlogin", JSON.stringify({ nome, email }));

      navigate("/");
    }
  };

  return (
   <>
    <HeaderLogin/>
    
    <div className="container py-5 w-50">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control "
            type="text"
            name="frmNome"
            id="frmNome"
            placeholder="Nome"
          />
        </div>

        <div className="mb-3">
       
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
};

export default Login;
