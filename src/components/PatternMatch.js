// import React, { useState, useEffect } from 'react';
// import '../styled-components/PatternMatch.css';

// const generatePattern = () => {
//   const pattern = [];
//   for (let i = 0; i < 16; i++) {
//     pattern.push(Math.floor(Math.random() * 4));
//   }
//   return pattern;
// };

// const shuffleTiles = (tiles) => {
//   const shuffled = [...tiles];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const PatternMatch = () => {
//   const [pattern, setPattern] = useState(generatePattern());
//   const [tiles, setTiles] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(0); // Timer starts when a tile is clicked
//   const [isSolved, setIsSolved] = useState(false);
//   const [isTimeUp, setIsTimeUp] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false); // Track if game has started

//   useEffect(() => {
//     let shuffledTiles;
//     do {
//       shuffledTiles = shuffleTiles([...pattern]);
//     } while (JSON.stringify(shuffledTiles) === JSON.stringify(pattern));
//     setTiles(shuffledTiles);
//   }, [pattern]);

//   const startTimer = () => {
//     if (!gameStarted) {
//       setGameStarted(true);
//       setTimeLeft(45);
//     }
//   };

//   useEffect(() => {
//     let timer;
//     if (gameStarted && !isSolved && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (timeLeft === 0) {
//       setIsTimeUp(true);
//     }
//     return () => clearInterval(timer);
//   }, [gameStarted, isSolved, timeLeft]);

//   useEffect(() => {
//     if (tiles.length > 0 && tiles.every((tile, i) => tile === pattern[i])) {
//       setIsSolved(true);
//       setTimeLeft(0);
//     }
//   }, [tiles, pattern]);

//   const handleTileClick = (index) => {
//     if (isSolved || isTimeUp) return;

//     const newTiles = [...tiles];
//     newTiles[index] = (newTiles[index] + 1) % 4;
//     setTiles(newTiles);

//     startTimer(); // Start timer on first tile click
//   };

//   const handleReset = () => {
//     setPattern(generatePattern());
//     setTiles([]);
//     setIsSolved(false);
//     setIsTimeUp(false);
//     setGameStarted(false); // Reset game started state
//   };

//   return (
//     <div className="pm-pattern-match">
//       <div className="pm-grid-container">
//         <div className="pm-pattern">
//           <h3>Match this Pattern</h3>
//           <div className="pm-grid">
//             {pattern.map((tile, index) => (
//               <div
//                 key={index}
//                 className={`pm-tile pm-color-${tile}`}
//               ></div>
//             ))}
//           </div>
//         </div>
//         <div className="pm-tiles">
//           <h3>Your Tiles</h3>
//           <div className="pm-grid">
//             {tiles.map((tile, index) => (
//               <div
//                 key={index}
//                 className={`pm-tile pm-color-${tile}`}
//                 onClick={() => handleTileClick(index)}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="pm-status">
//         {!gameStarted && <p>Click on any of your tiles to start the game.</p>}
//         {gameStarted && !isSolved && !isTimeUp && (
//           <p>Time left: {timeLeft}s</p>
//         )}
//         {isSolved && (
//           <p className="pm-message">Congratulations! You matched the pattern!</p>
//         )}
//         {isTimeUp && !isSolved && (
//           <p className="pm-message">Time is up! Try again!</p>
//         )}
//         {(isSolved || isTimeUp) && (
//           <button className="PlayAgain" onClick={handleReset}>Play Again</button>
//         )}
//         {!isSolved && !isTimeUp && gameStarted && <p className="pm-hint">Click the tiles to change their colors.</p>}
//       </div>
//     </div>
//   );
// };

// export default PatternMatch;
