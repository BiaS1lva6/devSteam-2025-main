import React, { useState } from "react";
import GameCard from "./GameCard";

const OutrosJogos = () => {
  const [selectedGame, setSelectedGame] = useState(null); // Estado para o jogo selecionado

  const games = React.useMemo(
    () => [
      {
        id: 1,
        titulo: "Counter-Strike 2",
        preco: 0.0,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        descricao:
          "O clássico FPS competitivo retorna com gráficos renovados e jogabilidade ainda mais precisa. Perfeito para amantes de tiro tático.",
        categoria: "FPS",
        nota: 4.8,
        desenvolvedor: "Valve",
        lancamento: "2023-09-27",
        plataforma: ["PC"],
      },
      {
        id: 2,
        titulo: "Cyberpunk 2077",
        preco: 129.99,
        desconto: 20,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        descricao:
          "Explore Night City como um mercenário em um futuro distópico, com narrativa profunda e visuais impressionantes.",
        categoria: "RPG de Ação",
        nota: 4.5,
        desenvolvedor: "CD Projekt Red",
        lancamento: "2020-12-10",
        plataforma: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X|S"],
      },
      {
        id: 3,
        titulo: "Elden Ring",
        preco: 249.9,
        desconto: 35,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
        descricao:
          "Uma aventura épica em mundo aberto criada por Hidetaka Miyazaki e George R. R. Martin. Desafios intensos e lore profundo.",
        categoria: "RPG",
        nota: 4.9,
        desenvolvedor: "FromSoftware",
        lancamento: "2022-02-25",
        plataforma: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X|S"],
      },
    ],
    []
  );

  const handleCardClick = (game) => {
    setSelectedGame((prevGame) => (prevGame?.id === game.id ? null : game)); // Alterna entre abrir e fechar
  };

  const closeMobileGame = () => {
    setSelectedGame(null); // Fecha o modal
  };

  return (
    <div id="outrosJogos" className="container w-75 my-5">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Outros Jogos
      </h2>
      <div id="itensJogos" className="d-flex flex-column ms-md-5 ps-md-3 gap-4">
        {games.map((item) => (
          <GameCard
            key={item.id}
            id={item.id}
            game={item}
            click={closeMobileGame}
            onCardClick={() => handleCardClick(item)}
            selectedGame={selectedGame?.id === item.id} // Verifica se o jogo está selecionado
          />
        ))}
      </div>
    </div>
  );
};

export default OutrosJogos;
