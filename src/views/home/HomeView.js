import React from 'react';
import { PrimaryButton } from '../../components/buttons';
import { PrimaryInput } from '../../components/inputs';
import * as Icon from 'react-feather';
import './home.scss';

const HomeView = ({ name, onClickContinue, onChangeName }) => {
  return (
    <div className="home-main-container">
      <h3 className="home-title">Hello friend, tell me your name...</h3>
      <PrimaryInput placeholder="Your name here" value={name} onChange={onChangeName} />
      <PrimaryButton
        text="Let's go"
        icon={Icon.ArrowRight}
        onClick={onClickContinue}
        disabled={name === ''}
      />
    </div>
  );
};

export default HomeView;
