import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    height: '100px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Rubik Mono One", sans-serif',
    fontSize: '80px',
  },
  black: {
    backgroundColor: '#000',
  },
  white: {
    backgroundColor: '#fff',
  },
  possible: {
    border: '10px solid #76ff03',
  },
  x: {
    color: '#f00',
    display: 'none',
  },
  k: {
    color: '#757575',
    display: 'none',
  },
  show: {
    display: 'block',
  }
});

interface SquareProps {
  row: number;
  column: number;
  possibles: number[][];
  changeLocation: CallableFunction;
  moves: number;
  incrementMoves: CallableFunction;
}

const Square = (props: SquareProps) => {
  const classes = useStyles();
  const [clickNumber, setClickNumber] = useState(-2);
  const {row, column, possibles, changeLocation, moves, incrementMoves} = props;
  
  const handleClick = (): void => {
    if (possible) {
      setClickNumber(moves);
      incrementMoves();
      changeLocation({row: row, column: column});
    }
  }
  
  const isWhite = (): boolean => {
    return ((row % 2 === 0) && (column % 2 === 0)) || ((row % 2 === 1) && (column % 2 === 1));
  }
  
  const isPossible = (): boolean => {
    if (moves === 0) {
      return true;
    }
    if (clickNumber >= 0) {
      return false;
    }
    let possible: boolean = false;
    possibles.map((pair: number[]) => {
      return possible = possible || (pair[0] === row && pair[1] === column);
    });
    return possible;
  }
  
  const possible = isPossible();
  
  return (
    <div 
    className={`
      ${classes.root} ${isWhite() ? classes.white : classes.black} 
      ${possible ? classes.possible : ''}
    `}
    onClick={handleClick}>
      <p className={`
        ${classes.k} 
        ${(clickNumber === moves-1) ? classes.show : ''}
      `}>K</p>
      <p className={`
        ${classes.x} 
        ${(clickNumber >= 0 && clickNumber < moves-1) ? classes.show : ''}
      `}>X</p>
    </div>
  );
}

export default Square;
