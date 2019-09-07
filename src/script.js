import './mount';
import $ from 'jquery';
import { addTodo, removeTodo } from './writer';

$(function() {
  $('#addTodo').on('click', () => {
    addTodo();
  });

  $('#todoList').on('click', '.delete', function() {
    removeTodo(
      this,
      $('#todoList')
        .find('.delete')
        .index(this)
    );
  });
});
