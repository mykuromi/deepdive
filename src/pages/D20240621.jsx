import {
  BuseState,
  CuseState,
  BuseMemo1,
  BuseCallback1,
  BuseCallback2,
  BuseCallback3,
} from "../components";

export const D20240621 = () => {
  return (
    <div>
      <h3>6.21 UseState 구현</h3>

      <h4>me</h4>
      <CuseState />

      <h4>book</h4>
      <BuseState />

      <h4>useMemo</h4>
      <BuseMemo1 />

      <h4>useCallback 1</h4>
      <BuseCallback1 />

      <h4>useCallback 2</h4>
      <BuseCallback2 />

      <h4>useCallback 3</h4>
      <BuseCallback3 />
    </div>
  );
};
