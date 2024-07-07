import { forwardRef, useEffect, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  useEffect(() => {
    console.log("2. ref(forwardRef) : ", ref);
  }, [ref]);

  return <div>child compoent(forwardRef_ref)</div>;
});

function ParentComponent() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <ChildComponent ref={inputRef} />
    </div>
  );
}

export const BforwardRef2 = () => {
  return <ParentComponent />;
};
