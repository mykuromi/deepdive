import { useEffect, useState } from "react";

function Component() {
  // how to save in react fiber
  const [count, setCount] = useState(0);
  const [required, setRequired] = useState(false);

  useEffect(() => {
    // do something...
  }, [count, required]);
}

function Form() {
  const [name, setName] = useState("Mary");
  if (name !== "") {
    /*
        // 중첩문 내부에서 호출 불가
        useEffect(function persistForm() {
            localStorage.setItem("formData", name);
        });
        */
  }

  const [surname, setSurname] = useState("Poppins");
  useEffect(function updateTitle() {
    console.log("훅의 규칙 : " + name + " " + surname);
  });
}

export const Bhooks = () => {
  return (
    <div>
      <p>
        - 훅에 대한 정보 저장 : 파이버 객체의 링크드 리스트 호출 순서에 따라
        저장
        <br />- 조건문에서 호출되면 링크드 리스트가 깨지면서 순서가 깨져서
        리액트 코드 에러 에러
      </p>
      <Form />
    </div>
  );
};
