import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import storage from "./localStorageAPI";

import "./assets/main.scss";

window.onunload = () => {
  storage.putNotes(store.getState().noteList);
};
storage.clear();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
