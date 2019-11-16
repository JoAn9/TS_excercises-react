import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

const _App = ({ todos, fetchTodos }: AppProps): JSX.Element => {
  const onButtonClick = (): void => {
    fetchTodos();
  };

  const renderList: JSX.Element[] = todos.map((item: Todo) => (
    <li key={item.id}>{item.title}</li>
  ));

  return (
    <>
      <button onClick={onButtonClick}>Fetch todos</button>
      <ul>{renderList}</ul>
    </>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
