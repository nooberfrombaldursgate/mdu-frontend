'use strict'; // to enable strict mode and modern JavaScript functionality

import TodoList from './todoList.js';

let init = function () {
  let todoList = new TodoList();
  document.querySelector('#add-todo-button').addEventListener('click', () => {
    todoList.add();
  });
};

init();

export default init; 