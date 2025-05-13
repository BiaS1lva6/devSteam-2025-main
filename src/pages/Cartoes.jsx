import HeaderLogin from "../components/HeaderLogin";
import { Link } from "react-router";
import React, { useEffect, useState } from "react";

const Cartoes = () => {
  const [cartoes, setCartoes] = useState([]);
  

  // Função para excluir um cartão
  const excluirCartao = (index) => {
    const cartoesSalvos = JSON.parse(localStorage.getItem("cartoes")) || [];
    cartoesSalvos.splice(index, 1); // Remove o cartão pelo índice
    localStorage.setItem("cartoes", JSON.stringify(cartoesSalvos)); // Atualiza o localStorage
    setCartoes(cartoesSalvos); // Atualiza o estado local
    alert("Cartão excluído com sucesso!");
  };

  // Carregar os cartões salvos no localStorage ao carregar a página
  useEffect(() => {
    const cartoesSalvos = localStorage.getItem("cartoes");
    if (cartoesSalvos) {
      setCartoes(JSON.parse(cartoesSalvos));
    }
  }, []);

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
       
        <div className="cadastro  flex-column align-items-start p-5 gap-3 justify-content-between">
        <h1 className="text-light">Meus Cartões</h1>
       
        <div className="d-flex w-100 align-items-center justify-content-center mt-3">
          
          {cartoes.length > 0 ? (
            cartoes.map((cartao, index) => (
              <div key={index} className="card">
                <p>Nome: {cartao.nome}</p>
                <p>Número: **** **** **** {cartao.numero?.toString().slice(-4)}</p>
                <p>Validade: {cartao.validade}</p>
                <button
                  className="btn btn-success text-dark shadow w-50 align-items-center d-flex justify-content-center ms-5 "
                  onClick={() => excluirCartao(index)} // Chama a função excluirCartao
                >
                  Excluir
                </button>
              </div>
            ))
          ) : (
            <p className="textcartao">Nenhum cartão cadastrado</p>
          )}
            <Link to="/AddCartoes">
            <button className="btn btn-danger mt-0 m-5">Cadastrar Cartão</button>
          </Link>
      </div>
    
      </div>
      </div>
      </div>
    </>
  );
};

export default Cartoes;