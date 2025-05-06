
import { Link } from "react-router";
import HeaderLogin from "../components/HeaderLogin";
import React, { useEffect, useState } from "react";
import Perfil from "./Perfil";

const Cartoes = () => {
  const [usuario, setUsuario] = useState([]);
  const [nomeEditado, setNomeEditado] = useState("");
  const [emailEditado, setEmailEditado] = useState("");
  const [senhaEditada, setSenhaEditada] = useState("");
  const [dataEditada, setDataEditada] = useState("");
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
            <Link to={"/Perfil"} className="text-light text-decoration-none">
              <button className="edicao">
                <h5 className="m-0 text-light mt-1">Cadastro</h5>
                <p className="textEdicao">Edite seus dados</p>
              </button>
            </Link>
            <button className="edicao">
              <h5 className="m-0 text-light mt-1">Cartões</h5>
              <p className="textEditar">Ver seus cartões cadastrados</p>
            </button>
          </div>
          <div className="cartoes"> 
      </div>
      </div>
      </div>
       
   
    </>
  );
};

export default Cartoes;
