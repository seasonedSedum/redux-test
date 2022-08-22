import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initialSate = "ALL";

// {filter: 'ALL'}
export default function filter(previousState = initialSate, action) {
  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  return previousState;
}
