import { ComponentType } from "react";

interface LoginProps {
  loginRequired?: boolean;
}

function withLoginComponent<T>(Component: ComponentType<T>) {
  return function (props: T & LoginProps) {
    const { loginRequired, ...restProps } = props;

    if (loginRequired) {
      return <div>withLoginComponent : 로그인이 필요합니다.</div>;
    }
    return <Component {...(restProps as T)} />;
  };
}

/*
원래 구현하고자 하는 컴포넌트를 만들고, withLoginComponent로 감싸기만 하면 끝
로그인 여부, 로그인이 안되면 다른 컴포넌트를 렌더링하는 책임을 모두
고차 컴포넌트인 withLoginComponent에 맡길 수 있어 편리함
*/
const Comonent = withLoginComponent((props: { value: string }) => {
  return <h3>{props.value}</h3>;
});

export const BhigherOrderComponent2 = () => {
  // 로그인 관련 정보를 가져옴
  const isLogin = true;
  return <Comonent value="login component" loginRequired={isLogin} />;
};

function useLogin() {
  //logic...
  return { loggedIn: true };
}
const LoginComponent = () => {
  return <div>LOGIN please</div>;
};
// 사용자 정의 훅
function HookComponent() {
  const { loggedIn } = useLogin();

  if (!loggedIn) {
    return <LoginComponent />;
  }
  return <div>안녕하세요. 로그인 되었습니다.</div>;
}

const HOCComponent = withLoginComponent(() => {
  // loggedIn state 값을 신경쓰지 않고 그냥 컴포넌트에 필요한 로직만 추가
  // loggedIn state에 따른 제어는 고차 컴포넌트에서 해줄 것
  return <div>안녕하세요. 로그인 되었습니다.</div>;
});
