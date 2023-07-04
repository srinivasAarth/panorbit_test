import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: [],
    status: false,
    error: false,
  },
  reducers: {
    setAccounts: (state, { payload }) => (state.accounts = payload),
    setStatus: (state, { payload }) => (state.status = payload),
    setError: (state, { payload }) => (state.error = payload),
  },
});

export const { setAccounts, setStatus, setError } = accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;
