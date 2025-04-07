import React from "react";

const PlayerInput = ({ player1, setPlayer1, player2, setPlayer2 }) => {
  return (
    <div>
      Player1: 
      <input
        style={{ width: "90px" }}
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        placeholder="Enter Player 1 Name"
      />
      <br />
      Player2: 
      <input
        style={{ width: "90px" }}
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        placeholder="Enter Player 2 Name"
      />
    </div>
  );
};

export default PlayerInput;