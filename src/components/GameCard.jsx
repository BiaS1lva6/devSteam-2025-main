import React from "react";
import MobileGames from "./MobileGames";

const GameCard = (props) => {
  const { game, onCardClick, onAddCarrinho, selectedGame, click } = props;

  const precoFinal =
    game.desconto > 0
      ? game.preco - game.preco * (game.desconto / 100)
      : game.preco;

  return (
    <>
      <div
        className="card mb-3 border-0 shadow bg-dark text-white"
        onClick={onCardClick}
      >
        <div className="row g-0">
          {/* IMAGEM */}
          <div className="col-md-4">
            <img
              src={game.imagem}
              className="img-fluid h-100 object-fit-cover h-150 object-fit-cover"
              alt={game.titulo}
            />
          </div>

          {/* CONTEÚDO */}
          <div className="col-md-8 d-flex flex-column justify-content-between p-3">
            <div>
              <h5 className="card-title fw-bold text-uppercase">
                {game.titulo}
              </h5>
              <p className="card-text mb-2">{game.categoria}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="corValor m-0">
                {precoFinal === 0 ? "Grátis" : `R$${precoFinal.toFixed(2)}`}
              </h4>
              <button
                id="addCarrinho"
                className="btn desconto text-light w-50 border-0"
                onClick={(e) => {
                  e.stopPropagation(); 
                  onAddCarrinho(game) ; 
                }}
              >
                <i className="bi bi-cart-plus me-2"></i>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedGame && <MobileGames game={game} click={click} />}
    </>
  );
};

export default GameCard;
