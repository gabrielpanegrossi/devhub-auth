import React from 'react';
import Form from './containers/Form';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { profileReducer } from './state';
import Router from './routes';

const store = configureStore({ reducer: profileReducer });

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
