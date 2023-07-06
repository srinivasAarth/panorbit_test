import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../../service/service";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: [],
    status: true,
    error: false,
    fetchOnce: true,
    userId: false,
    open: false,
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
    setUserId: (state, { payload }) => {
      state.userId = payload;
    },
    setOpen: (state, { payload }) => {
      state.open = payload;
    },
  },
});

export const attachUserId = (uid, navigate) => (dispatch) => {
  dispatch(setUserId(uid));
  navigate(`/details/profile/${uid}`);
};

export const getAccounts = () => async (dispatch, getState) => {
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

export const {
  setAccounts,
  setStatus,
  setError,
  setFetchOnce,
  setUserId,
  setOpen,
} = accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;
