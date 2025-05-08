import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../lib/services/task.service';
import { ITask } from '../../interfaces/task.interface';
import { ToastService } from '../../lib/components/toast/service/toast.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() newTask: EventEmitter<ITask> = new EventEmitter<ITask>();
  taskForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(6)]]
  });

  get title() {
    return this.taskForm.get('title');
  }

  constructor(
    private fb: FormBuilder, 
    public taskService: TaskService,
    private toast:ToastService
  ) {}
 
  addTask() {

    const toast =  this.toast.create({
      message: 'Tarea creada con éxito',
      duration: 2000,
    })

    this.toast.show(toast);

    const task: ITask = {
      id: Date.now(),
      title: this.taskForm.value.title,
      status: 'pending',
      isSaved: false
    }
    this.taskForm.reset();
    this.newTask.emit(task);

  }
}
