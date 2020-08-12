import { Component, OnInit } from '@angular/core';
import { Calls } from 'src/app/entity/calls';
import { CallsService } from 'src/app/services/calls.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';

declare var ymaps:any;


@Component({
  selector: 'app-input-call',
  templateUrl: './input-call.component.html',
  styleUrls: ['./input-call.component.css']
})


export class InputCallComponent implements OnInit {

  
  calls: Calls = new Calls();

  constructor(private httpClient: HttpClient,
    private callsService:CallsService) { }

    public map :any;
    public placemark :any;
    
  ngOnInit(): void {
    
    this.createMap();
   //this.httpClient.post<Calls>('http://localhost:8080/add/calls',
   // {info: 'test2',saved:2}).subscribe(data=>{ }) 
   
  }

  createMap(){

    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [55.671729, 37.479850],
        zoom: 16
      });
      this.placemark =  new ymaps.Placemark([55.671729, 37.479850]);
      this.map.geoObjects.add(this.placemark);
    });
  }


  
  save(calls: Calls){

    console.log(calls.info);
    console.log(calls.saved);
    //console.log(calls.info_local);
    //Sconsole.log(calls.time);
    //console.log(calls.date);
    console.log(calls.time_local);
    this.callsService.createCall(calls);
  }

}

  

