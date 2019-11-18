import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

const _App = (props: AppProps): JSX.Element => {
  const { todos, fetchTodos, deleteTodo } = props;
  const onButtonClick = (): void => {
    fetchTodos();
  };

  const onDeleteClick = (id: number): void => {
    deleteTodo(id);
  };

  const renderList: JSX.Element[] = todos.map((item: Todo) => (
    <li key={item.id}>
      {item.title}{' '}
      <button onClick={() => onDeleteClick(item.id)}>Delete</button>
    </li>
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

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
