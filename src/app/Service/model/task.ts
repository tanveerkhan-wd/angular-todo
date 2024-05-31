export interface ITask {
  itemId: number,
  taskName: string,
  taskDescription: string,
  dueDate: Date,
  createdOn: Date,
  isCompleted: boolean,
  tags: string,
  completedOn: Date
}

export interface ApiResponseModel {
  message: string,
  result: string,
  data: any
}

export class Task {
  itemId: number = 0;
  taskName: string = '';
  taskDescription: string = '';
  dueDate: Date = new Date();
  createdOn: Date = new Date();
  isCompleted: boolean = false;
  tags: string = '';
  completedOn: Date = new Date();
}
