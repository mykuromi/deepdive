import { memo, useEffect, useState } from "react";

const ChildComponent = memo(({ name, value, onChange }) => {
  useEffect(() => {
    console.log("useCallback 1 - rendering " + name);
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

export const BuseCallback1 = () => {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);

  const toggle1 = () => {
    setStatus1(!status1);
  };

  const toggle2 = () => {
    setStatus2(!status2);
  };

  // memo 인데도 BuseCallback1이 리렌더링 되면서 onChange가 모두 재생성되어
  // toggle시 BuseCallback1 전체 렌더링 됨
  return (
    <div>
      <ChildComponent name="1" value={status1} onChange={toggle1} />
      <ChildComponent name="2" value={status2} onChange={toggle2} />
    </div>
  );
};
