import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TodoFilter, VISIBILITY_FILTER} from './filter.model';
import {FormControl} from '@angular/forms';
import {untilDestroyed} from '@orchestrator/ngx-until-destroyed';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-todos-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit, OnDestroy {
  @Input() filters: TodoFilter[];
  @Input() active: VISIBILITY_FILTER;
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  control: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.control = new FormControl(this.active);
    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(c => {
      this.update.emit(c);
    });
  }

  ngOnDestroy() {
  }
}
