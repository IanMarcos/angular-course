import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'piano',
    loadChildren: () => import('./modules/piano/piano.module').then(m => m.PianoModule)
  },
  { 
    path: 'blackjack',
    loadChildren: () => import('./modules/blackjack-dice/blackjack-dice.module').then(m => m.BlackjackDiceModule)
  },
  { 
    path: 'todo-list',
    loadChildren: () => import('./modules/todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  { 
    path: 'bmi',
    loadChildren: () => import('./modules/bmi-calculator/bmi-calculator.module').then(m => m.BMICalculatorModule)
  },
  { 
    path: 'employee-list',
    loadChildren: () => import('./modules/employee-list/employee-list.module').then(m => m.EmployeeListModule)
  },
  { 
    path: 'appointments',
    loadChildren: () => import('./modules/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
