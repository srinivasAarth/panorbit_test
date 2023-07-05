import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: [],
    status: false,
    error: false,
    fetchOnce: true,
  },
  reducers: {
    setAccounts: (state, { payload }) => (state.accounts = payload),
    setStatus: (state, { payload }) => (state.status = payload),
    setError: (state, { payload }) => (state.error = payload),
    setFetchOnce: (state, { payload }) => (state.fetchOnce = payload),
  },
});

export const { setAccounts, setStatus, setError, setFetchOnce } =
  accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;
