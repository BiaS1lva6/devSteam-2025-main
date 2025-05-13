import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";


const OutrosJogos = (props) => {
    const [aleatorio, setAleatorio] = useState([]);
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
       {
         id: 4,
         titulo: "Red Dead Redemption 2",
         preco: 199.9,
         desconto: 40,
         imagem:
           "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
         descricao:
           "Viva o Velho Oeste como Arthur Morgan em uma jornada cinematográfica com detalhes incríveis e mundo vivo.",
         categoria: "Ação e Aventura",
         nota: 4.7,
         desenvolvedor: "Rockstar Games",
         lancamento: "2018-10-26",
         plataforma: ["PC", "PS4", "Xbox One"],
       },
       {
         id: 5,
         titulo: "Hogwarts Legacy",
         preco: 229.99,
         desconto: 10,
         imagem:
           "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
         descricao:
           "Mergulhe no mundo bruxo de Hogwarts no século XIX. Crie seu próprio bruxo e descubra segredos mágicos.",
         categoria: "RPG de Ação",
         nota: 4.6,
         desenvolvedor: "Portkey Games",
         lancamento: "2023-02-10",
         plataforma: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X|S"],
       },
       {
         id: 6,
         titulo: "The Witcher 3: Wild Hunt",
         preco: 89.99,
         desconto: 60,
         imagem:
           "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
         descricao:
           "Acompanhe Geralt de Rívia em sua busca épica por Ciri. Combate envolvente, escolhas impactantes e um dos melhores RPGs já feitos.",
         categoria: "RPG",
         nota: 4.9,
         desenvolvedor: "CD Projekt Red",
         lancamento: "2015-05-18",
         plataforma: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
       },
       {
         id: 7,
         titulo: "God of War",
         preco: 159.99,
         desconto: 25,
         imagem:
           "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
         descricao:
           "Kratos retorna em uma jornada emocional com seu filho Atreus. Uma releitura nórdica da lenda do Deus da Guerra.",
         categoria: "Ação e Aventura",
         nota: 4.8,
         desenvolvedor: "Santa Monica Studio",
         lancamento: "2018-04-20",
         plataforma: ["PC", "PS4", "PS5"],
       },
       {
         id: 8,
         titulo: "FIFA 24",
         preco: 299.9,
         desconto: 15,
         imagem:
           "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
         descricao:
           "O mais recente simulador de futebol da EA Sports, com gráficos realistas e modo carreira renovado.",
         categoria: "Esportes",
         nota: 4.2,
         desenvolvedor: "EA Sports",
         lancamento: "2023-09-29",
         plataforma: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X|S"],
       },
     ],
     []
   );

   useEffect(() => {
       const aleatorioJogos = games
         .filter((jogo) => jogo.desconto > 0)
         .sort(() => Math.random() - 0.5) // Ordenação aleatória
         .slice(0, 3);
   
       setAleatorio(aleatorioJogos);
     }, [games]);
   

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
        {aleatorio.map((jogo) => (
          <GameCard
            key={jogo.id}
            game={jogo}
            selectedGame={selectedGame?.id === jogo.id} // Verifica se o jogo está selecionado
            click={closeMobileGame}
            titulo={jogo.titulo}
            preco={jogo.preco}
            imagem={jogo.imagem}
            onCardClick={() => handleCardClick(jogo)} // Passa a função de clique
            onAddCarrinho={() => props.onAddCarrinho(jogo)} // Passa a função de adicionar ao carrinho
          />
        ))}
      </div>
    </div>
    
    
  );
};

export default OutrosJogos;