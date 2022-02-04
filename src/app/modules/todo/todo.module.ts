import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent, AddTodoComponent],
  imports: [CommonModule, TodoRoutingModule, FormsModule, ReactiveFormsModule],
})
export class TodoModule {}
