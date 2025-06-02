import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import storyData from "./storyData";
import "./index.css";

function App() {
  const [currentNodeId, setCurrentNodeId] = useState(1);
  const [gameState, setGameState] = useState({});

  const currentNode = storyData.find((n) => n.id === currentNodeId);

  const handleChoice = (choice) => {
    if (choice.setState) {
      setGameState((prev) => ({ ...prev, ...choice.setState }));
    }
    setCurrentNodeId(choice.nextId);
  };

  const availableChoices = currentNode.choices.filter((choice) => {
    return !choice.requiredState || choice.requiredState(gameState);
  });

  return (
    <div className="container">
      <h1>🌲 Forest Escape 🌲</h1>
      <div className="text">
        <Typewriter words={[currentNode.text]} typeSpeed={40} />
      </div>
      <div className="choices">
        {availableChoices.map((choice, index) => (
          <button key={index} onClick={() => handleChoice(choice)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
