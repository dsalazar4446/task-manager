import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, OnInit } from '@angular/core';
import { TaskService } from '../../lib/services/task.service';
import { ITask } from '../../interfaces/task.interface';
import { ModalService } from '../../lib/components/modal/service/modal.service';
import { ModalComponent } from '../../lib/components/modal/component/modal.component';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  
  hasUnsavedChanges = false;
  tasks: ITask[] = [];
  isOpenDeleteModal = false;
  isOpenSaveModal = false;
  title = 'Alerta';
  deleteMessage = '¿Está seguro de que desea eliminar esta tarea?';
  saveMessage = '¿Está seguro de que desea guardar los cambios?';

  currentIndex!: number;
  constructor(
    public taskService: TaskService, 
    private modal: ModalService,
    private change: ChangeDetectorRef
  ) {}


  ngOnInit(): void {
      this.taskService.loadFromLocalStorage();
      const newsTasks = this.taskService.getNewTasks(); 
      this.tasks = this.taskService.getTasks();
      
      if (newsTasks.length > 0) {
          this.tasks = [...this.tasks, ...newsTasks];
          this.hasUnsavedChanges = true;
      }          
      this.change.detectChanges()
  }
  getFilter(e: any) {
    this.taskService.setCurrentFilter(e);
    this.tasks = this.taskService.filterTasks();
    this.change.detectChanges()
  }
  
  async deleteTask(index: number) {
    this.currentIndex = index;
    const deleteModal = this.modal.create({
      message: this.deleteMessage,
      title: this.title,
      buttonOk: 'Eliminar',
    })
    
    const data = await this.modal.show(deleteModal);
    
    if(data) {
      this.taskService.removeTask(this.currentIndex);
      this.tasks = this.taskService.filterTasks();
      this.change.detectChanges()
    }

  }

  toggleStatus(event: any) {    
    this.taskService.toggleTaskStatus(event.id, event.status);
    this.tasks = this.taskService.filterTasks();
    this.hasUnsavedChanges = true;
    this.change.detectChanges()
  }

  async saveToLocalStorage() {
    const saveModal = this.modal.create({
      message: this.saveMessage,
      title: this.title,
      buttonOk: 'Guardar',
    })

    const data = await this.modal.show(saveModal);
  
    
    
    if (data) {

      this.taskService.saveToLocalStorage();
      this.taskService.loadFromLocalStorage();
      this.tasks = this.taskService.filterTasks();
      this.change.detectChanges()
    }
  }



}
