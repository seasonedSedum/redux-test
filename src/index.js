import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { addTodo, completeTodo, showComplete } from "./redux/actions";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("study"));
store.dispatch(addTodo("read book"));
store.dispatch(completeTodo(1));
store.dispatch(showComplete());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
