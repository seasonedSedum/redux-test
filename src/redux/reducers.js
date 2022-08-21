import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";

const initialSate = { todos: [], filter: "ALL" };

// {} = {todos:[{text: 'study', done: true}], todos:[{text: 'study', done: true}], filter: 'ALL'}
export function todoApp(previousState = initialSate, action) {
  if (action.type === ADD_TODO) {
    return {
      ...previousState,
      todos: [...previousState.todos, { text: action.text, done: false }],
    };
  }

  if (action.type === COMPLETE_TODO) {
    return {
      ...previousState,
      todos: previousState.todos.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      }),
    };
  }

  if (action.type === SHOW_ALL) {
    return {
      ...previousState,
      filter: "ALL",
    };
  }

  if (action.type === SHOW_COMPLETE) {
    return {
      ...previousState,
      filter: "COMPLETE",
    };
  }

  return previousState;
}
