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


  constructor(private httpClient: HttpClient) { }

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