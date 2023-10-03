import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WorkerService } from 'src/app/services/workers/worker.service';
import { CookieService } from 'ngx-cookie-service';
import { Workers } from 'src/app/entity/workers';
import {Router, ActivatedRoute, Params} from '@angular/router';

interface Level{
  name:string;
  value:string;
}

interface Blood{
  name:string;
  value:string;
}
 



@Component({
  selector: 'app-workers-redact',
  templateUrl: './workers-redact.component.html',
  styleUrls: ['./workers-redact.component.css']
})
export class WorkersRedactComponent implements OnInit {
  worker: Workers = new Workers();
  id:number;

  levels: Level[]= [
    {name:'Спасатель', value:'Спасатель'},
    {name:'Спасатель 3 класса', value:'Спасатель 3 класса'},
    {name:'Спасатель 2 класса', value:'Спасатель 2 класса'},
    {name:'Спасатель 1 класса', value:'Спасатель 1 класса'},
    {name:'Спасатель МК', value:'Спасатель МК'},
    {name:'Без классности', value:'Без классности'},
  ]

  blood_types: Blood[]= [
    {name:'I+', value:'I+'},
    {name:'I-', value:'I-'},
    {name:'II+', value:'II+'},
    {name:'II-', value:'II-'},
    {name:'III+', value:'III+'},
    {name:'III-', value:'III-'},
    {name:'VI+', value:'VI+'},
    {name:'VI-', value:'VI-'},
  ]
  constructor(
    private httpClient: HttpClient,
    private workerService:WorkerService,
    private cookieService: CookieService,
    private activateRoute: ActivatedRoute,
  ) { 

    
    if(Number(activateRoute.snapshot.params['id'])){
        
      this.id = activateRoute.snapshot.params['id'];
      
      this.workerService.getWorkerById(this.id).subscribe(
        data =>{
          this.worker = data;
        }
      )

          }
    else{
      // TODO: Сделать алерт для не чисел
      console.warn("Error call code");
    }
  }

  ngOnInit(): void {
    this.intializeFields();
    
  }

  leveling = new FormControl(this.levels[0].value);
  bloodTypes = new FormControl(this.blood_types[0].value);

  workerForm = new FormGroup({
    first_name  : new FormControl(''),
    last_name: new FormControl(''),
    middle_name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    add_phone: new FormControl(''),
    contacts: new FormControl(''),
    
});

  update(worker: Workers){
    this.intializeFields();
    this.workerService.updateWorker(worker);
  }

  delete(id:number){
    this.workerService.deleteWorker(id);
  }

  intializeFields(){
    if(this.workerForm.get('first_name').value){     this.worker.first_name = this.workerForm.get('first_name').value; }
    if(this.workerForm.get('middle_name').value){this.worker.middle_name = this.workerForm.get('middle_name').value;}
    if(this.workerForm.get('last_name').value){this.worker.last_name = this.workerForm.get('last_name').value;}
    if(this.workerForm.get('contacts').value){this.worker.contacts = this.workerForm.get('contacts').value;}
    if(this.workerForm.get('address').value){this.worker.address = this.workerForm.get('address').value;}
    if(this.workerForm.get('add_phone').value){ this.worker.add_phone = this.workerForm.get('add_phone').value;}
    if(this.workerForm.get('phone').value){ this.worker.phone = this.workerForm.get('phone').value;}
    if(this.leveling.value){ this.worker.level = this.leveling.value;}
    if(this.bloodTypes.value){ this.worker.blood_type = this.bloodTypes.value;}

  }

 







  

}

