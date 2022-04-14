import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchCards from "../../API/fetchCards";
import fetchCombinedCard from "../../API/fetchCombinedCard";
import patchCard from "../../API/patchCard";
import postCards from "../../API/postCards";
import {
  endPointInitial,
} from "../../common/constants";

const initialState = {
  revealedCards: [],
  loading: {
    revealedCards: "idle",
    combinedCard: "idle",
    patchCard: "idle",
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

export const fetchCombinedCardThunk = createAsyncThunk(
  "cards/fetchCombinedCard",
  async (id) => {
    const responseJSON = await fetchCombinedCard(id);
    return responseJSON;
  }
);

export const patchCardThunk = createAsyncThunk(
  "cards/patchCard",
  async (id, body) => {
    const responseJSON = await patchCard(id, body);
    return responseJSON;
  }
);

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    revealCard: (state, action) => {
      state.revealedCards.push(action.payload.number);
    },
  },
  extraReducers: {
    [initializeGame.pending]: (state, action) => {
      state.loading.revealedCards = "loading";
    },
    [initializeGame.fulfilled]: (state, action) => {
      state.loading.revealedCards = "fulfilled";

      action.payload.forEach((card) => {
        card.revealed && state.revealedCards.push(card);
      });
    },
    [initializeGame.rejected]: (state, action) => {
      state.loading.revealedCards = "rejected";
    },
    [fetchCombinedCardThunk.pending]: (state, action) => {
      state.loading.combinedCard = "loading";
    },
    [fetchCombinedCardThunk.fulfilled]: (state, action) => {
      state.loading.combinedCard = "fulfilled";
      state.revealedCards.push(action.payload);
    },
    [fetchCombinedCardThunk.rejected]: (state, action) => {
      state.loading.combinedCard = "rejected";
    },
    [patchCardThunk.pending]: (state, action) => {
      state.loading.patchCard = "loading";
    },
    [patchCardThunk.fulfilled]: (state, action) => {
      state.loading.patchCard = "fulfilled";
      // state.revealedCards.push(action.payload);
    },
    [patchCardThunk.rejected]: (state, action) => {
      state.loading.patchCard = "rejected";
    },
  },
});

// export actions
export const { revealCard } = inventorySlice.actions;

// export slice
export default inventorySlice.reducer;

// The function below is called a selector and allows us to select a value from
// the state.
export const selectRevealedCards = (state) => state.inventory.revealedCards;
