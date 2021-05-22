import { Component, OnInit } from '@angular/core';
import { CallsService } from 'src/app/services/calls.service';
import { Calls } from 'src/app/entity/calls';
import { CookieService } from 'ngx-cookie-service';

import {animate, state, style, transition, trigger} from '@angular/animations';



@Component({
  selector: 'app-calls-list',
  templateUrl: './calls-list.component.html',
  styleUrls: ['./calls-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class CallsListComponent implements OnInit {

  calls: Calls[];
  columnsToHeader = ['Дата', 'Время', 'Адрес прибытия','Адрес','Тип'];
  //columnsToDisplay = ['date','time','address'];
  expandedElement: Calls | null;

  columnsToDisplay: string[] = ['date', 'time','address','type'];

  constructor(private callsService: CallsService, 
    private cookieService: CookieService) {

      this.callsList();

   }

  ngOnInit(): void {
    this.callsList();
    
  
  }

  callsList(){
    this.callsService.getCallsList().subscribe(
      data=>{
        this.calls = data;
       
      }
    )
    
  }

  delete(calls: Calls){
    this.callsService.deleteCall(calls.id);
    location.reload();
  }
  update(calls: Calls){
    this.cookieService.set('redId', String(calls.id));
  }


  tableDef: Array<any> = [
    {
      key: 'date',
      header: 'Дата',
      className: 'something'
    },    {
      key: 'time',
      header: 'Время',
      className: 'anElement'
    },  
    {
      key: 'address',
      header: 'Адрес',
      className: 'anElement'
    },
    {
      key: 'type',
      header: 'Тип',
      className: 'anElement'
    }, 
  ]
 
}




export interface Short{
    info: string;
    date: string;
    time: string;
    address: string; 
}


