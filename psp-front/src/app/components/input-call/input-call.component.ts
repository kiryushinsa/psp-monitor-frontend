import { Component, OnInit } from '@angular/core';
import { Calls } from 'src/app/entity/calls';
import { CallsService } from 'src/app/services/calls.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';




@Component({
  selector: 'app-input-call',
  templateUrl: './input-call.component.html',
  styleUrls: ['./input-call.component.css']
})


export class InputCallComponent implements OnInit {

  
  calls: Calls = new Calls();

  constructor(private httpClient: HttpClient,
    private callsService:CallsService) { }

   

  ngOnInit(): void {
    
   //this.httpClient.post<Calls>('http://localhost:8080/add/calls',
   // {info: 'test2',saved:2}).subscribe(data=>{ }) 
   
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

  

