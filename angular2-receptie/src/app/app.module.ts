import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { ListReceptComponent } from './list-recept/list-recept.component';

const appRoutes: Routes = [
  { path: 'add', component: AddReceptComponent },
  { path: 'list', component: ListReceptComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddReceptComponent,
    ListReceptComponent
  ],
  imports: [
    BrowserModule, 
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
