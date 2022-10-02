import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoServiceService} from '../service/todo-service.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [];
  content = new FormControl();

  constructor(private todoServiceService: TodoServiceService) {
    this.getAll()
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todoList[i].complete = !this.todoList[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todoList.push(todo);
      this.content.reset();
    }
  }

  getAll() {
    this.todoServiceService.getAll().subscribe(todos => {
      this.todoList = todos;
    });
  }
}
