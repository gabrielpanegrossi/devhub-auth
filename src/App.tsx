import React from 'react';
import Form from './containers/Form';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { profileReducer } from './state';

const store = configureStore({ reducer: profileReducer });

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
