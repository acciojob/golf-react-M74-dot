import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming CSS is in a separate file

const App = () => {
  const [showBall, setShowBall] = useState(false); // Track if the ball is rendered
  const [leftPosition, setLeftPosition] = useState(0); // Track the ball's horizontal position

  // Function to start the game and show the ball
  const startGame = () => {
    setShowBall(true);
  };

  // Function to handle key press and move the ball
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      setLeftPosition((prevPosition) => prevPosition + 5); // Move ball 5px to the right
    }
  };

  // Set up the event listener for keydown when the component mounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array ensures it only runs once (on mount and unmount)

  return (
    <div className="game-area">
      {!showBall ? (
        <button className="start" onClick={startGame}>
          Start
        </button>
      ) : (
        <div
          className="ball"
          style={{ left: `${leftPosition}px`, position: 'absolute' }}
        ></div>
      )}
    </div>
  );
};

export default App;
