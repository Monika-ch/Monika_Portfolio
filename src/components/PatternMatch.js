import React, { useState, useEffect } from 'react';
import '../styled-components/PatternMatch.css';

const generatePattern = () => {
  let pattern = [];
  for (let i = 0; i < 16; i++) {
    pattern.push(Math.floor(Math.random() * 4));
  }
  return pattern;
};

const shuffleTiles = (tiles) => {
  const shuffled = [...tiles];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PatternMatch = () => {
  const [pattern, setPattern] = useState(generatePattern());
  const [tiles, setTiles] = useState([...pattern]);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isSolved, setIsSolved] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started
  const [showHint, setShowHint] = useState(true); // Track if the hint should be shown
  const [animateTiles, setAnimateTiles] = useState(false); // Track if tiles should animate

  useEffect(() => {
    let shuffledTiles;
    do {
      shuffledTiles = shuffleTiles([...pattern]);
    } while (JSON.stringify(shuffledTiles) === JSON.stringify(pattern));
    setTiles(shuffledTiles);
  }, [pattern]);


  // Timer logic
  useEffect(() => {
    let timer;
    if (gameStarted && timeLeft > 0 && !isSolved) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft, isSolved]);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameStarted(false);
      setShowHint(true);
      setIsTimeUp(true)
    }
  }, [timeLeft]);

  useEffect(() => {
    if (gameStarted && tiles.every((tile, i) => tile === pattern[i])) {
      setIsSolved(true);
      setGameStarted(false);
      setShowHint(true);
    }
  }, [tiles, pattern]);

  const handleTileClick = (index) => {
    if (isTimeUp || isSolved) return; // Prevent tile clicks after time is up or game is solved
    if (!gameStarted) {
      setGameStarted(true);
    }
    const newTiles = [...tiles];
    newTiles[index] = (newTiles[index] + 1) % 4;
    setTiles(newTiles);
    setShowHint(false);
  };

  // const handleReset = () => {
  //   setPattern(generatePattern());
  //   setTiles([]);
  //   setIsSolved(false);
  //   setIsTimeUp(false);
  //   setTimeLeft(45);
  //   setGameStarted(false); // Reset game started state
  // };

  const handleReset = () => {
    setAnimateTiles(true);
    setTimeout(() => {
      setPattern(generatePattern());
      setTiles([]);
      setIsSolved(false);
      setIsTimeUp(false);
      setTimeLeft(45);
      // setShowHint(true);
      setGameStarted(false);
      setAnimateTiles(false);
    }, 500); // Duration of the animation
  };

  return (
    // <div className="pattern-match green-border-box">
    <div className="pattern-match green-border-box">
      <div className="pm-grid-container">
        <div className="pm-pattern">
          <h3>Match this Pattern</h3>
          {/* <div className="pm-grid">
            {pattern.map((tile, index) => (
              <div key={index} className={`pm-tile pm-color-${tile}`}></div>
            ))}
          </div> */}
          <div className="pm-grid">
            {pattern.map((tile, index) => (
              <div key={index} className={`pm-tile pm-color-${tile} ${animateTiles ? 'pm-animate' : ''}`} onClick={() => handleTileClick(index)}></div>
            ))}
          </div>
        </div>
        <div className="pm-tiles">
          <h3>Your Tiles</h3>
          {/* <div className="pm-grid">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className={`pm-tile pm-color-${tile}`}
                onClick={() => handleTileClick(index)}
              ></div>
            ))}
          </div> */}
          <div className="pm-grid">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className={`pm-tile pm-color-${tile} ${animateTiles ? 'pm-animate' : ''}`} onClick={() => handleTileClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="pm-status">
        {/* <p className='pm-timer'>Time left: <span className='pm-time'>{timeLeft}s</span></p> */}
        {gameStarted && <p className='pm-timer'>Time left: <span className='pm-time'>{timeLeft}s</span></p>}
        {/* <p className="pm-message pm-win-message">Congratulations! You matched the pattern!</p> */}
        {isSolved && <p className="pm-message pm-win-message">Congratulations! You matched the pattern!</p>}
        {/* <p className="pm-message pm-timeup-message">Time is up!</p> */}
        {isTimeUp && !isSolved && (
          <p className="pm-message pm-timeup-message">Time is up!</p>
        )}
        {(isSolved || isTimeUp) && (
          <button className="pm-PlayAgain" onClick={handleReset}>Play Again</button>
        )}
        {/* <button className="pm-PlayAgain" onClick={handleReset}>Play Again</button> */}
      </div>
      {showHint && <p className="pm-hint">Click the tiles to change their colors.</p>}
    </div>
  );
};

export default PatternMatch;
