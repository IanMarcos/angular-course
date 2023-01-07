import { Component } from '@angular/core';

type Project = {
  name: string,
  url: string
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  projects: Project[];

  constructor() {
    this.projects = [
      { name: 'Piano', url:'/piano'},
      { name: 'Blackjack', url:'/blackjack'},
      { name: 'TODO list', url:'/todo-list'},
      { name: 'null', url:'/'},
    ];
  }
}
