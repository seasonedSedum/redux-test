import { createActions, handleActions } from "redux-actions";

export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: "redux-start/filter",
  }
);

//초기값
const initialSate = "ALL";

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialSate,
  { prefix: "redux-start/filter" }
);

// 리듀서
export default reducer;
