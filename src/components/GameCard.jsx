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
        style={{ backgroundColor: "#1b2838", cursor: "pointer" }}
        onClick={onCardClick}
      >
        <div className="row g-0">
          {/* IMAGEM */}
          <div className="col-md-4">
            <img
              src={game.imagem}
              className="img-fluid h-100 object-fit-cover"
              alt={game.titulo}
              style={{ maxHeight: "150px", objectFit: "cover" }}
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
              <h4 className="text-warning m-0">
                {precoFinal === 0 ? "Grátis" : `R$${precoFinal.toFixed(2)}`}
              </h4>
              <button
                className="btn btn-success fw-semibold"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddCarrinho();
                }}
              >
                <i className="bi bi-cart-plus me-2"></i>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE GAME (opcional/modal) */}
      {selectedGame && <MobileGames game={game} click={click} />}
    </>
  );
};

export default GameCard;
