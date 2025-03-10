# React-Query Practice-Template


### Dependency
- React 19.0
- Bootstrap 5.3.3
- @tanstack/react-query 5.66


#### Issues
1. tanstack/reacty-query 버전
  기존 버전에서는 useQuery부분의 options에 파라미터를 순서대로 던져야 했지만 5버전 이후부터는 Object로 묶어서 전달해야 했었다.
  https://tanstack.com/query/v5/docs/react/guides/migrating-to-v5 

    아래는 예시 코드이다.
    ```javascript
      import React from 'react';
      import { useQuery } from '@tanstack/react-query';
      import axios from 'axios';
      
      const fetchUrl = async (url) => {
        const data = await axios({
          method: 'get',
          url: url,
          headers: {
            'Content-Type': 'application/json/charset=UTF-8',
            'Access-Control-Allow_origin': '*'
          }
        }).then((res) => res.data);
        return data;
      }
      
      export const ReactQuery_before = (key, url) => {
        const { isLoading, data, isError, error } = useQuery(
          key,
          () => fetchUrl(url)
        );
      }
      
      export const ReactQuery_after = (key, url) => {
        const { isLoading, data, isError, error } = useQuery({
          queryKey: [key],
          queryFn: () => fetchUrl(url)
        });
      }
    ```
    Object의 Key Name을 생략해도 되지만 헷갈리니 적어주는게 좋다.
    여기서 before 버전으로 빌드를 하면 에러가 발생하므로 주의하자.
