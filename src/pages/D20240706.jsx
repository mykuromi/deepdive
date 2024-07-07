import { useEffect, useRef } from "react";
import {
  BforwardRef1,
  BforwardRef2,
  BuseImperativeHandle,
  BuseReducer,
} from "../components";

export const D20240706 = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("useRef - ref : ", ref);
  }, []);

  return (
    <div>
      <h3>2024.07.06 useReducer, useImperativeHandle</h3>

      <h4>useReducer</h4>
      <BuseReducer />

      <h4>forwardRef</h4>
      <BforwardRef1 />
      <BforwardRef2 />

      <h4>useImperativeHandle</h4>
      <BuseImperativeHandle />

      <h4>useRef Test</h4>
      <input ref={ref} />
      <p>ref.current에 input 요소가 들어감</p>
    </div>
  );
};
