import HeaderLogin from "../components/HeaderLogin"
import { Link } from "react-router"
import React, { useEffect, useState } from "react";

const Cartoes = () => {
  
   const [cartoes, setCartoes] = useState([]);
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
        <div className="cadastro d-flex flex-column align-items-start p-5 gap-3">
          <div className="d-flex justify-content-between w-100">
            <div>
              <h5 className="text-light">Cadastro</h5>
              <p className="textEdicao">Nome cadastrado</p>
            </div>
            <div className="d-flex flex-column align-items-start gap-2">
  <Link to="/AddCartoes">
    <button className="btn btn-danger">Cadastrar Cartão</button>
  </Link>

  {cartoes.length > 0 ? (
    cartoes.map((cartao, index) => (
      <div key={index} className="card bg-dark p-3 mb-2">
        <p>Nome: {cartao.nome}</p>
        <p>Número: **** **** **** {cartao.numero?.toString().slice(-4)}</p>
        <p>Validade: {cartao.validade}</p>
      </div>
    ))
  ) : (
    <p className="textcartao">Nenhum cartão cadastrado</p>
  )}
</div>


          </div>
      </div>
      </div>
      </div>
 
  </>
  )

}

export default Cartoes