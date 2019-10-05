import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Todo} from '../state/todo.model';
import {ID} from '@datorama/akita';
import {FormControl} from '@angular/forms';
import {untilDestroyed} from '@orchestrator/ngx-until-destroyed';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  control: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);
    console.log(this.todo.completed);
    this.control.valueChanges.
    pipe(untilDestroyed(this)).
    subscribe((completed: boolean) => this.complete.emit({...this.todo, completed}));
  }

  ngOnDestroy(): void {
  }


}
