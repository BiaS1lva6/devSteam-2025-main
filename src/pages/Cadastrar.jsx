import React, { useState } from 'react'
import HeaderLogin from '../components/HeaderLogin'
import { Link, useNavigate } from 'react-router';


const Cadastrar = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dia, setDia] = useState("");
    const [senha, setSenha] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem(
        "devlogin",
        JSON.stringify({
          nome,
          email,
          nascimento: `${dia}/${mes}/${ano}`,
        })
      );
      navigate("/");
    }
  };

  return (
    <>
      <HeaderLogin />

      <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
        <h2 className="mb-4 text-success">Cadastrar-se</h2>

        <form
          onSubmit={handleLogin}
          className="w-100 "
          style={{ maxWidth: "400px" }}
        >
          <div className="mb-3">
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="form-control"
              type="text"
              name="frmNome"
              id="frmNome"
              placeholder="Nome"
              required
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
              required
            />
          </div>

          <div className="mb-4 text-start">
              <input
                type="password"
                id="frmSenha"
                className="form-control"
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

          <div className="mb-3 m-0">
            <label htmlFor="frmNascimento " className="form-label text-light">
              Data de Nascimento
            </label>
            <input
              value={`${ano}-${mes}-${dia}`}
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                setAno(year);
                setMes(month);
                setDia(day);
              }}
              className="form-control button-color"
              type="date"
              name="frmNascimento"
              id="frmNascimento"
              required
            />
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-success w-100">Cadastrar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Cadastrar;
