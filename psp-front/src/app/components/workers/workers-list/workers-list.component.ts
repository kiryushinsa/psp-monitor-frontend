import { Component, OnInit } from '@angular/core';
import { Workers } from 'src/app/entity/workers';
import { WorkerService } from 'src/app/services/workers/worker.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  workers: Workers[];
  constructor(
    private workerService:WorkerService
  ) { 
    
  }

  ngOnInit(): void {
    this.workersList();
  }

  workersList(){
    this.workerService.getWorkersList().subscribe(
      data=>{
        this.workers = data;
      }
    )
  }

}
