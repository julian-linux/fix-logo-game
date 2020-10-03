import React from 'react';
import './board.scss';
import { EmptyCard, FilledCard, UsedCard, PlacedCard } from '../../components/cards';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import * as Icon from 'react-feather';

const BoardView = ({
  paintFilled,
  paintEmpty,
  onDrop,
  onDragRearrange,
  dragging,
  onDropRearrange,
  endRearrange,
  onStartCount,
  count,
  name,
  restart,
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`board-main-container${restart !== 10 ? '-opacity' : ''}`}>
        <div className="board-spaced-between-content">
          <div className="title">Good luck, {name}!</div>
          <div className="score-container">
            <Icon.Clock color="#13EBA2" />
            <div className="score-text">Your score: {count} seconds</div>
          </div>
        </div>

        <div className="board-spaced-between-content">
          <div className="board-text">Pick up the right cards</div>
          <div className="board-text">The faster the better</div>
        </div>

        <div className="board-cards-container">
          {paintFilled.map((card) =>
            card.isEmpty ? (
              <UsedCard key={card.id} />
            ) : (
              <FilledCard
                key={card.id}
                image={card.img}
                id={card.id}
                onMouseDown={count === 0 ? onStartCount : null}
              />
            )
          )}
        </div>

        <div className="board-spaced-between-content">
          <div className="board-text">...and drop them here to make the logo great again</div>
        </div>

        <div className="board-cards-container">
          {paintEmpty.map((card, index) =>
            card.isEmpty ? (
              <EmptyCard
                key={index}
                image={card.img}
                onDrop={(item) => onDrop(item, index)}
                item={card.img}
              />
            ) : (
              <PlacedCard
                key={card.id}
                image={card.img}
                id={card.id}
                onDrag={onDragRearrange}
                isDroppable={dragging ? dragging !== index : false}
                onDrop={(item) => onDropRearrange(item, index)}
                endDrop={endRearrange}
              />
            )
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default BoardView;
