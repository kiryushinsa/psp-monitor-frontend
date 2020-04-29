import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Calls } from '../entity/calls';
import {map} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class CallsService {

  private baseUrl = 'http://localhost:8080/api/calls';
  private addUrl = 'localhost:8080/add/calls'

  

  constructor(private httpClient: HttpClient) { }

   //definition
   createCall(call: Calls) {
    return this.httpClient.post<Calls>('http://localhost:8080/add/calls',call).
    subscribe(data=>{ }) 
  }

  getCallsList() : Observable<Calls[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.call)
    );
  }
}


  

  
interface GetResponse{
  _embedded:{
    call: Calls[];
  }
}