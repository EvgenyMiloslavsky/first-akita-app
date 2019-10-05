import { TestBed } from '@angular/core/testing';

import { TodoService } from '../../../../todos/state/todo.service';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
