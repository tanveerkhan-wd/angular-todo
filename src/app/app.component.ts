import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from './Service/master.service';
import { ApiResponseModel, ITask, Task } from './Service/model/task';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  masterService = inject(MasterService);
  taskList: ITask[] = [];
  activeTab: string = 'tab-1';
  task: Task = new Task();

  ngOnInit(): void {
    this.loadAllTaskList();
  }

  loadAllTaskList() {
    this.masterService.getAllTaskList().subscribe((res: ApiResponseModel) => {
      this.taskList = res.data;
    });
  }

  addTask() {
    this.masterService.createNewTask(this.task).subscribe((res: ApiResponseModel) => {
      this.task = new Task();
      this.loadAllTaskList();
      alert('Task added successfully');
    },
    (error) => {
      alert('Error while adding task');
    }
  );
  }

  updateTask(task: Task, isCompleted: boolean) {
    task.isCompleted = isCompleted;
    this.masterService.updateTask(task).subscribe((res: ApiResponseModel) => {
      this.loadAllTaskList();
      alert('Task updated successfully');
    },
    (error) => {
      alert('Error while updating task');
    });
  }

  deleteTask(itemId: number) {
    this.masterService.deleteTask(itemId).subscribe((res: ApiResponseModel) => {
      this.loadAllTaskList();
      alert('Task deleted successfully');
    },
    (error) => {
      alert('Error while deleting task');
    });
  }

  changeTab(tabName: string) {
    if (tabName === 'tab-1') {
      this.activeTab = 'tab-1';
    }
    if (tabName === 'tab-2') {
      this.activeTab = 'tab-2';
    }
    if (tabName === 'tab-3') {
      this.activeTab = 'tab-3';
    }
  }
}
