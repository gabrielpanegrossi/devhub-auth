import { createAction, createReducer } from '@reduxjs/toolkit';

const initialtState = {
  name: '',
};

//action creators
export const setName = createAction<string | undefined>('SET_Name');

//reducer
export const profileReducer = createReducer(
  initialtState,
  {
    [setName.type]: (state, action) => {
      state.name = action.payload;
    },
  },
  [],
  (state) => state
);
