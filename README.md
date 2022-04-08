- **연속적인 API 호출 문제**
  첫 번째 요청에 대한 응답을 다음 요청에 넣어서 보냈을 때 오류가 발생하여 여러 방면으로 알아보았다. CORS에러부터 시작하여 요청 header까지 건드려봤지만 소용이 없었다. 하지만 허무하게도 해결은 정말 간단했다. 두 번째 요청에 API KEY를 넣지 않아서 발생했던 바보같은 문제였다.

- **useQuery custom 사용 문제**
  nickname을 input으로 받아 useQuery를 반환하는 useSummonerData custom hook을 만들었다. 하지만 SearchContainer에서 input을 요청하고 InfoContainer에서 응답한 값을 보여주려고 하는데 서로 다른 컴포넌트에서 어떻게 관리할지 고민을 했다. 그 결과 page의 query를 따로 변환할 필요없이 바로 깔끔하게 사용할 수 있는 react-router의 useSearchParams를 이용해서 넘겨주는 방식을 떠올렸고 적용했다.
  
- **react-query TypeScript 적용 문제**
  이번 프로젝트에서 처음 타입스크립트를 적용해보고 있는데 기본적인 사용은 익숙해졌지만 react-query의 내장 타입을 이용하는 과정에서 어려움을 겪었다. generic에 대한 개념이 부족해서 계속 공부를 했고 `UseQueryOptions` 타입을 지정하는 과정에서 가장 큰 벽에 부딪혔다. 
  ```typescript
  export interface UseQueryOptions<TQueryFnData = unknown, TError = unknown, 
  TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> 
  extends UseBaseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>
  ```
  useQuery(키, 함수, 옵션)을 넣어주기 때문에 UseQueryOptions 타입을 지정해 줄 때 다른 사용 예제들을 보면 <함수 반환 데이터 타입, 에러 타입, 결과 데이터 타입>만 넣어주고 있었다. 하지만 계속 오류가 떠서 몇 일 고생했다. 결국 [이 글](https://github.com/tannerlinsley/react-query/discussions/1477)을 읽고 해결했다. 바로 UseQueryOptions의 마지막 타입 TQueryKey를 as로 넣어주는 방법이다. 다른 사용 예제에서는 useQuery에 키를 넣어주면 알아서 해결이 되는 문제였는데 아마 eslint 문제였던 것 같다.

 - **Rendered More Hooks Than During The Previous Render 에러**
 router의 useSearchParams hooks를 이용하여 react-query 요청을 보내는데 `Home.tsx` 안에 `SearchContainer.tsx`에서 params를 set해주고 `InfoContainer.tsx`에서 params를 바로 사용하려고 하다 보니까 렌더링 순서 떄문에 에러가 발생한 것 같다. 따라서 params의 변수를 이용할때는 page 컴포넌트에서 다루고 container로 props를 내려주는 것이 안전하다.