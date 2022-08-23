// 액션 타입 정의
const SHOW_ALL = "redux-start/filter/SHOW_ALL";
const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// 액션 생성 함수
export function showALL() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}

//초기값
const initialSate = "ALL";

// 리듀서
export default function reducer(previousState = initialSate, action) {
  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  return previousState;
}
