import { useCallback, useMemo, useState } from "react";

export const BuseCallback3 = () => {
  const [counter, setCounter] = useState(0);

  // 두 함수 작동 동일
  const handleClick1 = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const handleClick2 = useMemo(() => {
    return () => setCounter((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h5>{counter}</h5>
      <button onClick={handleClick1}> useCallback + </button>
      <br />
      <button onClick={handleClick2}> useMemo + </button>
    </div>
  );
};
