import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LP.css";
import PlayerInput from "./playerinput";

const LandingPage = ({ mode, toggleMode }) => {
  const navigate = useNavigate();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const handleClick = () => {
    if (player1 !== "" && player2 !== "") {
      navigate("/game", { state: { player1, player2 } });
    } else {
      setAlertMessage("Both player names are required!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>  {alertMessage && (
      <div className="alert alert-danger" role="alert">
        {alertMessage}
      </div>
    )}
      <h1>TIC-TAC-TOE</h1>

      <div style={{ marginTop: "35px", marginBottom: "35px" }}>
        <p style={{ marginBottom: "35px" }}>ENTER NAME</p>
        <PlayerInput
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
        />
        <p style={{ marginTop: "35px" }}>PRESS START TO PLAY</p>
      </div>

      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        START
      </button>

     
    </div>
  );
};

export default LandingPage;
