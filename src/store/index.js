import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

export const configureStore = () => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware());
  const store = createStore(rootReducer(), {}, enhancer);
  return { store };
};
