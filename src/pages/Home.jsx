import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div>
      <h3>🖤 studying</h3>
      <ul>
        <li>
          <a href="/D20240621">2024.06.21 useState, useMemo, useCallback</a>
        </li>
        <li>
          <a href="/D20240629">2024.06.29 useEffect, useRef, useContext</a>
        </li>
        <li>
          <a href="/D20240706">2024.07.26 useReducer, useImperativeHandle</a>
        </li>
        <li>
          <a href="/D20240713">2024.07.13 useLayoutEffect, useDebugValue</a>
        </li>
        <li>
          <a href="/D20240720">
            2024.07.20 Custom Hooks, memo & useMemo, Higher Order Component
          </a>
        </li>
      </ul>
    </div>
  );
};
