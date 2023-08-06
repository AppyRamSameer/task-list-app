import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { newTaskObj } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { TaskService } from './task.service';
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  tasks = this.taskService.getAllTasks();
  newTaskObj = new newTaskObj();
  date: Date = new Date();

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTaskObj = new newTaskObj(this.newTaskObj.title, new Date(strDate));
    console.log(this.date);
  }

  add(taskNgForm: NgForm) {
    if (!taskNgForm.touched || !taskNgForm.valid) return;
    this.taskService.addTaskItem(this.newTaskObj);
    this.tasks = this.taskService.getAllTasks();
    taskNgForm.reset({ date: this.newTaskObj.date });
  }

  removeTask(existingTask: TaskItem) {
    if (confirm(`Confirm to remove ${existingTask.title}`)) {
      console.log(`removed ${existingTask.title}`);
      this.taskService.removeTask(existingTask);
      this.tasks = this.taskService.getAllTasks();
    }
  }
}
