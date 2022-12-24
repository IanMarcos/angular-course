import { Component } from '@angular/core';
import ToDo from './models/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  toDoList: ToDo[];
  newTask: string;

  constructor() {
    this.toDoList = [];
    this.newTask = '';
  }

  handleNewToDo(): void {
    this.toDoList.push(new ToDo(this.newTask));

    this.newTask = '';
  }

  handleCheckToDo(index: number): void {
    if (index >= 0 && index < this.toDoList.length) {
      this.toDoList[index].toggleCompleteToDo();
    }
  }

  handleRemoveToDo(index: number): void {
    if (index >= 0 && index < this.toDoList.length) {
      this.toDoList.splice(index, 1);
    }
  }
}
