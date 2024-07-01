import { useRef } from "react";

export const CuseRef = () => {
  const ref = useRef(null);

  return (
    <div>
      <input ref={ref} /> - cuseRef
    </div>
  );
};
