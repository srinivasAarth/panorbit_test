import { configureStore } from "@reduxjs/toolkit";
import { accountsReducer } from "../slice/accountsSlice";

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
