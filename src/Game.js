import React, { useState, useEffect } from 'react';
import PathFinder from './PathFinder';
import './Grid.css';

const Game = () => {
  const [grid, setGrid] = useState([]);
  const [path, setPath] = useState([]);
  const [solvable, setSolvable] = useState(false);

  useEffect(() => {
    const newGrid = generateRandomGrid();
    setGrid(newGrid);
    const result = PathFinder(newGrid);
    setSolvable(result.solvable);
    setPath(result.path);
  }, []);

  const generateRandomGrid = () => {
    // Implement grid generation logic here
    const grid = [];
    const size = 10;
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(Math.random() > 0.7 ? 1 : 0);
      }
      grid.push(row);
    }
    return grid;
  };

  return (
    <div>
      <h2>{solvable ? 'Path Found' : 'No Path Found'}</h2>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={`cell ${cell === 1 ? 'blocked' : ''} ${path.some(p => p[0] === rowIndex && p[1] === cellIndex) ? 'path' : ''}`}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
