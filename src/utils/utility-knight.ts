export function findPossibleMoves(location: number[]): number[][] {
  const [row, column] = location;
  let move: number[];
  const moves: number[][] = [];
  
  let one: number = 1; 
  let two: number = 2;
  for (let i: number = 1; i <= 4; i++) {
    one *= -1;
    if (i > 2) {
      two = -2;
    }
    move = [row + one, column + two];
    if (_onBoard(move)) {
      moves.push(move);
    }
    move = [row + two, column + one];
    if (_onBoard(move)) {
      moves.push(move);
    }
  }

  return moves;
}

function _onBoard(possibleMove: number[]): boolean {
  const [row, column] = possibleMove;
  if((row >= 0 && row <= 7) && (column >= 0 && column <= 7)) {
    return true;
  }
  return false;
}
