import React from 'react';
import './error.scss';

const Error = () => {
  return (
    <div className="error-main-container">
      <div className="error-container">
        <div className="error-title">Whoops,</div>
        <div className="error-subtitle">looks like the page you're looking for doesn't exist</div>
      </div>
    </div>
  );
};

export default Error;
