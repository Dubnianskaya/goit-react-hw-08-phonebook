import React from "react";
import { createRoot } from "react-dom/client";
import {App} from "./components/App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter basename="/goit-react-hw-08-phonebook/">
     <Toaster/>
      <App />
     </BrowserRouter>
     </PersistGate>
    </Provider>
  </React.StrictMode>
);
