import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";

export const BuseContext3 = () => {
  const MyContext = createContext<{ hello: string } | undefined>(undefined);

  function ContextProvider({
    children, // optional
    text,
  }: PropsWithChildren<{ text: string }>) {
    return (
      <MyContext.Provider value={{ hello: text }}>
        {children}
      </MyContext.Provider>
    );
  }

  function useMyContext() {
    const context = useContext(MyContext);
    if (context === undefined) {
      throw new Error(
        "useMyContext는 ContextProvider 내부에서만 사용할 수 있습니다."
      );
    }
    return context;
  }

  function GrandChildComponent() {
    const { hello } = useMyContext();
    useEffect(() => {
      console.log("Rendering GrandChildComponent");
    });
    return <h3>{hello}</h3>;
  }

  // memo 최적화, 안하면 컴포넌트 트리 전체 리렌더링
  const ChildComponent = memo(() => {
    useEffect(() => {
      console.log("Rendering ChildComponent");
    });
    return <GrandChildComponent />;
  });

  function ParentComponet() {
    const [text, setText] = useState("");
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setText(e.target.value);
    }
    useEffect(() => {
      console.log("Rendering ParentComponent");
    });
    return (
      <div>
        <ContextProvider text="react">
          <ChildComponent />
          <input value={text} onChange={handleChange} /> - 리렌더링
        </ContextProvider>
      </div>
    );
  }

  return <ParentComponet />;
};
