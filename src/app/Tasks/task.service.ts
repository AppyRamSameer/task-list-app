import { Injectable } from '@angular/core';
import { newTaskObj } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private tasks: TaskItem[] = [
    new TaskItem('Task1'),
    new TaskItem('Task2'),
    new TaskItem('Task3'),
    new TaskItem('Task4'),
  ];

  getAllTasks(): TaskItem[] {
    return this.tasks;
  }

  addTaskItem(newTask: newTaskObj) {
    this.tasks.push(new TaskItem(newTask.title));
  }

  removeTask(existingTask: TaskItem) {
    this.tasks = this.tasks.filter((task) => task != existingTask);
  }
}
