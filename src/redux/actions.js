import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// { type: ADD_TODO, text: 'something'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showALL() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}

//users

//깃허브 api 호출 시작
export const GET_USERS_START = "GET_USERS_START";
//깃허브 api 호출 정상 응답
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
//깃허브 api 호출 실패
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}
