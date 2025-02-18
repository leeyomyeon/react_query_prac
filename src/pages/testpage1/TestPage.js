import React from 'react'
import { ReactQuery } from 'pages/utils/ReactQuery'

const key = 'get-Todos';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const TestPage = ({ fileName }) => {
  return (
    <div>
      {ReactQuery(key, url)}
    </div>
  );
}
export default TestPage;