import { useEffect, useState } from "react";

/*
함수명을 fetch<T>() 로 명명할 경우,
REact Hook "useState" is called in function "fetch" that is neither 
a React function component nor a custom React Hook function.
React component names must start with an uppercase letter. 
(react-hooks/rules-of-hooks) 에러 발생
1) Fetch로 바꿔서 함수 컴포넌트로 변경하거나
2) 접두사로 use를 사용해 사용자 정의 훅이라 리액트에 알려주기

사용자 정의 훅 저장소 >>
- Hooks : https://github.com/uidotdev/usehooks
- react-use : https://github.com/streamich/react-use
- ahooks : https://github.com/alibaba/hooks
*/

// HTTP 요청을 하는 사용자 정의 훅
function useFetch<T>(
  url: string,
  { method, body }: { method: string; body?: XMLHttpRequestBodyInit }
) {
  // 응답 결과
  const [result, setResult] = useState<T | undefined>();
  // 요청중 여부
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // 2xx 3xx로 정상 응답인지 여부
  const [ok, setsOk] = useState<boolean | undefined>();
  // HTTP status
  const [status, setStatus] = useState<number | undefined>();

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url, {
          method,
          body,
          signal: abortController.signal,
        });

        setsOk(response.ok);
        setStatus(response.status);

        if (response.ok) {
          const apiResult = await response.json();
          setResult(apiResult);
        }
      } catch (error) {
        console.log("Error ", error);
      }
    })(); // async

    /*
    without try-catch 
      <[Log] Error  – 
      AbortError: Fetch is aborted (bundle.js, line 1262)
      AbortError: Fetch is aborted(익명 함수)>
    you are getting the exception because infact you call abort on fetch.
     */
    return () => {
      abortController.abort();
    };
  }, [url, method, body]); // useEffect

  return { ok, result, isLoading, status };
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const BuseCustomHook1 = () => {
  // 사용자 지정 훅 사용
  const { isLoading, result, status, ok } = useFetch<Array<Todo>>(
    "https://jsonplaceholder.typicode.com/todos",
    { method: "GET" }
  );

  useEffect(() => {
    if (!isLoading) {
      console.log("fetchResult >> ", status);
    }
  }, [status, isLoading]);

  return (
    <div>
      <u>useFetch</u>
      {ok
        ? (result || []).map(({ userId, id, title }, index) => (
            <div key={index}>
              {userId} - {id} : {title}
            </div>
          ))
        : null}
    </div>
  );
};
