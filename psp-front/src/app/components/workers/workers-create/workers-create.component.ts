import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WorkerService } from 'src/app/services/workers/worker.service';
import { CookieService } from 'ngx-cookie-service';
import { Workers } from 'src/app/entity/workers';

interface Level{
  name:string;
  value:string;
}

interface Blood{
  name:string;
  value:string;
}

interface Status{
  name:string;
  value:string;
}
 

@Component({
  selector: 'app-workers-create',
  templateUrl: './workers-create.component.html',
  styleUrls: ['./workers-create.component.css']
})



export class WorkersCreateComponent implements OnInit {

 
  worker: Workers = new Workers();

  // !-----          upload image test         ---------

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  // !-----     end     upload image test         ---------



  constructor(
    private httpClient: HttpClient,
    private workerService:WorkerService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
 
  }

 // !-----          upload image test         ---------

 fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.preview();
}

preview() {
// Show preview 
var mimeType = this.fileData.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

var reader = new FileReader();      
reader.readAsDataURL(this.fileData); 
reader.onload = (_event) => { 
  this.previewUrl = reader.result; 
}
}

onSubmit() {
  console.log("oNSUBMIT");
}
// !-----     end     upload image test         ---------





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

  levels: Level[]= [
    {name:'Спасатель', value:'Спасатель'},
    {name:'Спасатель 3 класса', value:'Спасатель 3 класса'},
    {name:'Спасатель 2 класса', value:'Спасатель 2 класса'},
    {name:'Спасатель 1 класса', value:'Спасатель 1 класса'},
    {name:'Спасатель МК', value:'Спасатель МК'},
    {name:'Без классности', value:'recruiter'},
  ]

  statuses: Status[]= [
    {name:'В расчете', value:'В расчете'},
    {name:'В отпуске', value:'В отпуске'},
    {name:'Заболел', value:'Заболел'},

  ]

  stat = new FormControl(this.statuses[0].value);
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

  intializeWorker(){
    this.worker.first_name = this.workerForm.get('first_name').value;
    this.worker.middle_name = this.workerForm.get('middle_name').value;
    this.worker.last_name = this.workerForm.get('last_name').value;
    this.worker.contacts = this.workerForm.get('contacts').value;
    this.worker.address = this.workerForm.get('address').value;
    this.worker.add_phone = this.workerForm.get('add_phone').value;
    this.worker.phone = this.workerForm.get('phone').value;
    this.worker.level = this.leveling.value;
    this.worker.blood_type = this.bloodTypes.value;

  }

  save(worker){
    this.intializeWorker();
    this.workerService.createWorker(worker);
    this.workerForm.reset();

  }


}

