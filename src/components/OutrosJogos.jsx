import React, {  } from "react";
import GameCard from "./GameCard";

const OutrosJogos = () => {
  const games = [
    {
      id: 1,
      titulo: "Counter-Strike: Global Offensive",
      preco: 99.9,
      desconto: 0,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      categoria: "Ação, Estratégia, Multijogador",
      desenvolvedor: "Valve",
    },
    {
      id: 2,
      titulo: "Cyberpunk 2077",
      preco: 129.99,
      desconto: 20,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      categoria: "RPG de Ação",
      desenvolvedor: "CD Projekt Red",
    },
    {
      id: 3,
      titulo: "Elden Ring",
      preco: 249.9,
      desconto: 35,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      categoria: "RPG",
      desenvolvedor: "FromSoftware",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-uppercase text-white mb-4">Outros Jogos</h2>
      <div className="d-flex flex-column gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default OutrosJogos;
