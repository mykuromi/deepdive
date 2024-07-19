import { useDebugValue, useState } from "react";

// 현재 시간을 반환하는 사용자 정의훅
function useDate() {
  const date = new Date();

  // useDebugValue로 디버깅 정보를 기록
  useDebugValue(date, (date) => `현재 시간 : ${date.toISOString()}`);

  return date;
}

export const BuseDebugValue = () => {
  const date = useDate();
  const [counter, setCounter] = useState(0); // 렌더링을 발생시키기 위한 변수

  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      counter : {counter}
      <br />
      date : {date.toISOString()}
      <br />
      <button onClick={handleClick}> + </button>
    </div>
  );
};
