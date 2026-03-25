import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  dueDate: Date;
  status: string;
  createdAt: Date;
  completedAt?: Date;
}

@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {
  //core data
  tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Angular Project',
      description: 'Finish the task manager application using Angular framework.',
      category: 'Education',
      priority: 'High',
      dueDate: new Date('2024-07-15'),
      status: 'in-progress',
      createdAt: new Date('2024-06-01'),
    },
    {
      id: 2,
      title: 'Grocery Shopping',
      description: 'Buy groceries for the week including fruits, vegetables, and dairy products.',
      category: 'shopping',
      priority: 'Medium',
      dueDate: new Date('2024-06-10'),
      status: 'pending',
      createdAt: new Date('2024-06-05'),
    },
    {
      id: 3,
      title: 'Team Meeting',
      description: 'Discuss project updates and next steps with the team.',
      category: 'work',
      priority: 'High',
      dueDate: new Date('2024-06-12'),
      status: 'completed',
      createdAt: new Date('2024-06-01'),
    }
  ];

  //Dropdown Options 
  categories = ['Work', 'Personal', 'Shopping', 'Education', 'Health', 'Finance', 'Other'];
  priorities = ['Low', 'Medium', 'High', 'Urgent'];
  statuses = ['pending', 'in-progress', 'completed', 'cancelled'];

  //Form Data
  newTask: {
    title: string;
    description: string;
    category: string;
    priority: string;
    dueDate: string | Date;
    status: string;
  } =
    {
      title: '',
      description: '',
      category: '',
      priority: 'medium',
      dueDate: '',
      status: 'pending'
    };

    //Filter controls 
    filterStatus: string = 'all';
    filterCategory: string = 'all';
    filterPriority: string = 'all';
    showCompleted: boolean = true;
    
}
