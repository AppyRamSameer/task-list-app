import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, MatDatepickerModule, FormsModule],
  providers: [TaskService],
  exports: [TaskListComponent],
})
export class TasksModule {}
