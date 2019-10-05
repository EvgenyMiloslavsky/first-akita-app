import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import { TodosPageComponent } from './todos/todos-page/todos-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodosComponent } from './todos/todos/todos.component';
import { FilterComponent } from './todos/filter/filter.component';
import {MatSelectModule} from '@angular/material/select';
import { TodoComponent } from './todos/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodosComponent,
    FilterComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AkitaNgDevtools.forRoot(),
    BrowserAnimationsModule,
    FlexModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
