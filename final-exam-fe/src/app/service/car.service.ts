import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/car/home');
  }

  delete(car: Car) {
    return this.httpClient.delete('http://localhost:3000/car/' + car.id);
  }

  find(id): Observable<Car> {
    return this.httpClient.get('http://localhost:3000/car/' + id);
  }

  update(car: Car) {
    return this.httpClient.patch('http://localhost:3000/car/' + car.id, car);
  }
}
