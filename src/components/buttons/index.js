import React from 'react';
import './buttons.scss';

const PrimaryButton = ({ onClick, text, icon: IconButton, disabled }) => {
  return (
    <button onClick={onClick} className="primary-button" disabled={disabled}>
      <div className="primary-button-text">{text}</div>
      <IconButton color={disabled ? '#C0C0C0' : 'rgb(75,0,130)'} size={15} />
    </button>
  );
};

export { PrimaryButton };
