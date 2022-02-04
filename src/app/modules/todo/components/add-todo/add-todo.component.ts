import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ITodo } from './../../../shared/itodo';

@Component({
  selector: 'to-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() todoToAdd = new EventEmitter<ITodo>();
  addTodo = new FormGroup({
    task: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitTodo(todo: ITodo) {
    if (todo !== null) {
      this.todoToAdd.emit(todo);
    }
  }
}
