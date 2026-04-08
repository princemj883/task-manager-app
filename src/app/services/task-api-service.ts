import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../task-manager/task-manager';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService 
{
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = environment.apiUrl;

  getTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  createTask(tasks: Task): Observable<Task>
  {
    return this.http.post<Task>(`${this.apiUrl}/tasks`,tasks);
  }

  deleteTask(id: number): Observable<any>
  {
    return this.http.delete<any>(`${this.apiUrl}/tasks/${id}`);
  }

  updateTask(id: number, task:Task): Observable<Task>
  {
     return this.http.put<Task>(`${this.apiUrl}/tasks/${id}`, task);
  }

  getTaskById(id: number): Observable<Task>
  {
    return this.http.get<Task>(`${this.apiUrl}/tasks/${id}`);
  }
}
