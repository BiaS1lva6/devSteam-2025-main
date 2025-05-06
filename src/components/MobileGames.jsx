import React, { useEffect, useState } from "react";

const MobileGames = (props) => {
  const [gameDesc, setGameDesc] = useState(null);

  // useEffect(() => {
  //   fetch(`https://api.rawg.io/api/games/${props.gameID}?key=${props.apiKey}`)
  //     .then((res) => res.json())
  //     .then((data) => setGameDesc(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // if (!gameDesc) return null;

  return (
    <div
      className="modal fade show d-block game-backdrop"
      onClick={props.click}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content game-modal text-white">
          <div className="position-relative">
            <img
              src={props.game.imagem}
              alt={`Capa do jogo ${props.game.titulo}`}
              className=" rounded-top game-cover object-fit-cover w-100"
            />
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 btn btn-light"
              aria-label="Fechar"
              onClick={props.click}
            ></button>
            <div className="position-absolute bottom-0 w-100 p-3 game-gradient">
              <div className="text-uppercase">
                <h1 className="h4">{props.game.titulo}</h1>
                <a
                  href={`https://youtube.com/results?search_query=${encodeURIComponent(
                    props.game.titulo
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-sm mt-2"
                >
                  ▶️ Ver mais
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 text-dark">
            <div className="d-flex justify-content-between mb-3 flex-wrap">
              <span>
                <strong>Nota:</strong> {props.game.nota}
              </span>
              <span>
                <strong>Lançamento:</strong> {props.game.lancamento}
              </span>
              <span>
                <strong>Plataformas:</strong>{" "}
                {props.game.plataforma.map((p) => p).join(", ") || "PC"}
              </span>
            </div>
            <div className="mb-3">
              <p>
                <strong>Gêneros:</strong> {props.game.categoria}
              </p>
              <p>
                <strong>Desenvolvedor:</strong>{" "}
                {props.game.desenvolvedor || "Desconhecido"}
              </p>
            </div>
            <div>
              <p>
                <strong>Descrição:</strong>
              </p>
              <div dangerouslySetInnerHTML={{ __html: props.game.descricao }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGames;
