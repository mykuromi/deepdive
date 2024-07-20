import {
  BhigherOrderComponent1,
  BhigherOrderComponent2,
  Bhooks,
  BuseCustomHook1,
  BuseMemo2,
} from "../components";

export const D20240720 = () => {
  return (
    <div>
      <h3>2024.07.20 Custom Hooks, memo & useMemo, Higher Order Component</h3>

      <h4>훅의 규칙</h4>
      <Bhooks />

      <h4>memo, useMemo</h4>
      <BuseMemo2 />

      <h4>Higher order component : 고차 컴포넌트</h4>
      <BhigherOrderComponent1 />
      <BhigherOrderComponent2 />

      <br />
      <hr />

      <h4>Custom Hooks</h4>
      <BuseCustomHook1 />
    </div>
  );
};
