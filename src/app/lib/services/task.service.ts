import { LocalStorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';
import { Status } from '../types/status.type';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];
  private newTasks: ITask[] = [];
  private currentFilter: string = 'all';

  constructor(private localStorage:LocalStorageService) {}

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(task: ITask): void {
    
    this.tasks.push(task);   
  }

  addNewTask(task: ITask): void {
    this.newTasks.push(task);
  }
  initNewTask(): void {
    this.newTasks=[];
  }
  getNewTasks(): ITask[] {
    return this.newTasks
  }

  setCurrentFilter(filter: string): void {
    this.currentFilter = filter;
  }
  getCurrentFilter(): string {
    return this.currentFilter;
  }

  filterTasks(): ITask[]  {
    if (this.currentFilter === 'all') {
      return [...this.tasks]
    }
    return this.tasks.filter((task) => task.status === this.currentFilter);
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
  
  toggleTaskStatus(id: number, status: Status): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    const task = this.tasks[index];
    task.status = status;
    task.isSaved = false;
    this.tasks[index] = task;
  }
  
  loadFromLocalStorage(): void {
    
    this.tasks =this.localStorage.getItem('tasks');
   
  }

  saveToLocalStorage(): void {
    
    this.localStorage.setItem('tasks', [...this.tasks, ...this.newTasks]);
    this.initNewTask()
  }

  
}
