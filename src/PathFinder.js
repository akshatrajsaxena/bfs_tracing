const PathFinder = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1]
    ];
  
    const isValid = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols && grid[x][y] !== 1;
  
    const bfs = (start, end) => {
      const queue = [start];
      const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
      const parent = Array.from({ length: rows }, () => Array(cols).fill(null));
      visited[start[0]][start[1]] = true;
  
      while (queue.length) {
        const [x, y] = queue.shift();
        if (x === end[0] && y === end[1]) {
          let path = [];
          let cur = end;
          while (cur) {
            path.push(cur);
            cur = parent[cur[0]][cur[1]];
          }
          return { solvable: true, path: path.reverse() };
        }
  
        for (const [dx, dy] of directions) {
          const newX = x + dx;
          const newY = y + dy;
          if (isValid(newX, newY) && !visited[newX][newY]) {
            visited[newX][newY] = true;
            parent[newX][newY] = [x, y];
            queue.push([newX, newY]);
          }
        }
      }
      return { solvable: false, path: [] };
    };
  
    return bfs([0, 0], [rows - 1, cols - 1]);
  };
  
  export default PathFinder;
  