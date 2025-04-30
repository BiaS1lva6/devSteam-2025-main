import React from 'react';

const GameCard = (props) => {
  return (
    <div className="promoCard card border-0 overflow-hidden w-100">
      <img
        className="card-img-top object-fit-cover"
        src={props.imagem}
        height={150}
        alt="Titulo do jogo"
      />
      <div className="card-body d-flex flex-column gap-2">
        <h5
          data-bs-toggle="tooltip"
          title={props.titulo}
          className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap"
        >
          {props.titulo}
        </h5>

        <button
          id="addCarrinho"
          className="btn btn-success desconto text-light w-100 border-0"
          onClick={props.onAddCarrinho}
        >
          <i className="bi bi-cart-plus me-2"></i>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default GameCard;