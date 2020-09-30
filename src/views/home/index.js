import React, { useState } from 'react';
import HomeView from './HomeView.js';

const Home = () => {
  const [name, setName] = useState('');

  const onClickContinue = () => {
    console.log('go to game view');
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return <HomeView name={name} onClickContinue={onClickContinue} onChangeName={onChangeName} />;
};

export default Home;
