import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Service } from 'src/app/entity/service';
import {TechnicService} from 'src/app/services/technics/technic.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-technic-service',
  templateUrl: './technic-service.component.html',
  styleUrls: ['./technic-service.component.css']
})
export class TechnicServiceComponent implements OnInit {
  id;
  service: Service[];
  public dataSource;
  displayedColumns: string[] = ['id','date','time','mileage','status','who_spend','link'];
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
    this.technicService.getServiceTechnicListById(this.id).subscribe(
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
