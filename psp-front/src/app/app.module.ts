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
import { InputCallComponent } from './components/input-call/input-call.component';
import { RedactCallComponent } from './components/redact-call/redact-call.component'

const routes: Routes=[
  {path: 'calls/:id', component: RedactCallComponent},
  {path: 'input', component: InputCallComponent},
  {path: 'calls', component: CallsListComponent},
  {path: 'redactCall', component: RedactCallComponent},
  {path: '', redirectTo: '/calls',pathMatch: 'full'},
  {path: '**', redirectTo: '/calls',pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    CallsListComponent,
    InputCallComponent,
    RedactCallComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDadataModule, //* module for address forms

  ],
  providers: [CallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
