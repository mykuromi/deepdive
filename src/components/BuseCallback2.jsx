import { memo, useCallback, useEffect, useState } from "react";

const ChildComponent = memo(({ name, value, onChange }) => {
  useEffect(() => {
    console.log("useCallback 2 - rendering " + name);
  });

  return (
    <div>
      <h5>
        {name} {value ? "켜짐" : "꺼짐"}
      </h5>
      <button onClick={onChange}>toggle</button>
    </div>
  );
});

export const BuseCallback2 = () => {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);

  const toggle1 = useCallback(
    function toggle1() {
      setStatus1(!status1);
    },
    [status1]
  );

  const toggle2 = useCallback(
    function toggle2() {
      setStatus2(!status2);
    },
    [status2]
  );

  // BuseCallback1 보완
  return (
    <div>
      <ChildComponent name="1" value={status1} onChange={toggle1} />
      <ChildComponent name="2" value={status2} onChange={toggle2} />
    </div>
  );
};
