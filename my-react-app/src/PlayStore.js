// PlayStore.js
import React from "react";
import "./PlayStore.css";

const games = [
  {
    id: 1,
    name: "G",
    logo: "https://gabumilford.com/wp-content/uploads/2017/11/cropped-150x150-logo.jpg",
  },
  {
    id: 2,
    name: "Youtube",
    logo: "https://th.bing.com/th/id/R.24833348a9938f17ab444a8670047bac?rik=K7K5A%2fzZSpxJxQ&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "150 years",
    logo: "https://th.bing.com/th/id/OIP.e5x_ojD4upnUxe8EerehYAHaH0?rs=1&pid=ImgDetMain",
  },
];

const PlayStore = () => {
  return (
    <div className="play-store">
      {games.map((game) => (
        <div key={game.id} className="game">
          <img src={game.logo} alt={game.name} />
          <p>{game.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayStore;
