import { useEffect, useRef } from "react";

export const BuseRef1 = () => {
  // 카운트 증가 X
  function RefComponent1() {
    const count = useRef(0);
    function handleClick() {
      count.current += 1;
    }
    return <button onClick={handleClick}>count : {count.current}</button>;
  }

  function RefComponent2() {
    const inputRef = useRef();
    // 렌더링 실행 전 -> return undefined
    console.log("inputRef.current : ", inputRef.current);
    useEffect(() => {
      console.log("inputRef.current(useEffect) : ", inputRef.current);
    }, [inputRef]);

    return <input ref={inputRef} type="text" />;
  }

  return (
    <div id="BuseRef">
      <RefComponent1 /> - 카운트 증가 X
      <br />
      <RefComponent2 /> - 렌더링 전 후 inputRef.current (log)
      <br />
    </div>
  );
};
