import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCards: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    selectCard: (state, action) => {
      state.selectedCards.push(action.payload.id);
    },
    deselectCard: (state, action) => {
      state.selectedCards.splice(
        state.selectedCards.findIndex((el) => el === action.payload.id),
        1
      );
    },
  },
});

// export actions
export const { selectCard, deselectCard } = cardSlice.actions;

// export slice
export default cardSlice.reducer;

// The function below is called a selector and allows us to select a value from
// the state.
export const selectCards = (state) => state.card.selectedCards;
