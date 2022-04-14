import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/Inventory/inventorySlice';
import cardReducer from "../features/Card/cardSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    card: cardReducer,
  },
});
