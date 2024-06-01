import { Component, inject} from '@angular/core'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular/standalone'
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class HomePage {

  private weatherByCity= inject(WeatherService)

  constructor () {
    this.getWeatherByCoords()
  }

  getWeather() {
    this.weatherByCity.getWather('Cuiabá').subscribe((data:any) => console.log(data))
  }

  getWeatherByCoords() {
    this.weatherByCity.getWatherByCoords(-15.6010, -56.0974).subscribe((data:any) => console.log(data))
  }

  getWeatherByOverview() {
    this.weatherByCity.getWeatherByOverview(-15.6010, -56.0974).subscribe((data:any) => console.log(data))
  }

}
