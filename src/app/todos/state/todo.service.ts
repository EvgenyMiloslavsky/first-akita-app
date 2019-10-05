import {Injectable} from '@angular/core';
import {TodosStore} from './todos.store';
import {createTodo, Todo} from './todo.model';
import {ID} from '@datorama/akita';
import {VISIBILITY_FILTER} from '../filter/filter.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todoStore: TodosStore) {
  }

  add(title: string) {
    const todo = createTodo({id: Math.random(), title});
    this.todoStore.add(todo);
    console.log('Todo is added.', todo);
  }

  complete({id, completed}: Todo) {
    this.todoStore.update(id, {completed});
  }

  delete(id: ID) {
    this.todoStore.remove(id);
  }


  updateFilter(filter: VISIBILITY_FILTER) {
    this.todoStore.update({
      ui: {
        filter
      }
    });
  }
}
