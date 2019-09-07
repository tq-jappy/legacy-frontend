import EventBus, { ADD_TODO, REMOVE_TODO } from './EventBus';

export const addTodo = () => {
  EventBus.$emit(ADD_TODO);
};

export const removeTodo = ($element, index) => {
  EventBus.$emit(REMOVE_TODO);
};
