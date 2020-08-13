import { Component, OnInit } from '@angular/core';
import { Calls } from 'src/app/entity/calls';
import { CallsService } from 'src/app/services/calls.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NgxDadataModule, DadataConfig, DadataType,DadataSuggestion, DadataParty} from '@kolkov/ngx-dadata';


declare var ymaps:any;


@Component({
  selector: 'app-input-call',
  templateUrl: './input-call.component.html',
  styleUrls: ['./input-call.component.css']
})



export class InputCallComponent implements OnInit {
  
  calls: Calls = new Calls();
  private cookieValue: string; 

  constructor(private httpClient: HttpClient,
    private callsService:CallsService,
    private cookieService: CookieService) { }

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

    this.getCookies();
   // this.cookieService.set( 'Test', 'Hello World' );
    this.createMap();
   //this.httpClient.post<Calls>('http://localhost:8080/add/calls',
   // {info: 'test2',saved:2}).subscribe(data=>{ }) 
  }



  deleteCookies(){
      this.cookieService.deleteAll();
  }


  getCookies(){
     this.calls.info = this.cookieService.get('info');
     this.calls.whoSend = this.cookieService.get('whoSend');
     this.calls.whoAccept = this.cookieService.get('whoAccept');
     this.calls.address = this.cookieService.get('address');
  }

  saveCookies(){
     this.cookieService.set('info', this.calls.info);
     this.cookieService.set('whoSend', this.calls.whoSend);
     this.cookieService.set('whoAccept', this.calls.whoAccept );
     this.cookieService.set('address', this.calls.address);
  }

  createMap(){

    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [55.671729, 37.479850],
        zoom: 16
      });
      this.placemark =  new ymaps.Placemark([55.671729, 37.479850]); // set placemark
      this.map.geoObjects.add(this.placemark);
    });
  }


  
  save(calls: Calls){
    this.callsService.createCall(calls);
    this.deleteCookies();
    
  }

  
}



  

