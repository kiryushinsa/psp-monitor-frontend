import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private key='1a63e153975c4e7d856c849f3875733c';

  constructor(
    private httpClient: HttpClient
  ) { 


  }

  getWeatherByPosition(lat:string,lon:string){


    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat +'&lon='+lon+'&appid=' + this.key +'&units=metric'
    );
  }



}






interface OpenWeatherResponce{
  coord:{
    lon:string;
    lan:string;
  }}