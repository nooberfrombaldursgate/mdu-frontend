'use strict';

export class TodoList {
  constructor() {
    this.todos = [];
  }
  add() {
    let newTodoInput = document.querySelector('#newTodoText');
    let newTodo = newTodoInput.value;
    // if the input value isn't falsy
    if (newTodo) {
        this.todos.push(newTodo);
    }
    newTodoInput.value = '';
    this.append();
  }
  append() {
    let htmlTemplate = '';
    for (const todo of this.todos) {
      htmlTemplate += /*html*/ `
            <li>${todo}</li>
          `;
    }
    document.querySelector('#todoList').innerHTML = htmlTemplate;
  }
}
