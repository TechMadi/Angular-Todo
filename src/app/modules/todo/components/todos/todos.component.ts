import { Component, Input, OnInit } from '@angular/core';
import { takeLast } from 'rxjs';
import { ITodo } from './../../../shared/itodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];
  alertMessage: string = '';
  @Input() todo: ITodo = {
    task: '',
    description: '',
    status: '',
  };
  constructor() {}

  ngOnInit(): void {}

  addTodo(todo: ITodo) {
    if (this.todos.find((x) => x.task === todo.task)) {
      this.alertMessage = 'This task already  exists';
    } else {
      this.todos.push(todo);
    }
  }
}
