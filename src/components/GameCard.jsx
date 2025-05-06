import React from "react";
import MobileGames from "./MobileGames";

const GameCard = (props) => {
  return (
    <>
      <div
        className="promoCard card border-0 overflow-hidden w-100"
        onClick={props.onCardClick}
      >
        <img
          className="card-img-top object-fit-cover"
          src={props.game.imagem}
          height={150}
          alt="Titulo do jogo"
        />
        <div className="card-body d-flex flex-column gap-2">
          <h5
            data-bs-toggle="tooltip"
            title={props.game.titulo}
            className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap"
          >
            {props.game.titulo}
          </h5>

          <button
            id="addCarrinho"
            className="btn btn-success desconto text-light w-100 border-0"
            onClick={(e) => {
              e.stopPropagation(); // Evita que o clique no botão feche o modal
              props.onAddCarrinho();
            }}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {/* Renderiza o MobileGame condicionalmente */}
      {props.selectedGame && (
        <MobileGames game={props.game} click={props.click} />
      )}
    </>
  );
};

export default GameCard;
