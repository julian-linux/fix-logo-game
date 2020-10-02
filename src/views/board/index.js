import React, { useState } from 'react';
import BoardView from './BoardView';
import ZOOVU_O from '../../assets/zoovu-o.svg';
import ZOOVU_U from '../../assets/zoovu-u.svg';
import ZOOVU_V from '../../assets/zoovu-v.svg';
import ZOOVU_Z from '../../assets/zoovu-z.svg';

const Board = () => {
  const [paintFilled, setPainFilled] = useState([
    { img: ZOOVU_O, id: 'o_1', isEmpty: false },
    { img: ZOOVU_O, id: 'o_2', isEmpty: false },
    { img: ZOOVU_V, id: 'V', isEmpty: false },
    { img: ZOOVU_Z, id: 'Z', isEmpty: false },
    { img: ZOOVU_U, id: 'u', isEmpty: false },
  ]);

  const [paintEmpty, setPaintEmpty] = useState([
    { img: null, id: null, isEmpty: true },
    { img: null, id: null, isEmpty: true },
    { img: null, id: null, isEmpty: true },
    { img: null, id: null, isEmpty: true },
    { img: null, id: null, isEmpty: true },
  ]);

  const [dragging, setDragging] = useState(null);

  const handleVerticalDrop = (emptyArr, filledArr, dropIndex, dragIndex) => {
    emptyArr.splice(dropIndex, 1, filledArr[dragIndex]);
    filledArr.splice(dragIndex, 1, { ...filledArr[dragIndex], isEmpty: true });
    setPainFilled([...filledArr]);
    setPaintEmpty([...emptyArr]);
  };

  const handleHorizontalDrop = (emptyArr, index, dragIndex) => {
    const dropped = emptyArr[index];
    const dragged = emptyArr[dragIndex];
    emptyArr.splice(index, 1, { ...dragged });
    emptyArr.splice(dragIndex, 1, { ...dropped });
    setPaintEmpty([...emptyArr]);
  };

  const handleDrop = (item, index) => {
    const filledArr = [...paintFilled];
    const emptyArr = [...paintEmpty];
    let card;
    let dragIndex;
    if (item.type === 'card') {
      card = filledArr.filter((card_) => card_.id === item.name)[0];
      dragIndex = filledArr.indexOf(card);
      handleVerticalDrop(emptyArr, filledArr, index, dragIndex);
    } else {
      card = emptyArr.filter((card_) => card_.id === item.name)[0];
      dragIndex = emptyArr.indexOf(card);
      handleHorizontalDrop(emptyArr, index, dragIndex);
    }
  };

  const onDrag = (item, isOver) => {
    const emptyArr = [...paintEmpty];
    const card = emptyArr.filter((card_) => card_.id === item.name)[0];
    const dragIndex = emptyArr.indexOf(card);
    setDragging(dragIndex);
    console.log(isOver);
  };

  const handleDropPlaced = (item, index) => {
    const emptyArr = [...paintEmpty];
    const card = emptyArr.filter((card_) => card_.id === item.name)[0];
    const dragIndex = emptyArr.indexOf(card);
    handleHorizontalDrop(emptyArr, index, dragIndex);
  };

  const endDrop = () => setDragging(null);

  return (
    <BoardView
      handleDrop={handleDrop}
      onDrag={onDrag}
      handleDropPlaced={handleDropPlaced}
      endDrop={endDrop}
      dragging={dragging}
      paintFilled={paintFilled}
      paintEmpty={paintEmpty}
    />
  );
};

export default Board;
