import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import { Profile, User } from './interface';

const initialtState = {
  userId: 'default.jpeg',
  profile: {
    email: '',
    name: '',
    lastName: '',
    picture: '',
    description: '',
  },
};

//action creators
export const setProfile = createAction<Profile | undefined>('SET_Profile');
export const setUserId = createAction<User | undefined>('SET_UserId');

//reducer
export const profileReducer = createReducer(
  initialtState,
  {
    [setProfile.type]: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    [setUserId.type]: (state, action) => {
      state.userId = action.payload;
    },
  },
  [],
  (state) => state
);

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});
