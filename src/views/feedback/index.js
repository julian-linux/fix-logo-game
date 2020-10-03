import React from 'react';
import './feedback.scss';

const Feedback = ({ name, score, time }) => {
  return (
    <div className="feedback-main-container">
      <div className="feedback-container">
        <div className="feedback-title">
          Congratulations, <span>{name}</span>!
        </div>
        <div className="feedback-subtitle">You won with a score of: {score}</div>
        <div className="feedback-text">
          The game will restart in <span>{time}</span> seconds
        </div>
      </div>
    </div>
  );
};

export default Feedback;
