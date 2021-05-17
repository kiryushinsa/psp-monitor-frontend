import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Workers } from 'src/app/entity/workers';
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private baseUrl = 'http://localhost:8080/api/workers';
  private addUrl = 'localhost:8080/workers'

  constructor(
    private httpClient: HttpClient
  ) { }


  getHeaders(){
    const auth = 'Bearer_eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290Iiwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpYXQiOjE1OTkyMTUyMzEsImV4cCI6MTU5OTIxODgzMX0.vuAj6opHwPQpSIV4OJfGzy1GkBe1RaB_R1JuseHHr94';
    const Myheaders = new HttpHeaders().set('Authorization',auth);

    return Myheaders;
  }

  createWorker(worker: Workers) {
    return this.httpClient.post<Workers>('http://localhost:8080/api/workers',worker,{'headers': this.getHeaders()}).
    subscribe(data=>{ }) 
  }

  getWorkersList() : Observable<Workers[]> {
    return this.httpClient.get<GetResponse>('http://localhost:8080/api/workers',{'headers': this.getHeaders()}).pipe(
      map(response => response._embedded.worker)
    );
  }

}


interface GetResponse{
  _embedded:{
    worker: Workers[];
  }
}