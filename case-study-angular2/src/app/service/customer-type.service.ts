import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/furama/customer-type');
  }

  find(id: number): Observable<CustomerType> {
    return this.httpClient.get('http://localhost:8080/furama/find-customer-type/' + id);
  }
}
