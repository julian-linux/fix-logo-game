import React from 'react';
import './cards.scss';
import { useDrag, useDrop } from 'react-dnd';

const EmptyCard = ({ accept = ['card', 'placed-card'], item, onDrop }) => {
  const [, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div ref={drop} className="card-empty">
      <img src={item} />
    </div>
  );
};

const FilledCard = ({ image, id, onMouseDown }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'card', id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div ref={dragRef} style={{ opacity }} className="card-filled" onMouseDown={onMouseDown}>
      <img src={image} />
    </div>
  );
};

const UsedCard = () => {
  return <div className="card-filled" />;
};

const PlacedCard = ({
  image,
  id,
  onDrag,
  isDroppable,
  accept = ['placed-card'],
  onDrop,
  endDrop,
}) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'placed-card', id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end: (res, monitor) => {
      const didDrop = monitor.didDrop();
      endDrop(didDrop, res);
    },
  });
  const [, dropRef] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const dragEvent = () => {
    onDrag(id);
  };
  return (
    <div
      ref={isDroppable ? dropRef : dragRef}
      style={{ opacity }}
      className="card-filled"
      onDrag={dragEvent}
    >
      <img src={image} />
    </div>
  );
};

export { EmptyCard, FilledCard, UsedCard, PlacedCard };
