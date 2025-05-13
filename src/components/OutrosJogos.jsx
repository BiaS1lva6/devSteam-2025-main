import React, { useState } from "react";
import GameCard from "./GameCard";
import MobileGames from "./MobileGames";

const OutrosJogos = (props) => {
  const [selectedGame, setSelectedGame] = useState(null); // Estado para o jogo selecionado

  const games = [
    {
      id: 1,
      titulo: "Counter-Strike: Global Offensive",
      preco: 99.9,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      categoria: "Ação, Estratégia, Multijogador",
      desenvolvedor: "Valve",
      descricao:
        "O clássico FPS competitivo retorna com gráficos renovados e jogabilidade ainda mais precisa. Perfeito para amantes de tiro tático.",
      nota: 4.8,
      lancamento: "2012-08-21",
      plataforma: ["PC"],
    },
    {
      id: 2,
      titulo: "Cyberpunk 2077",
      preco: 129.99,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      categoria: "RPG de Ação",
      desenvolvedor: "CD Projekt Red",
      descricao:
        "Explore Night City como um mercenário em um futuro distópico, com narrativa profunda e visuais impressionantes.",
      nota: 4.5,
      lancamento: "2020-12-10",
      plataforma: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X|S"],
    },
    {
      id: 3,
      titulo: "Elden Ring",
      preco: 249.9,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      categoria: "RPG",
      desenvolvedor: "FromSoftware",
      descricao:
        "Uma aventura épica em mundo aberto criada por Hidetaka Miyazaki e George R. R. Martin. Desafios intensos e lore profundo.",
      nota: 4.9,
      lancamento: "2022-02-25",
      plataforma: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X|S"],
    },
  ];

  const handleCardClick = (game) => {
    setSelectedGame((prevGame) => (prevGame?.id === game.id ? null : game)); // Alterna entre abrir e fechar
  };

  const closeMobileGame = () => {
    setSelectedGame(null); // Fecha o modal
  };

  return (
    <div id="outrosJogos" className="container w-75 my-5">
      <h2 className="text-uppercase text-center text-md-start text-light ms-md-5 ps-md-3 mb-4">
        Outros Jogos
      </h2>
      <div
        id="itensJogos"
        className="d-flex flex-wrap gap-4 justify-content-around"
      >
        {games.map((jogo) => (
          <GameCard
            key={jogo.id}
            game={jogo}
            selectedGame={selectedGame?.id === jogo.id} // Verifica se o jogo está selecionado
            onCardClick={() => handleCardClick(jogo)} // Passa a função de clique
            onAddCarrinho={() => props.onAddCarrinho(jogo)} // Passa a função de adicionar ao carrinho
          />
        ))}
      </div>

      {/* Renderiza o MobileGames condicionalmente */}
      {selectedGame && (
        <MobileGames
          game={selectedGame}
          click={closeMobileGame} // Fecha o modal
        />
      )}
    </div>
  );
};

export default OutrosJogos;