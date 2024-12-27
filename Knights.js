// Function to calculate knight moves
function knightMoves(start, end) {
  // Define the possible moves a knight can make
  const moves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  // Helper function to check if a position is on the board
  function isOnBoard([x, y]) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }

  // Perform BFS to find the shortest path
  const queue = [[start]]; // Queue to store paths
  const visited = new Set(); // Set to track visited positions
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift(); // Get the current path
    const current = path[path.length - 1]; // Get the current position

    // Check if we've reached the target
    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(pos => console.log(pos));
      return path;
    }

    // Explore all possible moves from the current position
    for (const [dx, dy] of moves) {
      const nextPos = [current[0] + dx, current[1] + dy];

      if (isOnBoard(nextPos) && !visited.has(nextPos.toString())) {
        visited.add(nextPos.toString());
        queue.push([...path, nextPos]);
      }
    }
  }

  // Return an empty array if no path is found (shouldn't happen on a chessboard)
  return [];
}

// Example usage
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);