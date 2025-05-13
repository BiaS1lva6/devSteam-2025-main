import React from "react";
import MobileGames from "./MobileGames";

const GameCard = (props) => {
  return (
    <>
      <div
        id="GameCard"
        className="card bgColor mb-3 border-0 shadow text-white d-flex flex-row align-items-center"
        onClick={props.onCardClick} // Adiciona o evento de clique
        style={{
          height: "105px", // Define uma altura menor para o card

        }}
      >
        {/* IMAGEM */}
        <div className="col-4 p-0">
          <img
            src={props.game.imagem}
            className="img-fluid h-100 object-fit-cover"
            alt={props.game.titulo}
          />
        </div>

        {/* CONTEÚDO */}
        <div className="col-8 d-flex flex-column justify-content-between p-2">
          <div>
            <h5 className="card-title fw-bold text-uppercase text-truncate mb-1">
              {props.game.titulo}
            </h5>
            <p className="card-text mb-1 text-truncate">{props.game.categoria}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-warning m-0">
              R${props.game.preco.toFixed(2)}
            </h4>
            <button
              id="addCarrinho"
              className="btn btn-success btn-sm"
              onClick={(e) => {
                e.stopPropagation(); // Evita que o clique no botão feche o modal
                props.onAddCarrinho();
              }}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Adicionar
            </button>
          </div>
        </div>
      </div>

      {/* Modal MobileGames */}
      {props.selectedGame && (
        <MobileGames game={props.game} click={props.click} />
      )}
    </>
  );
};

export default GameCard;
