import React from 'react';
import './inputs.scss';

const PrimaryInput = ({ onChange, placeholder, value }) => {
  return (
    <input className="primary-input" onChange={onChange} placeholder={placeholder} value={value} />
  );
};

export { PrimaryInput };
