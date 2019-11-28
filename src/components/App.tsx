import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

const _App: React.FC<AppProps> = ({
  todos,
  fetchTodos,
  deleteTodo,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [todos]);

  const onButtonClick = (): void => {
    setIsLoading(true);
    fetchTodos();
  };

  const onDeleteClick = (id: number): void => {
    deleteTodo(id);
  };

  const renderList: JSX.Element[] = todos.map((item: Todo) => (
    <li key={item.id}>
      <p>{item.title}</p>
      <button onClick={() => onDeleteClick(item.id)}>Delete</button>
    </li>
  ));
  return (
    <>
      <button onClick={onButtonClick}>Fetch todos</button>
      <p>{isLoading && 'LOADING...'}</p>
      <ul>{renderList}</ul>
    </>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
