import React from "react";

const GameCard = (props) => {
  const { game, onCardClick, onAddCarrinho } = props;

  return (
    <div
      className="card bgColor mb-3 border-0 shadow text-white"
      onClick={onCardClick} // Chama a função ao clicar no card
    >
      <div className="row g-0">
        {/* IMAGEM */}
        <div className="col-md-4">
          <img
            src={game.imagem}
            className="img-fluid h-100 object-fit-cover img-max-height"
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
              R${game.preco.toFixed(2)} {/* Exibe o preço sem desconto */}
            </h4>
            <button
            id="addCarrinho"
            className="btn desconto text-light w-50 border-0"
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
      </div>
    </div>
  );
};

export default GameCard;
