import React, { useState } from "react";
import LandingPage from "./LandingPage";
 import PlayerInput from "./playerinput";
 import { useLocation } from "react-router-dom";
 import   { useRef } from "react";
const Grid = () => {
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ] );
  const location = useLocation();
  const { player1, player2 } = location.state || { player1: "", player2: "" }; 
  const divRef = useRef(null);

  const [turn, setTurn] = useState(1); // 1 for "O", 2 for "X"

  const updateCell = (row, col) => {
    if (grid[row][col] !== "") return; // Prevent overwriting cells
    if (divRef.current && divRef.current.textContent.trim() === ""){
    const newGrid = grid.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? (turn % 2 === 0 ? "X" : "O") : c))
    );

    setGrid(newGrid);
    setTurn(turn + 1); // Toggle turn
  }};

  return (
    <div>
         
      <h2 style={{display:"flex",justifyContent:"center"}}>🎮 Tic-Tac-Toe Game</h2>
       <div style={{ display: " flex", justifyContent:"center",marginTop:"50px" }}><p  style={{marginRight:"230px"}}>Player 1: {player1}</p>
       <p>Player 2: {player2}</p> </div>

       <div style={{display:"flex",justifyContent:"center"}}>{turn % 2 !== 0 ? `${player1}'s TURN` : `${player2}'s TURN`}</div>

      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" , justifyContent: "center", }}>
          {row.map((cell, colIndex) => (
            <button
              key={colIndex}
              style={{
                width: "150px",
                height:"150px",
                fontSize: "20px",
                margin: "2px",
              }}
              onClick={() => updateCell(rowIndex, colIndex)}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}

      <div ref={divRef} className="targetDiv" style={{display:"flex",justifyContent:"center"}}>
        {(
          (grid[0][0] === "O" && grid[0][1] === "O" && grid[0][2] === "O") ||
          (grid[1][0] === "O" && grid[1][1] === "O" && grid[1][2] === "O") ||
          (grid[2][0] === "O" && grid[2][1] === "O" && grid[2][2] === "O") ||
          (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O") ||
          (grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") ||
          (grid[0][0] === "O" && grid[1][0] === "O" && grid[2][0] === "O") ||
          (grid[0][1] === "O" && grid[1][1] === "O" && grid[2][1] === "O") ||
          (grid[0][2] === "O" && grid[1][2] === "O" && grid[2][2] === "O")
        ) ?  `${player1} WON  `: ""}
        {(
          (grid[0][0] === "X" && grid[0][1] === "X" && grid[0][2] === "X") ||
          (grid[1][0] === "X" && grid[1][1] === "X" && grid[1][2] === "X") ||
          (grid[2][0] === "X" && grid[2][1] === "X" && grid[2][2] === "X") ||
          (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") ||
          (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") ||
          (grid[0][0] === "X" && grid[1][0] === "X" && grid[2][0] === "X") ||
          (grid[0][1] === "X" && grid[1][1] === "X" && grid[2][1] === "X") ||
          (grid[0][2] === "X" && grid[1][2] === "X" && grid[2][2] === "X")
        ) ?  `${player2} WON `: "" }
      </div>
    
    </div>
  );
};

export default Grid;
  