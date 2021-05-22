import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Calls } from 'src/app/entity/calls';
import { CallsService } from 'src/app/services/calls.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel, FormGroup, FormControl, Validators, FormControlName} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {  DadataConfig, DadataType, DadataSuggestion, DadataAddress} from '@kolkov/ngx-dadata';
import { formatDate } from '@angular/common';
import { Time } from '@angular/common';
//import { MapOperator } from 'rxjs/internal/operators/map';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { WorkerService } from 'src/app/services/workers/worker.service';
import { Workers } from 'src/app/entity/workers';

import {NgxPrintModule} from 'ngx-print';
declare var ymaps:any;


@Component({
  selector: 'app-input-call',
  templateUrl: './input-call.component.html',
  styleUrls: ['./input-call.component.css']
})




export class InputCallComponent implements OnInit {
  
  calls: Calls = new Calls();
  work: Workers[];
  //! участок chips--------------------------------------------
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  workerCtrl = new FormControl();
  filteredworkers: Observable<string[]>;
  workers: any = [];
  allworkers: any = []

  @ViewChild('workerInput') workerInput: ElementRef;


  //!-------------------------------- конец участка
  constructor(private httpClient: HttpClient,
    private callsService:CallsService,
    private cookieService: CookieService,
    private workerService:WorkerService,) { 

      this.filteredworkers = this.workerCtrl.valueChanges.pipe(
        startWith(null),
        map((worker: string | null) => worker ? this._filter(worker) : this.allworkers.slice()));

  
      
    }
    // !участок кода с чипсом

    add(event: MatChipInputEvent): void {
      debugger
      const input = event.input;
      const value = event.value;
      // Add our worker
      if ((value || '').trim()) {
        this.workers.push({
          id:Math.random(),
          last_name:value.trim()
        });
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
  
      this.workerCtrl.setValue(null);

      console.log(this.workers);
    }
  
    remove(worker, indx): void {
      this.workers.splice(indx, 1);
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.workers.push(event.option.value);
      this.workerInput.nativeElement.value = '';
      this.workerCtrl.setValue(null);
    }
  
    private _filter(value: any): any[] {
      return this.allworkers.filter(worker => worker.last_name.toString().toLowerCase().includes(value.toLowerCase()));
    }

    //! конец участка кода с чипсом ----------------------------------------------------------------------------

  public map :any;
  public placemark :any;


  configAddress: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.address,
    locations: [
      {
        city: 'Москва',
      }
    ]
  };

  

  callForm = new FormGroup({
    time  : new FormControl(''),
    date: new FormControl(''),
    info: new FormControl(''),
    address: new FormControl(''),
    whoSend: new FormControl(''),
    whoAccept: new FormControl(''),
    time_gone: new FormControl(''),
    time_arrive: new FormControl(''),
    time_local: new FormControl(''),
    time_destroy: new FormControl(''),
    time_back: new FormControl(''),
    info_local: new FormControl(''),
    imageUrl: new FormControl(''),
    died: new FormControl(''),
    saved: new FormControl(''),
    affected: new FormControl('')
});



  ngOnInit(): void {
   
    this.setTimeDate();
    this.getCookies();
    this.createMap('55.671729', '37.479850'); //TODO: base position of the map fixed to position of squad
    
    
    this._getElement(); //!ЧИПС
  }



    // !участок кода с чипсом

   
    private _getElement():void{
      this.workerService.getWorkersList().subscribe(
        res=>{
          this.allworkers=res;
        }
      )
    }
  
      //! конец участка кода с чипсом ----


 
  onAddressSelected(event: DadataSuggestion){
    const addressData = event.data as DadataAddress;
    console.log(addressData);
    this.map.destroy(); //! удалить карту перед созданием. плавное передвижение не работает 
    this.createMap(addressData.geo_lat ,addressData.geo_lon);
  }
  
  deleteCookies(){
      this.cookieService.deleteAll();
  }

  setTimeDate(){
      // set current date and time in form control
      this.callForm.patchValue({
        date: [formatDate(new Date(Date.now()),"yyyy-MM-dd",'en' )],
        time: formatDate(new Date(Date.now()),"HH:MM:ss",'en' )
      })
  }
  
