import { useCallback, useMemo, useReducer, useState } from "react";

// useReducer가 사용할 state를 정의
type State = {
  count: number;
};

// state 변화를 발생시킬 action의 타입과 넘겨줄 값(payload)를 정의
// 꼭 type과 payload라는 네이밍을 지킬 필요도 없으며, 굳이 객체일 필요도 없다.
// 다만 이러한 네이밍이 가장 널리 쓰인다.
type Action = { type: "up" | "down" | "reset"; payload?: State };

// 무거운 연산이 포함된 게으른 초기화 함수
function countInit(count: State): State {
  // count: State를 받아서 초기값을 어떻게 정의할지 연산하면 된다.
  return count;
}

// 초기값
const initialState: State = { count: 0 };

// 앞서 선언한 state와 action을 기반으로 state가 어떻게 변경될 지 정의
function countReducer(state: State, action: Action): State {
  switch (action.type) {
    case "up":
      return { count: state.count + 1 };
    case "down":
      return { count: state.count - 1 > 0 ? state.count - 1 : 0 };
    case "reset":
      return countInit(action.payload || { count: 0 });
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
}

export const BuseReducer = () => {
  const [state, dispatcher] = useReducer(countReducer, initialState, init);

  function handleUpButtonClick() {
    dispatcher({ type: "up" });
  }

  function handleDownButtonClick() {
    dispatcher({ type: "down" });
  }

  function handleResetButtonClick() {
    dispatcher({ type: "reset", payload: { count: 1 } });
  }

  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={handleUpButtonClick}> + </button>
      <button onClick={handleDownButtonClick}> - </button>
      <button onClick={handleResetButtonClick}> reset </button>
    </div>
  );
};

// Preact code ------------------------------------------------------------

// 1. useState를 useReducer로 구현
function reducer(prevState, newState) {
  return typeof newState === "function" ? newState(prevState) : newState;
}

function init(initialArg /* : Initializer */) {
  return typeof initialArg === "function" ? initialArg() : initialArg;
}

function useState_(initialArg) {
  return useReducer(reducer, initialArg, init);
}

// 2. useReudcer를 useState로 구현
const useReducer_ = (reducer, initialArg, init) => {
  const [state, setState] = useState(
    // 초기화 함수가 있으면 초깃값과 초기화 함수를 실행하고, 그렇지 않으면 초기값을 넣는다
    init ? () => init(initialArg) : initialArg
  );

  // 값을 update하는 dispatch를 넣어준다
  const dispatch = useCallback(
    (action) => setState((prev) => reducer(prev, action)),
    [reducer]
  );

  // 이 값을 메모이제이션한다.
  return useMemo(() => [state, dispatch], [state, dispatch]);
};
