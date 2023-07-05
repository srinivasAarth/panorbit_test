import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../../service/service";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: [],
    status: true,
    error: false,
    fetchOnce: true,
  },
  reducers: {
    setAccounts: (state, { payload }) => {
      state.accounts = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setFetchOnce: (state, { payload }) => {
      state.fetchOnce = payload;
    },
  },
});

export const getAccounts = () => async (dispatch, getState) => {
  const initialState = getState().accounts;
  // console.log(initialState);
  try {
    dispatch(setStatus(true));
    const res = await getDetails();
    dispatch(setAccounts(res.data?.users || []));
    dispatch(setStatus(false));
    dispatch(setFetchOnce(false));
  } catch (err) {
    console.log(err);
    dispatch(setStatus(false));
    dispatch(setError(true));
  }
};

export const { setAccounts, setStatus, setError, setFetchOnce } =
  accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;
