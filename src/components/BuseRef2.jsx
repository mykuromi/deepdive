import { useEffect, useRef, useState } from "react";

export const BuseRef2 = () => {
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]); // value가 변경되면 그 값을 ref에 넣어둠
    return ref.current;
  }

  function SomeComponent() {
    const [counter, setCounter] = useState(0);
    const previousCounter = usePrevious(counter);

    function handleClick() {
      setCounter((prev) => prev + 1);
    }

    // 0 (undefined)
    // 1, 0
    // 2, 1
    // 3, 2
    return (
      <button onClick={handleClick}>
        counter: {counter} / previousCounter : {previousCounter}
      </button>
    );
  }

  return <SomeComponent />;
};
