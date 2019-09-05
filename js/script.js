const updateAll = () => {
  const count = $('.todo').length;
  const next = $('.todo input').first();
  const nextTodoText = count ? next.val() : '未登録';

  $('#nextTodo').text(`次のTODO: ${nextTodoText}`);
  $('#todoCount').text(`(全${count}件)`);

  if (count) {
    $('#todoList').show();
    $('#todoEmpty').hide();
  } else {
    $('#todoList').hide();
    $('#todoEmpty').show();
  }
};

const addTodo = () => {
  const wrapper = $('<div>');
  wrapper.addClass('todo');

  const input = $('<input>');
  input.attr('type', 'text');

  const deleteButton = $('<button>');
  deleteButton.addClass('delete').text('削除');

  wrapper.append(input);
  wrapper.append(deleteButton);
  $('#todoList').append(wrapper);
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
    $(this)
      .closest('.todo')
      .remove();
    updateAll();
  });

  updateAll();
});
