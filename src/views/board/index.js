import React, { useState, useEffect } from 'react';
import BoardView from './BoardView';
import {
  getDragIndexOfArray,
  shuffle,
  checkCorrectPositionById,
  checkCorrectPatternById,
} from '../../utils';
import { CORRECT_PATTERN, EMPTY_PATTER } from '../../constants';
import Feedback from '../feedback';
import { useHistory } from 'react-router-dom';

const Board = ({ name }) => {
  const [paintFilled, setPainFilled] = useState([]);
  const [paintEmpty, setPaintEmpty] = useState([]);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [restart, setRestart] = useState(10);
  const history = useHistory();

  useEffect(() => {
    restartGame();
    if (!name) {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    if (restart === 0) {
      setCountdown(clearInterval(countdown));
      restartGame();
    }
  }, [restart]);

  const restartGame = () => {
    setPainFilled(shuffle(CORRECT_PATTERN));
    setPaintEmpty(EMPTY_PATTER);
    setCount(0);
    setRestart(10);
  };

  const [dragging, setDragging] = useState(null);

  const onStartCount = () => {
    startInterval();
  };

  const startInterval = () => {
    setTimer(
      setInterval(() => {
        setCount((time) => time + 1);
      }, 1000)
    );
  };

  const startCountDown = () => {
    setCountdown(
      setInterval(() => {
        setRestart((time) => time - 1);
      }, 1000)
    );
  };

  const handleVerticalDrop = (emptyArr, filledArr, dropIndex, dragIndex) => {
    emptyArr.splice(dropIndex, 1, filledArr[dragIndex]);
    filledArr.splice(dragIndex, 1, { ...filledArr[dragIndex], isEmpty: true });
    setPainFilled([...filledArr]);
    setPaintEmpty([...emptyArr]);
    checkPatternById(emptyArr);
  };

  const handleHorizontalDrop = (emptyArr, index, dragIndex) => {
    const dropped = emptyArr[index];
    const dragged = emptyArr[dragIndex];
    emptyArr.splice(index, 1, { ...dragged });
    emptyArr.splice(dragIndex, 1, { ...dropped });
    setPaintEmpty([...emptyArr]);
    checkPatternById(emptyArr);
  };

  const onDrop = (item, index) => {
    const filledArr = [...paintFilled];
    const emptyArr = [...paintEmpty];
    let dragIndex;
    if (item.type === 'card') {
      dragIndex = getDragIndexOfArray(filledArr, item);
      handleVerticalDrop(emptyArr, filledArr, index, dragIndex);
    } else {
      dragIndex = getDragIndexOfArray(emptyArr, item);
      handleHorizontalDrop(emptyArr, index, dragIndex);
    }
    checkCorrectMove(item, index);
  };

  const onDragRearrange = (item) => {
    const emptyArr = [...paintEmpty];
    const dragIndex = getDragIndexOfArray(emptyArr, item);
    setDragging(dragIndex);
  };

  const onDropRearrange = (item, index) => {
    const emptyArr = [...paintEmpty];
    const dragIndex = getDragIndexOfArray(emptyArr, item);
    handleHorizontalDrop(emptyArr, index, dragIndex);
    checkCorrectMove(item, index);
  };

  const endRearrange = () => setDragging(null);

  const checkPatternById = (array) => {
    if (checkCorrectPatternById(array, CORRECT_PATTERN)) {
      setTimer(clearInterval(timer));
      startCountDown();
    }
  };

  const checkCorrectMove = (item, index) => {
    if (!checkCorrectPositionById(item, index, CORRECT_PATTERN)) {
      setCount((time) => time + 10);
    }
  };

  return (
    <>
      <BoardView
        onDrop={onDrop}
        onDragRearrange={onDragRearrange}
        onDropRearrange={onDropRearrange}
        endRearrange={endRearrange}
        dragging={dragging}
        paintFilled={paintFilled}
        paintEmpty={paintEmpty}
        onStartCount={onStartCount}
        count={count}
        name={name}
        restart={restart}
      />
      {restart !== 10 ? <Feedback time={restart} name={name} score={count} /> : null}
    </>
  );
};

export default Board;
