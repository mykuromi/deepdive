// 고차함수) useState : setState 함수 반환 & 작동 방식
let index = 0;
const setState = // 즉시 실행 함수로 setter 생성
  (function () {
    // 현재 index를 클로저로 가둬서 이후에도 계속하여 동일한 index에 접근
    let currentIndex = index;
    return function (value) {
      global.states[currentIndex] = value;
    };
  })();

export const BhigherOrderComponent1 = () => {
  const list = [1, 2, 3];
  const doubledList = list.map((item) => item * 2);

  // 사용자 고차함수
  function add(a) {
    return function (b) {
      return a + b;
    };
  }
  const result = add(1);
  const result2 = result(2);

  return (
    <div>
      <h4>고차 함수</h4>
      <p>
        예제 1. map
        <br />
        list array : {list}
        <br />
        doubledList array(map) : {doubledList}
      </p>
      <p>
        예제 2. 사용자 고차 함수 - 클로저에 담긴 정보 활용
        <br />
        result(add(1)) : {result2}
        <br />
        add(1) 라는 함수를 호출하는 시점에 1이라는 정보가 a에 포함되고, 이러한
        정보가 담긴 함수를 result로 반환된다. 이것은 useState 원리와 비슷하다.
        useState 실행은 함수 호출과 동시에 끝났지만 state의 값은 별도로 선언한
        환경 즉, 클로저에 기억된다. 여기에서도 마찬가지로 a=1인 정보를 활용해
        1+2의 결과를 반환할 수 있다.
      </p>
    </div>
  );
};
