import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallsListComponent } from './components/calls-list/calls-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CallsService } from './services/calls.service';
import {Routes, RouterModule} from '@angular/router'

const routes: Routes=[
  {path: 'calls/:id', component: CallsListComponent},
  {path: 'calls', component: CallsListComponent},
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    CallsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
