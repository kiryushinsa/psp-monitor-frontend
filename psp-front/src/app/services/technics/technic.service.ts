import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Service } from 'src/app/entity/service';
import {Technic} from 'src/app/entity/technic'
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TechnicService {

  private baseUrl = 'http://localhost:8080/api/technic';
  constructor(private httpClient: HttpClient) { }

  getHeaders(){
    const auth = 'Bearer_eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290Iiwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpYXQiOjE1OTkyMTUyMzEsImV4cCI6MTU5OTIxODgzMX0.vuAj6opHwPQpSIV4OJfGzy1GkBe1RaB_R1JuseHHr94';
    const Myheaders = new HttpHeaders().set('Authorization',auth);

    return Myheaders;
  }


  createTechnic(technic: Technic){
    return this.httpClient.post<Technic>('http://localhost:8080/api/technic',technic,{'headers': this.getHeaders()}).
    subscribe(data=>{ }) 
  }

  createService(service: Service){
    return this.httpClient.post<Service>('http://localhost:8080/api/service',service,{'headers': this.getHeaders()}).
    subscribe(data=>{ }) 
  }

}
interface GetResponse{
  _embedded:{
    technic: Technic[];
  }
}