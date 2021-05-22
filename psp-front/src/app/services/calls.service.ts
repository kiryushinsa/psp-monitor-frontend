import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, from } from 'rxjs';

import { Calls } from '../entity/calls';
import {map, catchError} from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})
export class CallsService {

  private baseUrl = 'http://localhost:8080/api/calls';
  private addUrl = 'localhost:8080/add/calls'

  callid;

  constructor(private httpClient: HttpClient) { }

   //definition
   createCall(call: Calls) {
    return this.httpClient.post<Calls>('http://localhost:8080/add/calls',call,{'headers': this.getHeaders()}).
    subscribe(data=>{ }) 
  }


  getHeaders(){
    const auth = 'Bearer_eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290Iiwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpYXQiOjE1OTkyMTUyMzEsImV4cCI6MTU5OTIxODgzMX0.vuAj6opHwPQpSIV4OJfGzy1GkBe1RaB_R1JuseHHr94';
    const Myheaders = new HttpHeaders().set('Authorization',auth);

    return Myheaders;
  }

  getCallsList() : Observable<Calls[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl,{'headers': this.getHeaders()}).pipe(
      map(response => response._embedded.call)
    );
  }


  getCallsListById(id:number): Observable<Calls[]>{
    const url = 'http://localhost:8080/api/workers/' + id + '/worker_calls';
    return this.httpClient.get<GetResponse>(url,{'headers': this.getHeaders()}).pipe(
      map(response => response._embedded.call)
    );
  }


  deleteCall(id: number) {
    const url = 'http://localhost:8080/add/calls/' + id
    return this.httpClient.delete(url,{'headers': this.getHeaders()}).
    subscribe(data=>{ }) 
    
  } 

  updateCall(call:Calls){
    const url = "http://localhost:8080/api/calls/" + call.id;
   

    return this.httpClient.put<any>(url, call,{'headers': this.getHeaders()}) .subscribe(data => this.callid = data.id);
  }

  
  getCallById(callId: number) : Observable <Calls>
  {
    const url = `${this.baseUrl}/${callId}`;
    
    return this.httpClient.get<Calls>(url,{'headers': this.getHeaders()});
  }


 

}

interface GetResponse{
  _embedded:{
    call: Calls[];
  }
}