import { Component, OnInit } from '@angular/core';
import { Calls } from 'src/app/entity/calls';
import {MatTableDataSource} from '@angular/material/table';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CallsService } from 'src/app/services/calls.service';
import { TechnicService } from 'src/app/services/technics/technic.service';
@Component({
  selector: 'app-technic-calls',
  templateUrl: './technic-calls.component.html',
  styleUrls: ['./technic-calls.component.css']
})
export class TechnicCallsComponent implements OnInit {
  id;
  calls: Calls[];

  public dataSource;
  displayedColumns: string[] = ['id','time_work','description','link'];

  constructor(
    private technicService: TechnicService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id']; 
   }

  ngOnInit(): void {
    this._getElement();
  }

  private _getElement():void{
    this.technicService.getUseTechnicListById(this.id).subscribe(
      res=>{
        this.dataSource = new MatTableDataSource(res);
      }
    )
  }


    


    applyFilter(event:Event){
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
