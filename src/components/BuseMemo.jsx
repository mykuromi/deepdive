import { useEffect, useMemo, useState } from "react";

const ExpensiveComponent = ({ value }) => {
  useEffect(() => {
    console.log("useMemo - rendering");
  });

  return <span>{value + 1000}</span>;
};

export const BuseMemo = () => {
  const [value, setValue] = useState(10);

  // useMemo value가 변하지 않는 이상 렌더링 X
  const [, triggerRendering] = useState(false);

  const MemoizedComponent = useMemo(
    () => <ExpensiveComponent value={value} />,
    [value]
  );

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    triggerRendering((prev) => !prev);
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleClick}>렌더링 발생</button>
      <br />
      MemoziedComponent : {MemoizedComponent}
    </div>
  );
};
