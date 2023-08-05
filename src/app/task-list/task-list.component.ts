import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  newTaskTitle: string = '';
  date: Date = new Date();

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
    console.log(this.date);
  }

  tasks: Task[] = [
    new Task('Task1'),
    new Task('Task2'),
    new Task('Task3'),
    new Task('Task4'),
  ];

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) return;
    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({ date: this.date });
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
