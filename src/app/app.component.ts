import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-list-app';
  tasks = ['Task1', 'Task2', 'Task3'];

  add(newTask: string) {
    this.tasks.push(newTask);
  }
}
