import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {TechnicService} from 'src/app/services/technics/technic.service'
import {Technic} from 'src/app/entity/technic'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-technic-redact',
  templateUrl: './technic-redact.component.html',
  styleUrls: ['./technic-redact.component.css']
})
export class TechnicRedactComponent implements OnInit {
  technic: Technic = new Technic();
  id;
  constructor(
    private httpClient: HttpClient,
    private technicService: TechnicService,
    private cookieService: CookieService,
    private activateRoute: ActivatedRoute,
  ) { 
    if(Number(activateRoute.snapshot.params['id'])){
        
      this.id = activateRoute.snapshot.params['id'];
      
      this.technicService.getTechnicById(this.id).subscribe(
        data =>{
          this.technic = data;
        }
      )

          }
    else{
      // TODO: Сделать алерт для не чисел
      console.warn("Error call code");
    }
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
  });

    intializeTechnic(){
      if(this.technicForm.get('name').value){this.technic.name= this.technicForm.get('name').value;}
      if(this.technicForm.get('start_date').value){this.technic.start_date = new Date ( this.technicForm.get('start_date').value);}
      if(this.technicForm.get('start_mileage').value){this.technic.start_mileage = this.technicForm.get('start_mileage').value;}
      if(this.technicForm.get('coef').value){this.technic.coef = this.technicForm.get('coef').value;}
      if(this.description.value){this.technic.description = this.description.value;}
      if(this.characteristics.value){ this.technic.characteristic = this.characteristics.value;}
        this.technic.squad = 'http://localhost:8080/api/squad/1';
      
      
    }

    update(technic){
      this.intializeTechnic();
      this.technicService.updateTechnic(technic);
    }
    delete(id:number)
    {
      this.technicService.deleteTechnic(id);
    }
}
