import { createContext, useContext } from "react";

export const BuseContext1 = () => {
  const Context = createContext<{ hello: string } | undefined>(undefined);

  function ParentComponent() {
    return (
      <div>
        <Context.Provider value={{ hello: "react" }}>
          <Context.Provider value={{ hello: "javascript" }}>
            <ChildComponent />
          </Context.Provider>
        </Context.Provider>
      </div>
    );
  }

  function ChildComponent() {
    const value = useContext(Context);
    return <div>childComponent (value.hello) - {value ? value.hello : ""}</div>;
  }

  return <ParentComponent />;
};
