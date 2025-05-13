import React from "react";
import MobileGames from "./MobileGames";

const GameCard = (props) => {

  return (
    <>
    <div
      id="GameCard"
      className="promoCard card border-0 overflow-hidden"
      onClick={props.onCardClick} // Adiciona o evento de clique
    >
      <div className="row g-0">
        {/* IMAGEM */}
        <div className="col-md-4">
          <img
            src={props.imagem}
            className="img-fluid h-100 object-fit-cover img-max-height"
            alt= "Titulo do jogo"
          />
        </div>

        <div className="col-md-8 d-flex flex-column justify-content-between p-3">
          <div>
          <h5
            data-bs-toggle="tooltip"
            title={props.titulo}
            className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap"
          >
            {props.titulo}
          </h5>
            <p className="card-text mb-2">{props.categoria}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="corValor m-0">
              R${props.preco.toFixed(2)} 
            </h4>
            <button
              id="addCarrinho"
              className="btn desconto text-light w-50 border-0"
              onClick={(e) => {
                e.stopPropagation();
                props.onAddCarrinho;
              }}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>


    </div>
  {props.selectedGame && (
    <MobileGames game={props.game} click={props.click} />
  )}
  </>
  );
};

export default GameCard;
