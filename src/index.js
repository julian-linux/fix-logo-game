import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from './store';
import { Provider } from 'react-redux';

const { store } = configureStore();

const App_ = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App_ />, document.getElementById('root'));
