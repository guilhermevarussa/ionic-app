import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '9f2c82ad3ca711c185c0c9930579e05d'

  APIURL = 'https://api.openweathermap.org/data/2.5/weather'
  
  private http = inject(HttpClient)

  constructor() { }


  getWather(city: string){
    return this.http.get<any>(`${this.APIURL}A?q=${city}&appid=${this.apiKey}`)
  }

  getWatherByCoords(lat: number, lon: number){
    return this.http.get<any>(`${this.APIURL}?lat=${lat}&lon=${lon}&lang=pt_br&appid=${this.apiKey}`)

  }

  getWeatherByOverview(lat: number, lon: number){
    return this.http.get<any>(`${this.APIURL}/overview?lat=${lat}&lon=${lon}&lang=pt_br&appid=${this.apiKey}`)
  }

}
