import $ from 'jquery';
import { readData } from './reader';
import {
  writeNextTodo,
  writeTodoCount,
  toggleTodoList,
  toggleTodoEmpty,
  addTodo,
  removeTodo
} from './writer';

const updateAll = () => {
  const { count, nextTodoText } = readData();

  writeNextTodo(nextTodoText);
  writeTodoCount(count);
  toggleTodoList(count);
  toggleTodoEmpty(count);
};

$(function() {
  $('#addTodo').on('click', () => {
    addTodo();
    updateAll();
  });

  $('#todoList').on('input', '.todo:eq(0)', () => {
    updateAll();
  });

  $('#todoList').on('click', '.delete', function() {
    removeTodo(this);
    updateAll();
  });

  updateAll();
});
