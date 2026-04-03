import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../task-manager/task-manager';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }

  setTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
  }

  addTask(task: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    currentTasks.push(task);
    this.tasksSubject.next([...currentTasks]);
  }

  deleteTask(taskId: number): void {
    const currentTasks = this.tasksSubject.getValue();
    const index = currentTasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
      currentTasks.splice(index, 1);
      this.tasksSubject.next([...currentTasks]);
    }
  }

  toggleTaskComplete(id: number): void {
    const currentTasks = this.tasksSubject.getValue();
    const task = currentTasks.find(t => t.id === id);
    if (task) {
      if (task.status === 'completed') {
        task.status = 'pending';
        delete task.completedAt;
      }
      else {
        task.status = 'completed';
        task.completedAt = new Date();
      }
    }
    this.tasksSubject.next([...currentTasks]);
  }
}
