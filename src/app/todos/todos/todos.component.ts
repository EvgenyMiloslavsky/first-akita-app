import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../state/todo.model';
import {ID} from '@datorama/akita';
import {TodoService} from '../state/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() delete = new EventEmitter<Todo>();
  @Output() complete = new EventEmitter<ID>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

}
