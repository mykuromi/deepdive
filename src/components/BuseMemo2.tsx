import { ChangeEvent, memo, useEffect, useMemo, useState } from "react";

// memo 사용 예제 -------------------------------------------------
const ChildComponent1 = ({ value }: { value: string }) => {
  useEffect(() => {
    console.log("Child Component1 Rendering..");
  });

  return <div>child component1 : value - {value}</div>;
};
const ChildComponent2 = memo(({ value }: { value: string }) => {
  useEffect(() => {
    console.log("Child Component2 Rendering..");
  });

  return <div>child component2 : value - {value}</div>;
});

function ParentComponent1() {
  const [state, setState] = useState(1);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setState(Number(e.target.value));
  }

  return (
    <div>
      <p>memo - memo로 감싸지 않은 child component1만 계속 렌더링</p>
      parent component1 :
      <input type="number" value={state} onChange={handleChange} />
      <ChildComponent1 value="hello" />
      <ChildComponent2 value="hello" />
    </div>
  );
}

// useMemo 사용 예제 -------------------------------------------------
// useMemo를 사용할 경우 값을 반환받기 때문에, JSX가 아닌 {} 할당식 사용
// 코드 가독성을 위해 memo 권장
function ParentComponent2() {
  const [state, setState] = useState(1);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setState(Number(e.target.value));
  }

  const MemoizedChildComponent = useMemo(() => {
    return <ChildComponent1 value="hello" />;
  }, []);

  return (
    <div>
      <p>useMemo - child component1도 렌더링 안됨</p>
      parent component2 :
      <input type="number" value={state} onChange={handleChange} />
      {MemoizedChildComponent}
    </div>
  );
}

export const BuseMemo2 = () => {
  return (
    <div>
      <ParentComponent1 />
      <ParentComponent2 />
    </div>
  );
};
