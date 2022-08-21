import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { addTodo, completeTodo, showComplete } from "./redux/actions";

// console.log(store);
// console.log(store.getState());
// store.dispatch(addTodo("study"));
// console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(addTodo("study"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));

// unsubscribe();

// store.dispatch(addTodo("study2"));
// store.dispatch(addTodo("read book2"));
// store.dispatch(addTodo("eat2"));

// console.log("---- store.getState() ---", store.getState());

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
