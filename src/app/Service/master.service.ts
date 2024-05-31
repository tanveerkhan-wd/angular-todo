import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel, Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl = 'https://freeapi.miniprojectideas.com/api/JWT/';
  constructor(
    private http: HttpClient
  ) { }

  getAllTaskList(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(this.apiUrl + 'GetAllTaskList');
  }

  createNewTask(task: Task): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(this.apiUrl + 'CreateNewTask', task);
  }

  updateTask(task: Task): Observable<ApiResponseModel> {
    return this.http.put<ApiResponseModel>(this.apiUrl + 'UpdateTask', task);
  }

  deleteTask(itemId: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(this.apiUrl + 'DeleteTask?itemId=' + itemId);
  }
}
