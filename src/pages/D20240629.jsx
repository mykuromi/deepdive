import React from "react";
import {
  BuseContext1,
  BuseContext2,
  BuseContext3,
  BuseEffect,
  BuseRef1,
  BuseRef2,
  CuseRef,
} from "../components";

export const D20240629 = () => {
  return (
    <div>
      <h3>2024.06.29 useEffect 구현</h3>

      <h4>useEffect</h4>
      {/* <BuseEffect /> */}

      <h4>useRef</h4>
      <CuseRef />
      <BuseRef1 />
      <BuseRef2 />

      <h4>useContext</h4>
      <BuseContext1 />
      <BuseContext2 />
      <BuseContext3 />
    </div>
  );
};
