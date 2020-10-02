import React from 'react';
import Home from './views/home';
import Board from './views/board';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
