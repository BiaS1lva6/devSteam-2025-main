

import { Link } from "react-router";
import HeaderLogin from "../components/HeaderLogin";
import React, { useState } from "react";

const AddCartao = () => {
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");

  const handleAddCartao = () => {
    const novoCartao = { numero: numeroCartao, nome: nomeCartao };

    // Recupera os cartões existentes no localStorage
    const cartoesExistentes = JSON.parse(localStorage.getItem("cartoes")) || [];

    // Adiciona o novo cartão ao array existente
    const cartoesAtualizados = [...cartoesExistentes, novoCartao];

    // Salva o array atualizado no localStorage
    localStorage.setItem("cartoes", JSON.stringify(cartoesAtualizados));

    alert("Cartão cadastrado com sucesso!");
    setNumeroCartao("");
    setNomeCartao("");
  };

  
    
    
  
  

  return (
    <>
      <HeaderLogin />

      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "100dvh" }}
      >
          
        <div className="d-flex">
          <div className="d-flex flex-column gap-2 m-3">
            <Link to={"/perfil"} className="text-light text-decoration-none">
              <button className="edicao">
                <h5 className="m-0 text-light mt-1">Cadastro</h5>
                <p className="textEdicao">Edite seus dados</p>
              </button>
            </Link>

      
            <Link to={"/cartoes"} className="text-light text-decoration-none">
              <button className="edicao">
                <h5 className="m-0 text-light mt-1">Cartões</h5>
                <p className="textEditar">Ver seus cartões cadastrados</p>
              </button>
            </Link>
          </div>
       
           
            
          
    
            <div className="cadastro d-flex flex-column align-items-start p-5 gap-3">
            <h1 className="text-light">Adicionar Cartão</h1>
             <p className="text-light m-0">Nome do cartão</p>
            <input
      className="form-control w-100 col-auto col-form-label"
        type="text"
        placeholder="Nome do Cartão"
        value={nomeCartao}
        onChange={(e) => setNomeCartao(e.target.value)}
      />
         
         <p className="text-light m-0">Número do cartão</p>
      <input
      className="form-control w-100 col-auto col-form-label"
        type="text"
        placeholder="Número do Cartão"
        value={numeroCartao}
        onChange={(e) => setNumeroCartao(e.target.value)}
      />
          
            <label className="text-light">Validade</label>
         

            <div className=" d-flex  align-items-start w-100">
            
                <input
              id="email"
              type="text"
              className={`form-control w-25 col-auto col-form-label `}
       
        
            />
          
          </div>

  
         
         <button className="btn btn-danger" onClick={handleAddCartao}>Cadastrar Cartão</button>
            

  <option date></option>
  

</div>
            {/* <button
              className="btn btn-success shadow-sm  "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            
              onClick={() => handleSave()}
            >
              Salvar
            </button> */}
            </div>
            </div>
              
   
      
    
  </>
  );
};

export default AddCartao;
            
      
  