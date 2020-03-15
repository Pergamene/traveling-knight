import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Square from './Square';
import { findPossibleMoves } from '../utils/utility-knight';

const useStyles = makeStyles({
  root: {
    maxWidth: '800px',
    maxHeight: '800px',
    height: '100%',
    width: '100%',
    margin: '50px auto 0',
    display: 'flex',
    flexWrap: 'wrap',
    border: '3px solid #000',
  },
});

const Board = () => {
  const emptyPossibles: number[][] = [];
  const classes = useStyles();
  const [location, setLocation] = useState([-1, -1]);
  const [possibles, setPossibles] = useState(emptyPossibles);
  const [moves, setMoves] = useState(0);

  const incrementMoves = () => {
    setMoves(moves + 1);
  }

  const changeLocation = (newLocation: number[]) => {
    setLocation(newLocation);
    setPossibles(findPossibleMoves(newLocation));
  }

  const arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={classes.root}>
      {arr.map((row: number) => {
        return arr.map((column: number) => {
          return <Square 
            row={row} 
            column={column} 
            possibles={possibles} 
            changeLocation={changeLocation} 
            moves={moves}
            incrementMoves={incrementMoves}
            key={`${row}${column}`} 
          />;
        })
      })}
    </div>
  );
}

export default Board;
