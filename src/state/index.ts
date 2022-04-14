import { createAction, createReducer } from '@reduxjs/toolkit';
import { Profile } from './interface';

const initialtState = {
  profile: {
    username: '',
    picture: '',
    description: '',
  },
};

//action creators
export const setProfile = createAction<Profile | undefined>('SET_Name');

//reducer
export const profileReducer = createReducer(
  initialtState,
  {
    [setProfile.type]: (state, action) => {
      state.profile = action.payload;
    },
  },
  [],
  (state) => state
);
