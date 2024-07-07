import { useState } from "react";

export const BuseEffect = () => {
  // TODO : 무한 렌더링 되는 이유
  const [state, setState] = useState({
    change: 0,
  });
  const [prevState, setPrevState] = useState({});

  const customUseEffect = (func, depencency) => {
    /* 
      1. dependency 인자가 없을 때
      2. 마운트 (dependency = [])
      3. dependency 배열 값 변할 때
    */
    let change = false;

    if (
      Object.entries(state).toString() === Object.entries(prevState).toString()
    ) {
      change = true;
    }

    if (depencency === undefined) {
      setState({ ...prevState, change: state.change + 1 });
      func();
    } else if (change) {
      let tempObj = {};
      Object.keys(prevState).forEach((key) => {
        depencency.forEach((item) => {
          if (key === item) tempObj.key = state.key;
        });
      });
      setState({ ...prevState, ...tempObj });
      func();
    }

    setPrevState(state);
  };

  const ChildComponent = () => {
    const handleChange = (event) => {
      setState(!state.toggle);
    };

    customUseEffect(() => {
      console.log("hi");
    }, [state.toggle]);

    return (
      <div>
        <h4>customUseEffect</h4>
        <button onClick={handleChange}>toggle</button>
      </div>
    );
  };

  return (
    <div>
      <ChildComponent />
    </div>
  );
};
