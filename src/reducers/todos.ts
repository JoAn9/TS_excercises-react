import {Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types'

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  const { type, payload } = action;

  switch(type) {
    case ActionTypes.fetchTodos:
      return payload;

    default:
      return state;
  }

}