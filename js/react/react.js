const react = {
  test: "hi 🤍",
  state: {},
  ref: { current: null }, // only single property
  useRef: function (initialValue) {
    // 1. DOM을 조작하는 경우 - htmlElement / null
    // 2. DOM을 조작하지 않는 경우 - any value / null

    if (initialValue === undefined) {
      throw new Error("Parameter is necessary.");
    }

    if (initialValue instanceof HTMLElement) {
      // 이부분 다시 DOM 찾아가는 로직.....
      this.ref = initialValue;
      this.ref.current = initialValue.value;
    } else {
      this.ref.current = initialValue;
    }

    return react.ref;
  },
};

function component(props) {
  const element = document.createElement("div");
  element.innerText = react.test;

  const inputEl = document.createElement("input");
  inputEl.setAttribute("value", "test");

  const ref = react.useRef(inputEl);
  element.setAttribute("ref", ref);
  console.log(ref);
  return element;
}

document.getElementById("root").appendChild(component());
