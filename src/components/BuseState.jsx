export const BuseState = () => {
  const global = {};
  let index = 0;

  function customUseState(initialState) {
    // state 초기화
    if (!global.states) {
      global.states = [];
    }

    // state 현재 값 조회 및 초기화
    const currentState = () => global.states[index] || initialState;
    global.states[index] = currentState;

    // 즉시 실행 함수
    const setState = (function () {
      let currentIndex = index;
      return function (value) {
        global.states[currentIndex] = value;
        // 렌더링 코드 -
        console.log("rendering " + index);
      };
    })();

    index += 1;

    return [currentState, setState];
  }

  function Component() {
    const [counter, setCounter] = customUseState(0);

    const handleClick = (event) => {
      setCounter(counter + 1);
    };

    return (
      <div id="BuseState">
        <button onClick={handleClick}>button +</button>
        <p>state : {counter}</p>
      </div>
    );
  }
  return Component();
};
