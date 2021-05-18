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
import { RedactCallComponent } from './components/redact-call/redact-call.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatTableModule, } from '@angular/material/table';
import { WorkersListComponent } from './components/workers/workers-list/workers-list.component';
import { WorkersCreateComponent } from './components/workers/workers-create/workers-create.component'  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { WorkShiftsComponent } from './components/workers/work-shifts/work-shifts.component';
import { WorksShift } from './entity/works-shift';
import { TechnicCreateComponent } from './components/technic/technic-create/technic-create.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ServiceCreateComponent } from './components/service/service-create/service-create.component';
import {MatExpansionModule} from '@angular/material/expansion';
const routes: Routes=[
  {path: 'calls/:id', component: RedactCallComponent},
  {path: 'input', component: InputCallComponent},
  {path: 'calls', component: CallsListComponent},
  {path: 'redactCall', component: RedactCallComponent},
  {path:'workers', component: WorkersListComponent},
  {path: 'workers-create', component: WorkersCreateComponent},
  {path: 'work-shift-create', component:  WorkShiftsComponent},
  {path:'technic-create',component:TechnicCreateComponent},
  {path:'service-create/:id',component:ServiceCreateComponent},
  {path:'service-create',component:ServiceCreateComponent},
  {path: '', redirectTo: '/calls',pathMatch: 'full'},
  {path: '**', redirectTo: '/calls',pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    CallsListComponent,
    InputCallComponent,
    RedactCallComponent,
    WorkersListComponent,
    WorkersCreateComponent,
    WorkShiftsComponent,
    TechnicCreateComponent,
    ServiceCreateComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDadataModule,
    BrowserAnimationsModule, //* module for address forms
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,MatExpansionModule,

  ],
  providers: [CallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
