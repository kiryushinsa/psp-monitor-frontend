import { Component, OnInit } from '@angular/core';
import { CallsService } from 'src/app/services/calls.service';
import { Calls } from 'src/app/entity/calls';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-calls-list',
  templateUrl: './calls-list.component.html',
  styleUrls: ['./calls-list.component.css']
})
export class CallsListComponent implements OnInit {

  calls: Calls[];
  constructor(private callsService: CallsService, 
    private cookieService: CookieService) {

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

 
}
