import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Level{
  name:string;
  values:string;
}


@Component({
  selector: 'app-workers-create',
  templateUrl: './workers-create.component.html',
  styleUrls: ['./workers-create.component.css']
})



export class WorkersCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
  }
 

  levels: Level[]=[
      {name:'Спасатель', values:'rescuer'},
      {name:'Спасатель 3 класса', values:'rescuer2'},
      {name:'Спасатель 2 класса', values:'rescuer3'},
      {name:'Спасатель 1 класса', values:'rescuer4'},
      {name:'Спасатель МК', values:'rescuer5'},
      {name:'Без классности', values:'rescuer6'},
  ];

}
