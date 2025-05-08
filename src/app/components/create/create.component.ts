import { Component } from '@angular/core';
import { TaskService } from '../../lib/services/task.service';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  hasUnsavedChanges = false;
  constructor(private taskService: TaskService) { } 
  createTask(e: ITask) {
    
    this.taskService.addNewTask(e);
    this.hasUnsavedChanges = true;
  }

}
