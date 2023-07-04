import "./app.css";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  const appContent = useRoutes(routes);
  return appContent;
};

export default App;
