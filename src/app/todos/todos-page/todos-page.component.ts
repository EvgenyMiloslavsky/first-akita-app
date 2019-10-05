import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../state/todo.service';
import {Todo} from '../state/todo.model';
import {ID} from '@datorama/akita';
import {TodosQuery} from '../state/todos.query';
import {Observable} from 'rxjs';
import {initialFilters, VISIBILITY_FILTER} from '../filter/filter.model';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {
  modelName: any;
  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  filters = initialFilters;

  constructor(
    private todoService: TodoService,
    private todosQuery: TodosQuery
  ) {  }

  // combineLatestcombineLatest;

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
    console.log('Todos page Active Filters' , this.activeFilter$);
  }

  add(input: HTMLInputElement) {
    this.todoService.add(input.value);
    console.log(input.value);
    input.value = '';
  }

  complete(todo: Todo) {
    this.todoService.complete(todo);
  }

  delete(id: ID) {
    this.todoService.delete(id);
  }


  changeFilter($event: VISIBILITY_FILTER) {
    this.todoService.updateFilter($event);
  }
}
