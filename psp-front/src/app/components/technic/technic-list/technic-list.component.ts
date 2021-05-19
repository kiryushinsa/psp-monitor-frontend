import { Component, OnInit } from '@angular/core';
import {TechnicService} from 'src/app/services/technics/technic.service'
import {Technic} from 'src/app/entity/technic'
@Component({
  selector: 'app-technic-list',
  templateUrl: './technic-list.component.html',
  styleUrls: ['./technic-list.component.css']
})
export class TechnicListComponent implements OnInit {

  technics: Technic[];
  constructor(
    private technicService: TechnicService,

  ) { }

  ngOnInit(): void {
    this.technicList();
  }

  technicList(){
    this.technicService.getTechnicList().subscribe(
      data=>{
        this.technics=data;
      }
    )
  }

}
