import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  status: number; // 0 for created, 1 for completed, 2 for deleted
  creationDate: string; // formatted as 'yyyy-mm-dd'
  creationTime: string; // formatted as 'hh:mm'
}

@Component({
  selector: 'localTodolist',
  templateUrl: './local-todolist.component.html',
  styleUrls: ['./local-todolist.component.less'],
})
export class LocalTodolistComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  nextId: number = 1;
  newTaskIds: Set<number> = new Set();
  completedTaskIds: Set<number> = new Set();

  constructor(private cdRef: ChangeDetectorRef) {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.nextId =
        this.tasks.length > 0
          ? Math.max(...this.tasks.map((t) => t.id)) + 1
          : 1;
    }
  }

  ngOnInit() {}

  addTask() {
    if (
      this.newTaskTitle &&
      this.newTaskDescription &&
      !this.isTitleDuplicate(this.newTaskTitle)
    ) {
      const currentDate = new Date();
      const task: Task = {
        id: this.nextId++,
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        status: 0, // Estado creado
        creationDate: currentDate.toISOString().split('T')[0],
        creationTime: currentDate.toTimeString().split(' ')[0].slice(0, 5),
      };
  
      this.tasks.push(task);
      this.saveToLocalStorage();
      this.newTaskIds.add(task.id);
      // Cerrar el modal
      const modalElement: any = document.getElementById('addTaskModal');
      modalElement.classList.remove('show');
      document.body.classList.remove('modal-open');
      const backdrops = document.getElementsByClassName('modal-backdrop');
      if (backdrops.length) {
        document.body.removeChild(backdrops[0]);
      }
  
      this.newTaskTitle = '';
      this.newTaskDescription = '';
      
        this.cdRef.detectChanges(); 
    
  
    } else if (this.isTitleDuplicate(this.newTaskTitle)) {
      alert(
        'El título de la tarea ya existe. Por favor, introduce un título diferente.'
      );
    }
  }
  
  


  editTask(task: Task, title: string, description: string) {
    task.title = title;
    task.description = description;
    this.saveToLocalStorage();
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
        this.tasks[index].status = 2; // Marcar como eliminado

        setTimeout(() => {
            this.tasks = this.tasks.filter(task => task.id !== id);
            this.saveToLocalStorage();
        }, 1000); // Dar 1 segundo para que la animación se complete.
    }
  }

  isDeleted(taskId: number): boolean {
    const task = this.tasks.find(t => t.id === taskId);
    return task?.status === 2;
  }

  markAsCompleted(id: number) {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tasks[index].status = 1; // Marcar como completada
      this.completedTaskIds.add(id);
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  isTitleDuplicate(title: string): boolean {
    return this.tasks.some((task) => task.title === title);
  }

  isNew(id: number): boolean {
    if (this.newTaskIds.has(id)) {
      // Remueve el ID después de que se haya comprobado para que la animación no se repita
      this.newTaskIds.delete(id);
      return true;
    }
    return false;
  }

  isCompleted(id: number): boolean {
    if (this.completedTaskIds.has(id)) {
      // Remueve el ID después de que se haya comprobado para que la animación no se repita
      this.completedTaskIds.delete(id);
      return true;
    }
    return false;
  }
}
