import { Injectable } from '@angular/core';
import { newTaskObj } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { Observable, BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })

export class TaskService {
  constructor() {}

  private tasks = new BehaviorSubject([
    new TaskItem('Task1'),
    new TaskItem('Task2'),
    new TaskItem('Task3'),
    new TaskItem('Task4'),
  ]);

  getAllTasks(): Observable<TaskItem[]> {
    return this.tasks;
  }

  addTaskItem(newTask: newTaskObj) {
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));
    this.tasks.next(updatedTasks);
  }

  removeTask(existingTask: TaskItem) {
    var updatedTasks = this.tasks.value.filter((task) => task != existingTask);
    this.tasks.next(updatedTasks);
  }
}
