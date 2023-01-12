import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HomeButtonComponent
  ]
})
export class SharedModule { }
