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
export const ReactQuery = (key, url) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [key],
    queryFn: () => fetchUrl(url)
  });
  if(isLoading) { return <>Loading...</> }
  if(isError) { return <>{error.message}</> }
  return (
    <>
      React Query
      <div>
      {
        data && (<>{JSON.stringify(data)}</> )
      }
      </div>
    </>
  )
}