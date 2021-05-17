import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {TechnicService} from 'src/app/services/technics/technic.service'
import {Technic} from 'src/app/entity/technic'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-technic-create',
  templateUrl: './technic-create.component.html',
  styleUrls: ['./technic-create.component.css']
})
export class TechnicCreateComponent implements OnInit {

  technic: Technic = new Technic();

  constructor(
    private httpClient: HttpClient,
    private technicService: TechnicService,
    private cookieService: CookieService
  ) {
    
   }

  ngOnInit(): void {
  }

  description = new FormControl();
  characteristics = new FormControl();

  technicForm = new FormGroup({
    start_date: new FormControl(''),
    name: new FormControl(''),
    start_mileage: new FormControl(''),
    current_mileage: new FormControl(''),
    coef: new FormControl(''),
    description: new FormControl(''),
   // characteristics: new FormControl(''),
  });

  intializeTechnic(){
    this.technic.name= this.technicForm.get('name').value;
    this.technic.start_date = new Date ( this.technicForm.get('start_date').value);
    this.technic.start_mileage = this.technicForm.get('start_mileage').value;
    this.technic.coef = this.technicForm.get('coef').value;
    this.technic.description = this.description.value;
    this.technic.characteristics = this.characteristics.value;
    this.technic.squad = 'http://localhost:8080/api/squad/1';
    
    
  }

  save(technic){
    this.intializeTechnic();
    
    this.technicService.createTechnic(technic);
  }
}
