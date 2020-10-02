import React from 'react';
import './board.scss';
import { EmptyCard, FilledCard, UsedCard, PlacedCard } from '../../components/cards';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const BoardView = ({
  paintFilled,
  paintEmpty,
  handleDrop,
  onDrag,
  dragging,
  handleDropPlaced,
  endDrop,
}) => {
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
              <PlacedCard
                key={card.id}
                image={card.img}
                id={card.id}
                onDrag={onDrag}
                isDroppable={dragging ? dragging !== index : false}
                onDrop={(item) => handleDropPlaced(item, index)}
                endDrop={endDrop}
              />
            )
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default BoardView;
