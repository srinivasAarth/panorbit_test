import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./settings/settings.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // store provider
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        {/* configured the Mui breakpoints with the help of theme provider */}
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);
