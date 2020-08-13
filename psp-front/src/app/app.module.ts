import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

   //* module for address forms
import { NgxDadataModule } from '@kolkov/ngx-dadata';

  //* module for cookie service 
import { CookieService } from 'ngx-cookie-service';



import { AppComponent } from './app.component';
import { CallsListComponent } from './components/calls-list/calls-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CallsService } from './services/calls.service';
import {Routes, RouterModule} from '@angular/router';
import { InputCallComponent } from './components/input-call/input-call.component'

const routes: Routes=[
  {path: 'calls/:id', component: CallsListComponent},
  {path: 'input', component: InputCallComponent},
  {path: 'calls', component: CallsListComponent},
  {path: '', redirectTo: '/calls',pathMatch: 'full'},
  {path: '**', redirectTo: '/calls',pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    CallsListComponent,
    InputCallComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDadataModule, //* module for address forms

  ],
  providers: [CallsService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
