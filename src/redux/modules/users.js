import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";

// 액션 타입 정의
//깃허브 api 호출 시작
export const GET_USERS_START = "reudx-start/users/GET_USERS_START";
//깃허브 api 호출 정상 응답
export const GET_USERS_SUCCESS = "reudx-start/users/GET_USERS_SUCCESS";
//깃허브 api 호출 실패
export const GET_USERS_FAIL = "reudx-start/users/GET_USERS_FAIL";

// redux-promise-middleware
const GET_USERS = "reudx-start/users/GET_USERS";
export const GET_USERS_PENDING = "reudx-start/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "reudx-start/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "reudx-start/users/GET_USERS_REJECTED";

// 액션 생성 함수
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

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
}

// redux-thunk
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}

// redux-saga
const GET_USERS_SAGA_START = "GET_USERS_SAGA_START";

function* getUsersSaga(action) {
  try {
    yield put(getUsersStart());
    // yield delay(2000);
    const res = yield call(axios.get, "https://api.github.com/users");
    yield put(getUsersSuccess(res.data));
    yield put();
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

export function getUsresSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}

export function* usersSaga() {
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}
