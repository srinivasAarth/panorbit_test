import "./app.css";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "./redux/slice/accountsSlice";
import LoadAndError from "./LoadAndError";

const App = () => {
  const appContent = useRoutes(routes);
  const dispatch = useDispatch();
  const { status, error, fetchOnce } = useSelector((state) => state.accounts);
  React.useEffect(() => {
    if (fetchOnce) {
      dispatch(getAccounts());
    }
  }, [dispatch, fetchOnce]);
  return <LoadAndError content={appContent} status={status} error={error} />;
};

export default App;
