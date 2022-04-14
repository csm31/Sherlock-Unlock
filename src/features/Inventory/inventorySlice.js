import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import fetchCombinedCard from "../../API/fetchCombinedCard";
import patchCard from "../../API/patchCard";

const initialState = {
  revealedCards: [],
  loading: {
    revealedCards: "idle",
    combinedCard: "idle",
    patchCard: "idle",
  },
};



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
   
  },
  extraReducers:{
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


