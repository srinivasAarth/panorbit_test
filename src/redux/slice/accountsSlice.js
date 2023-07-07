import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../../service/service";
// redux toolkit reducers and actions with slice configuration
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
  // store the userObject when we navigate to dashboard or profile
  dispatch(setUserId(uid));
  navigate(`/details/profile/${uid}`);
};

export const getAccounts = () => async (dispatch, getState) => {
  // the actual part comes here with async handling in redux for fetching app level data
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
  // export all actions
  setAccounts,
  setStatus,
  setError,
  setFetchOnce,
  setUserId,
  setOpen,
} = accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;
