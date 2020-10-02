import React, { useState } from 'react';
import './board.scss';
import { EmptyCard, FilledCard, UsedCard } from '../../components/cards';
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

  const handleDrop = (item, index) => {
    const filledArr = [...paintFilled];
    const emptyArr = [...paintEmpty];
    const cardMoved = filledArr.filter((card) => card.id === item.name)[0];
    const cardMovedIndex = filledArr.indexOf(cardMoved);
    emptyArr.splice(index, 1, { ...filledArr[cardMovedIndex] });
    filledArr.splice(cardMovedIndex, 1, { ...filledArr[cardMovedIndex], isEmpty: true });
    setPainFilled([...filledArr]);
    setPaintEmpty([...emptyArr]);
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
          {paintEmpty.map((card, index) => (
            <EmptyCard
              key={index}
              image={card.img}
              onDrop={(item) => handleDrop(item, index)}
              item={card.img}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default BoardView;
