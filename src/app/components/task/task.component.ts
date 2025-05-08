import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {

  @Input() task!: ITask;
  @Output() changeStatus: EventEmitter<ITask> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();
  
  constructor() { }

  toggleStatus(checked: boolean) {
    
    this.task.status = checked ? 'completed' : 'pending';
    this.changeStatus.emit(this.task);
  }

  deleteTask() {
    this.delete.emit();
  }
}
