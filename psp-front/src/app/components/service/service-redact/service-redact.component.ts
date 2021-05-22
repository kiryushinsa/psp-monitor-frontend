import { Component, OnInit } from '@angular/core';
import {TechnicService} from 'src/app/services/technics/technic.service';
import { Service } from 'src/app/entity/service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-service-redact',
  templateUrl: './service-redact.component.html',
  styleUrls: ['./service-redact.component.css']
})
export class ServiceRedactComponent implements OnInit {
  service: Service = new Service();

  id: number;
  constructor(private activateRoute: ActivatedRoute,
    private technicService: TechnicService,
    ) { 
      
      if(Number(activateRoute.snapshot.params['id'])){
        
      this.id = activateRoute.snapshot.params['id'];
      
      this.technicService.getServiceById(this.id).subscribe(
        data =>{
          this.service = data;
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

  serviceForm = new FormGroup({
    mileage: new FormControl(''),
    //status: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    who_spend: new FormControl('')
  });

  update(service){
    this.intializeService();
    this.technicService.updateService(service);
  }
  delete(id){
    this.technicService.deleteService(id);
  }

  intializeService(){
    if(this.description.value){this.service.description = this.description.value;}
      if(this.serviceForm.get('mileage').value){this.service.mileage = this.serviceForm.get('mileage').value;}
      if(this.serviceForm.get('date').value){this.service.date = new Date(this.serviceForm.get('date').value);}
      if(this.serviceForm.get('time').value){this.service.time = this.serviceForm.get('time').value;}
      if(this.serviceForm.get('who_spend').value){this.service.who_spend = this.serviceForm.get('who_spend').value;}
      //if(){this.service.technic = 'http://localhost:8080/api/technic/'+String(this.id);}
  }
}
