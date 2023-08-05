import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { newTaskObj } from './new-task.dto';
import { TaskItem } from './task-item.dto';
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  newTaskObj = new newTaskObj();
  date: Date = new Date();

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTaskObj = new newTaskObj(this.newTaskObj.title, new Date(strDate));
    console.log(this.date);
  }

  tasks: TaskItem[] = [
    new TaskItem('Task1'),
    new TaskItem('Task2'),
    new TaskItem('Task3'),
    new TaskItem('Task4'),
  ];

  add(taskNgForm: NgForm) {
    if (!taskNgForm.touched || !taskNgForm.valid) return;
    this.tasks.push(new TaskItem(this.newTaskObj.title));
    taskNgForm.reset({ date: this.newTaskObj.date });
  }

  removeTask(existingTask: TaskItem) {
    if (confirm(`Confirm to remove ${existingTask.title}`)) {
      console.log(`removed ${existingTask.title}`);
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }
}
