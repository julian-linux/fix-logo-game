import React from 'react';
import './cards.scss';
import { useDrag, useDrop } from 'react-dnd';

const EmptyCard = ({ accept = ['card'], item, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  console.log(isOver, canDrop);
  return (
    <div ref={drop} className={`card-${!item ? 'empty' : 'filled'}`}>
      <img src={item} />
    </div>
  );
};

const FilledCard = ({ image, id }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'card', name: id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  return (
    <div ref={dragRef} style={{ opacity }} className="card-filled">
      <img src={image} />
    </div>
  );
};

const UsedCard = () => {
  return <div className="card-filled" />;
};

export { EmptyCard, FilledCard, UsedCard };
