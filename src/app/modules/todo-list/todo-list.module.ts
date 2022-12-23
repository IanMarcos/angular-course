import { NgModule } from '@angular/core';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    SharedModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }
