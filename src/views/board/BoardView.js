import React, { useState } from 'react';
import './board.scss';
import { EmptyCard, FilledCard, UsedCard, PlacedCard } from '../../components/cards';
import ZOOVU_O from '../../assets/zoovu-o.svg';
import ZOOVU_U from '../../assets/zoovu-u.svg';
import ZOOVU_V from '../../assets/zoovu-v.svg';
import ZOOVU_Z from '../../assets/zoovu-z.svg';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const BoardView = () => {
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
    console.log(item);
    const filledArr = [...paintFilled];
    const emptyArr = [...paintEmpty];
    const card = filledArr.filter((card_) => card_.id === item.name)[0];
    const dragIndex = filledArr.indexOf(card);
    if (item.type === 'card') {
      handleVerticalDrop(emptyArr, filledArr, index, dragIndex);
    } else {
      handleHorizontalDrop(emptyArr, index, dragIndex);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board-main-container">
        <div className="board-cards-container">
          {paintFilled.map((card) =>
            card.isEmpty ? (
              <UsedCard key={card.id} />
            ) : (
              <FilledCard key={card.id} image={card.img} id={card.id} />
            )
          )}
        </div>
        <div className="board-cards-container">
          {paintEmpty.map((card, index) =>
            card.isEmpty ? (
              <EmptyCard
                key={index}
                image={card.img}
                onDrop={(item) => handleDrop(item, index)}
                item={card.img}
              />
            ) : (
              <PlacedCard key={card.id} image={card.img} id={card.id} />
            )
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default BoardView;
