import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/entity/service';
import { CookieService } from 'ngx-cookie-service';
import {TechnicService} from 'src/app/services/technics/technic.service'
import {Technic} from 'src/app/entity/technic'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {

  service: Service = new Service();

  id: number;
  constructor(private activateRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private technicService: TechnicService,
    private cookieService: CookieService,
  ) { 

    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.id);
    this.setTimeDate();
  }
  
  description = new FormControl();

  serviceForm = new FormGroup({
    mileage: new FormControl(''),
    //status: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    who_spend: new FormControl('')
  })

  intializeService(){
    this.service.description = this.description.value;
    this.service.mileage = this.serviceForm.get('mileage').value;
    this.service.date = new Date(this.serviceForm.get('date').value);
    this.service.time = this.serviceForm.get('time').value;
    this.service.who_spend = this.serviceForm.get('who_spend').value;
    this.service.technic = 'http://localhost:8080/api/technic/'+String(this.id);
  }

  save(service: Service){
    this.intializeService();
    this.technicService.createService(service);
    this.serviceForm.reset();
    this.setTimeDate();
  }

  setTimeDate(){
    // set current date and time in form control
    this.serviceForm.patchValue({
      date: [formatDate(new Date(Date.now()),"yyyy-MM-dd",'en' )],
      time: formatDate(new Date(Date.now()),"HH:MM:ss",'en' )
    })
}

}
