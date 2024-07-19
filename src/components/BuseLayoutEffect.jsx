import { useEffect, useLayoutEffect, useState } from "react";

export const BuseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffetct : ", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect : ", count);
  }, [count]);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      count : {count} &nbsp;
      <button onClick={handleClick}> + </button>
      <br />
      React DOM update - useLayoutEffect - browser update - useEffect
    </div>
  );
};
