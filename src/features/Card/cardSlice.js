import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchCards from "../../API/fetchCards";

const initialState = {
  availableCards: [],
  selectedCards: [],
  revealedCards: [],
  loading: {
    revealedCards: "idle",
  },
};

export const initializeGame = createAsyncThunk(
  "cards/initializeGame",
  async () => {
    // GET on the database
    const responseJSON = await fetchCards();
    return responseJSON;
  }
);

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
    revealCard: (state, action) => {
      state.revealedCards.push(action.payload);
    },
    hideCards: (state, action) => {
      action.payload.map((element) =>
        state.revealedCards.splice(
          state.revealedCards.findIndex((el) => el === element),
          1
        )
      );
    },
    resetGame: (state)=>{

    }
  },
  extraReducers: {
    [initializeGame.pending]: (state, action) => {
      state.loading.revealedCards = "loading";
    },
    [initializeGame.fulfilled]: (state, action) => {
      state.loading.revealedCards = "fulfilled";
      state.availableCards = action.payload;
      action.payload.forEach((card) => {
        card.revealed && state.revealedCards.push(card.id);
      });
    },
    [initializeGame.rejected]: (state, action) => {
      state.loading.revealedCards = "rejected";
    },
  },
});

// export actions
export const { selectCard, deselectCard, revealCard, hideCards,resetGame } =
  cardSlice.actions;

// export slice
export default cardSlice.reducer;

// The function below is called a selector and allows us to select a value from
// the state.
export const selectCards = (state) => state.card.selectedCards;
export const selectAvailableCards = (state) => state.card.availableCards;
export const selectRevealedCards = (state) => state.card.revealedCards;