  getCookies(){

      this.callForm.patchValue({
        info: this.cookieService.get('info'),
        whoSend : this.cookieService.get('whoSend'),
        whoAccept : this.cookieService.get('whoAccept'),
        address : this.cookieService.get('address'),
        info_local: this.cookieService.get('info_local'),
        time_gone: this.cookieService.get('time_gone'),
        time_arrive: this.cookieService.get('time_arrive'),
        time_local: this.cookieService.get('time_local'),
        time_destroy: this.cookieService.get('time_destroy'),
        time_back: this.cookieService.get('time_back'),
        died: this.cookieService.get('died'),
        saved: this.cookieService.get('saved'),
        affected: this.cookieService.get('affected')
      })
  }

  saveCookies(){
     this.cookieService.set('info', this.callForm.get('info').value);
     this.cookieService.set('whoSend', this.callForm.get('whoSend').value);
     this.cookieService.set('whoAccept', this.callForm.get('whoAccept').value);
     this.cookieService.set('address', this.callForm.get('address').value);
     this.cookieService.set('info_local', this.callForm.get('info_local').value);
     this.cookieService.set('time_gone', this.callForm.get('time_gone').value);
     this.cookieService.set('time_arrive', this.callForm.get('time_arrive').value);
     this.cookieService.set('time_local', this.callForm.get('time_local').value);
     this.cookieService.set('time_destroy', this.callForm.get('time_destroy').value);
     this.cookieService.set('time_back', this.callForm.get('time_back').value); 
     this.cookieService.set('died',this.callForm.get('died').value);
     this.cookieService.set('saved', this.callForm.get('saved').value);
     this.cookieService.set('affected', this.callForm.get('affected').value);  
     
  }

  createMap(lat: string, lon: string){
//cso is 55.671729, 37.479850
  
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map',
       {
        center: [lat, lon],
        zoom: 17
      });
      
      this.placemark =  new ymaps.Placemark([lat, lon]); // set placemark
      this.map.geoObjects.add(this.placemark);
    });
  }


  intializeCall(){
    this.calls.info = this.callForm.get('info').value;
    this.calls.time = this.callForm.get('time').value;
    this.calls.date = new Date ( this.callForm.get('date').value);
    this.calls.whoSend = this.callForm.get('whoSend').value;
    this.calls.whoAccept = this.callForm.get('whoAccept').value;
    this.calls.address = this.callForm.get('address').value;
    this.calls.info_local = this.callForm.get('info_local').value;
    this.calls.time_gone = this.callForm.get('time_gone').value;
    this.calls.time_arrive = this.callForm.get('time_arrive').value;
    this.calls.time_local = this.callForm.get('time_local').value;
    this.calls.time_destroy = this.callForm.get('time_destroy').value;
    this.calls.time_back = this.callForm.get('time_back').value; 
    this.calls.died = this.callForm.get('died').value;
    this.calls.saved = this.callForm.get('saved').value;
    this.calls.affected = this.callForm.get('affected').value;
    //this.calls.squad = 'http://localhost:8080/api/squad/1'  ;
  }
 
  save(calls: Calls){
    this.intializeCall(); // *set calls fields from form.controls
    this.callsService.createCall(calls);
    this.deleteCookies();
    this.callForm.reset();
    this.setTimeDate();
  }

  setTimeToFormControl(field : string){

    if(field == 'time_gone'){
      this.callForm.controls.time_gone.setValue(formatDate(new Date(Date.now()),"HH:MM:ss",'en' ))
    }
    else if(field == 'time_arrive'){
      this.callForm.controls.time_arrive.setValue(formatDate(new Date(Date.now()),"HH:MM:ss",'en' ))
    }
    else if(field == 'time_local'){
      this.callForm.controls.time_local.setValue(formatDate(new Date(Date.now()),"HH:MM:ss",'en' ))
    }
    else if(field == 'time_destroy'){
      this.callForm.controls.time_destroy.setValue(formatDate(new Date(Date.now()),"HH:MM:ss",'en' ))
    }
    else if(field == 'time_back'){
      this.callForm.controls.time_back.setValue(formatDate(new Date(Date.now()),"HH:MM:ss",'en' ))
    }
    else {
      console.warn("Wrong argument in: setTimeToFormControl method")}
    this.saveCookies();
  }
  
  
}





  

