import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Input = forwardRef((props, ref) => {
  // useImperativeHandle을 사용하면 ref의 동작을 추가로 정의할 수 있다
  useImperativeHandle(
    ref,
    () => ({
      alert: () => alert(props.value),
    }),
    [props.value] // useEffect deps랑 같음
  );

  return <input ref={ref} {...props} />;
});

export const BuseImperativeHandle = () => {
  // input에 사용할 ref
  const inputRef = useRef();
  // input에 사용할 value
  const [text, setText] = useState("");

  function handleClick() {
    inputRef.current.alert();
  }

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <Input ref={inputRef} value={text} onChange={handleChange} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
