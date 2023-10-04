import React from 'react';
import {  useQuery } from 'react-query'
async function fetchTodoList() {
  try {
    const response = await fetch('http://localhost:4000/students?_page=2&_limit=10');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
}
const TodoList = () => {
  const { isInitialLoading, isError, data, error, refetch, isFetching } =
    useQuery({
      queryKey: ['todos'],
      queryFn: fetchTodoList,
      enabled: false,
    })

  return (
    <div>
      <button onClick={() => refetch()}>Fetch Todos</button>

      {data ? (
        <>
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>{todo.email}</li>
            ))}
          </ul>
        </>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : isInitialLoading ? (
        <span>Loading...</span>
      ) : (
        <span>Not ready ...</span>
      )}

      <div>{isFetching ? 'Fetching...' : null}</div>
    </div>
  )
};

export default TodoList;