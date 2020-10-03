import React from 'react';
import HomeView from './HomeView.js';
import { useHistory } from 'react-router-dom';

const Home = ({ actionSetUser, name }) => {
  const history = useHistory();

  const onClickContinue = () => {
    history.push('/board');
  };

  const onChangeName = (e) => {
    actionSetUser(e.target.value);
  };

  return <HomeView name={name} onClickContinue={onClickContinue} onChangeName={onChangeName} />;
};

export default Home;
