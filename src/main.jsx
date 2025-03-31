import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import reduxStore from "./config/redux.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// import { createContext } from "react";

const { persistor, store } = reduxStore();

// export const Context = createContext();


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      {/* <Context.Provider> */}
        
         <App/>
      {/* </Context.Provider> */}
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
