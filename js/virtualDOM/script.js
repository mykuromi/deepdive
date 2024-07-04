function createVirtualDom(parentId, elements) {
  if (!parentId) {
    parentId = "root";
  }
  const parent = document.getElementById(parentId);

  if (elements.length < 1) return;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] !== "object") {
      parent.innerText = elements[i];
      continue;
    }

    const element = document.createElement(elements[i].tag);
    const elProps = elements[i].props;

    const arrProps = Object.keys(elProps);
    for (let j = 0; j < arrProps.length; j++) {
      const key = arrProps[j];
      const value = elProps[key];
      element.setAttribute(key, value);
    }

    parent.appendChild(element);

    if (elements[i].children.length < 1) continue;
    createVirtualDom(elements[i].props.id, elements[i].children);
  }
}

const elements = [
  {
    tag: "div",
    props: { id: "divTest" },
    children: [
      {
        tag: "span",
        props: { id: "spanTest" },
        children: ["hi"],
      },
      {
        tag: "p",
        props: { id: "pTest", style: "color: red;" },
        children: ["pp"],
      },
    ],
  },
];

createVirtualDom("root", elements);
