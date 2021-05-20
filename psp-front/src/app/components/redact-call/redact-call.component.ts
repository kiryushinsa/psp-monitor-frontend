import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Calls } from 'src/app/entity/calls';
import { CallsService } from 'src/app/services/calls.service';
import { NgForm, NgModel, FormGroup, FormControl, Validators, FormControlName} from '@angular/forms';
import {  DadataConfig, DadataType, DadataSuggestion, DadataAddress} from '@kolkov/ngx-dadata';
import { formatDate } from '@angular/common';
import {Router, ActivatedRoute, Params} from '@angular/router';
declare var ymaps:any;

@Component({
  selector: 'app-redact-call',
  templateUrl: './redact-call.component.html',
  styleUrls: ['./redact-call.component.css']
})
export class RedactCallComponent implements OnInit {

  calls : Calls = new Calls();
  id:number;


  constructor( private callsService:CallsService,
    private cookieService: CookieService,
    private activateRoute: ActivatedRoute,
    ) { 

      if(Number(activateRoute.snapshot.params['id'])){
        
        this.id = activateRoute.snapshot.params['id'];
        
        this.callsService.getCallById(this.id).subscribe(
          data =>{
            this.calls = data;
          }
        )

            }
      else{
        // TODO: Сделать алерт для не чисел
        console.warn("Error call code");
      }
    }
    
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

  ngOnInit(): void {
    //this.getCall();
    this.intializeFields();
    this.createMap('55.671729', '37.479850');

   

  }

  /*getCall(){
    const id = Number(this.cookieService.get('redId'));
    this.callsService.getCallById(id).subscribe(
      data =>{
       this.call = data;
       this.callForm.controls.address.setValue(this.call.address);//* manual add because in html 
       //*get error with element <ngx-dadata>
      }
    )
  }*/
  
  
  
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

intializeFields() {
   

    if(this.callForm.get('info').value)
    {
    this.calls.info = this.callForm.get('info').value;
    }
    if(this.callForm.get('time').value){this.calls.time = this.callForm.get('time').value;}
    if(this.callForm.get('date').value){ this.calls.date = new Date ( this.callForm.get('date').value);}
    if(this.callForm.get('whoSend').value){ this.calls.whoSend = this.callForm.get('whoSend').value;}
    if(this.callForm.get('whoAccept').value){ this.calls.whoAccept = this.callForm.get('whoAccept').value;}
    //this.calls.address = this.callForm.get('address').value;}
    if(this.callForm.get('info_local').value){  this.calls.info_local = this.callForm.get('info_local').value;}
    if(this.callForm.get('time_gone').value){  this.calls.time_gone = this.callForm.get('time_gone').value;}
    if(this.callForm.get('time_arrive').value){ this.calls.time_arrive = this.callForm.get('time_arrive').value;}
    if(this.callForm.get('time_local').value){ this.calls.time_local = this.callForm.get('time_local').value;}
    if(this.callForm.get('time_destroy').value){ this.calls.time_destroy = this.callForm.get('time_destroy').value;}
    if(this.callForm.get('time_back').value){ this.calls.time_back = this.callForm.get('time_back').value; }
    if(this.callForm.get('died').value){ this.calls.died = this.callForm.get('died').value;}
    if(this.callForm.get('saved').value){ this.calls.saved = this.callForm.get('saved').value;}
    if(this.callForm.get('affected').value){ this.calls.affected = this.callForm.get('affected').value;}
    
}


update(calls: Calls){
  this.intializeFields();
  this.callsService.updateCall(calls);
    
}
delete(id: number){
  this.callsService.deleteCall(id);
}


// ** Инициализация и обработка карты

onAddressSelected(event: DadataSuggestion){
  const addressData = event.data as DadataAddress;
  this.map.destroy(); //! удалить карту перед созданием. плавное передвижение не работает 
  this.createMap(addressData.geo_lat ,addressData.geo_lon);
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

//*-----------------


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
  }

}
