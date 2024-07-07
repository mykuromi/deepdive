let state = {
  value: undefined,
};

function customUseState(paramState) {
  if (state.value === undefined) {
    state.value = paramState;
  }

  const getter = () => state.value;

  const setter = (paramState) => {
    const prevState = state.value;
    state = { value: paramState };

    const callback = () => {
      if (prevState !== undefined && prevState !== paramState) {
        const element = document.getElementById("CuseState");
        // 리액트 파이버가 찾아가는 로직
        // 하드코딩
        document.getElementById(
          "CuseState"
        ).childNodes[1].childNodes[1].innerHtml = state.value;
        // 리렌더링이 안됨 . . .
      }
    };
    callback();
  };

  return [getter(), setter];
}

export const CuseState = () => {
  const [counter, setCounter] = customUseState(0);

  const handleClick = (event) => {
    setCounter(counter + 1);
  };

  return (
    <div id="CuseState">
      <button onClick={handleClick}>button +</button>
      <p>state : {counter}</p>
    </div>
  );
};
