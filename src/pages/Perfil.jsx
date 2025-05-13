import Cartoes from "./Cartoes";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import HeaderLogin from "../components/HeaderLogin";

const Perfil = () => {
 
  const [usuario, setUsuario] = useState([]);
  const [nomeEditado, setNomeEditado] = useState("");
  const [emailEditado, setEmailEditado] = useState("");
  const [senhaEditada, setSenhaEditada] = useState("");
  const [dataEditada, setDataEditada] = useState(new Date());
  const [editar, setEditar] = useState("disabled");

  useEffect(() => {
    editar === "" && document.getElementById("nome").focus();
  }, [editar]);

  const disableInput = () => {
    editar === "disabled" ? setEditar("") : setEditar("disabled");
  };

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    if (salvaUsuario) {
      const user = JSON.parse(salvaUsuario);
      setUsuario(user);
      setNomeEditado(user.nome); // define valor inicial
      setEmailEditado(user.email); // define valor inicial
      setSenhaEditada(user.senha); // define valor inicial
      setDataEditada(user.data); // define valor inicial
    }
  }, []);

  const handleSave = () => {
    const usuarioAtualizado = {
      ...usuario,
      nome: nomeEditado,
      email: emailEditado,
      senha: senhaEditada,
      data: dataEditada,
    };

    setUsuario(usuarioAtualizado);
    localStorage.setItem("devlogin", JSON.stringify(usuarioAtualizado));
    setEditar("disabled");
    alert("🎲Dados salvos com sucesso!😁");
  };

  return (
    <>
      <HeaderLogin />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100dvh" }}
      >
        <div className="d-flex">
          <div className="d-flex flex-column gap-2 m-3">
            <button className="edicao">
              <h5 className="m-0 text-light mt-1">Cadastro</h5>
              <p className="textEdicao">Edite seus dados</p>
            </button>

            <Link to={"/cartoes"} className="text-light text-decoration-none">
              <button className="edicao">
                <h5 className="m-0 text-light mt-1">Cartões</h5>
                <p className="textEditar">Ver seus cartões cadastrados</p>
              </button>
            </Link>
          </div>
          <div className="cadastro d-flex flex-column align-items-start p-5 gap-3">
            <div className="d-flex justify-content-between w-100">
              <div>
                <h5 className="text-light">Cadastro</h5>
                <p className="textEdicao">Nome cadastrado</p>
              </div>
              <button
                className="btn btn-danger h-75"
                onClick={() => disableInput()}
              >
                editar
              </button>
            </div>
            
            <input
              id="nome"
              type="text"
              placeholder="Edite seu nome"
              className={`form-control w-100 ${editar}`}
              disabled={editar}
              value={nomeEditado}
              onChange={(e) => setNomeEditado(e.target.value)}
            />
             <p className="text-light m-0">Email</p>
                <input
              id="email"
              type="text"
              placeholder="Edite seu email"
              className={`form-control w-100 ${editar}`}
              disabled={editar}
              value={emailEditado}
              onChange={(e) => setEmailEditado(e.target.value)}
            />
             <div class="col-auto">
             <p className="text-light">Senha</p>
              <input
              class="form-control"
              id="senha"
              type="password"
              placeholder="Edite sua senha"
              className={`form-control w-100 aria-describedby="passwordHelpInline col-auto col-form-label" ${editar}`}
              disabled={editar}
              value={senhaEditada}
              onChange={(e) => setSenhaEditada(e.target.value)}
              
            />

</div>
  
<div  >

        <p className="text-light">Data Nascimento</p>
        <div className="mb-3">
          <label className="form-label" htmlFor="frmData">
          Data
          </label>
          <input
            value={dataEditada}
            onChange={(e) => setDataEditada(e.target.value)}
            className="form-control w-25 " 
            type="Data"
            name="frmData"
            id="frmData"
          />
        </div>
            <button
              className="btn btn-success shadow "
              disabled={editar}
              onClick={() => handleSave()}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Perfil;
