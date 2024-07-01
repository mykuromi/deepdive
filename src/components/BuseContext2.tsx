import { PropsWithChildren, createContext, useContext } from "react";

export const BuseContext2 = () => {
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

  function ChildComponent() {
    // 타입이 명확히 설정되어 있어 굳이 undefined 체크 필요 X
    // 이 컴포넌트가 Provider 하위에 없으면 에러 발생
    const { hello } = useMyContext();
    return <div>childComponent hello : {hello}</div>;
  }

  function ParentComponent() {
    return (
      <div>
        <ContextProvider text="react">
          <ChildComponent />
        </ContextProvider>
      </div>
    );
  }

  return <ParentComponent />;
};
