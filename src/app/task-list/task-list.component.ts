import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
    if (confirm(`Confirm to remove ${existingTask.title}`)) {
      console.log(`removed ${existingTask.title}`);
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }
}

class Task {
  constructor(public title: string) {}
  public isDone = false;

  toggleDone() {
    this.isDone = !this.isDone;
  }
}
