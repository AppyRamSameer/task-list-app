import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-list-app';
  tasks: Task[] = [
    new Task('Task1'),
    new Task('Task2'),
    new Task('Task3'),
    new Task('Task4'),
  ];

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  removeTask(existingTask: Task) {
    if (confirm(`Confirm to remove ${existingTask}`)) {
      console.log(`removed ${existingTask}`);
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }

  toggleDone(task: Task) {
    task.isDone = !task.isDone;
  }
}

class Task {
  constructor(public title: string) {}
  public isDone = false;
}
