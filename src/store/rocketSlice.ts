import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rocket } from '../types/types';

type RocketState = {
  rockets: Rocket[];
  favorites: Rocket[];
}

const initialState: RocketState = {
  rockets: [],
  favorites: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Rocket[]>) => {
      state.rockets = action.payload;
    },
    addFavourite: (state, action: PayloadAction<Rocket>) => {
      state.favorites.push(action.payload);
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(rocket => rocket.id !== action.payload)
    }
  },
});

export const { actions } = rocketSlice;
export default rocketSlice.reducer;