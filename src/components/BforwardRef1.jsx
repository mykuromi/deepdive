import { useEffect, useRef } from "react";

// parentRef 대신 ref를 사용하면 ref는 예약어기 때문에 접근 시도하는 경우 undefined 반환 에러
function ChildComponent({ parentRef }) {
  useEffect(() => {
    console.log("1. parentRef : ", parentRef);
  }, [parentRef]);

  return <div>child component(parentRef)</div>;
}

function ParentCompoent() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <ChildComponent parentRef={inputRef} />
    </div>
  );
}

export const BforwardRef1 = () => {
  return <ParentCompoent />;
};
