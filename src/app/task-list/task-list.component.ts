import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from '../model/task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {

  tasksInOrder: Task[] = []
  @Input() loading = false

  @Output()
  onPinTask = new EventEmitter<Event>()
  @Output()
  onArchiveTask = new EventEmitter<Event>()

  @Input()
  set tasks (arr: Task[]) {
    const initialTasks = [
      ...arr.filter(task => task.state === 'TASK_PINNED'),
      ...arr.filter(task => task.state !== 'TASK_PINNED')
    ];
    const filteredTasks = initialTasks.filter(
      task => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'
    );

    this.tasksInOrder = filteredTasks.filter(
      task => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'
    );

  }

}
