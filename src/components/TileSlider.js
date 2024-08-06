import React, { useState, useEffect } from 'react';
import '../styled-components/TileSlider.css';

const TileSlider = () => {
  const initialTiles = [...Array(15).keys()].map((i) => i + 1).concat(null);

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const [tiles, setTiles] = useState(shuffle([...initialTiles]));

  useEffect(() => {
    setTiles(shuffle([...initialTiles]));
  }, []);

  const handleTileClick = (index) => {
    const emptyIndex = tiles.indexOf(null);
    const newTiles = [...tiles];
    const isAdjacent = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - 4,
      emptyIndex + 4,
    ].includes(index);

    if (isAdjacent) {
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
    }
  };

  const isSolved = tiles.every((tile, i) => tile === initialTiles[i]);

  return (
    <div className="tile-slider">
      <div className="grid">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile ? '' : 'empty'}`}
            onClick={() => handleTileClick(index)}
          >
            {tile}
          </div>
        ))}
      </div>
      {isSolved && <div className="message">Congratulations! You solved the puzzle!</div>}
    </div>
  );
};

export default TileSlider;
