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
  const { status, error } = useSelector((state) => state.accounts);
  React.useEffect(() => {
    dispatch(getAccounts()); // fetch only once at the app level and store in redux
  }, [dispatch]);
  return <LoadAndError content={appContent} status={status} error={error} />; // application level error and load handling component
};

export default App;
