import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: TodosComponent,
  },
  {
    path: 'new',
    component: AddTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
