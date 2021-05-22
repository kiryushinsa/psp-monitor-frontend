import { Component, OnInit } from '@angular/core';
import { CallsService } from 'src/app/services/calls.service';
import { Calls } from 'src/app/entity/calls';
import { CookieService } from 'ngx-cookie-service';
import {MatTableDataSource} from '@angular/material/table';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-workers-call',
  templateUrl: './workers-call.component.html',
  styleUrls: ['./workers-call.component.css']
})
export class WorkersCallComponent implements OnInit {
  id;
  calls: Calls[];

public dataSource;
displayedColumns: string[] = ['id','date','time','died','saved','affected','type','link'];

  constructor(private callsService: CallsService
    ,
    private activateRoute: ActivatedRoute) {
      this.id = activateRoute.snapshot.params['id']; }

  ngOnInit(): void {
 //  this.callsList(this.id);
 this._getElement();
  }

  private _getElement();

  private _getElement():void{
    this.callsService.getCallsListById(this.id).subscribe(
      res=>{
        this.dataSource = new MatTableDataSource(res);
      }
    )
  }

  callsList(id:number){
    this.callsService.getCallsListById(id).subscribe(
      data=>{
        this.calls = data;
        
      }
    )

  }
    


    applyFilter(event:Event){
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
