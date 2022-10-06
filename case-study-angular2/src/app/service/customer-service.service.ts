import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/furama/customer');
  }

  save(customer: Customer) {
    return this.httpClient.post('http://localhost:8080/furama/customer-create', customer);
  }

  delete(customer: Customer) {
    return this.httpClient.delete('http://localhost:8080/furama/customer-delete/' + customer.id);
  }

  find(id: number): Observable<Customer> {
    return this.httpClient.get('http://localhost:8080/furama/customer-find/' + id);
  }

  update(customer: Customer) {
    return this.httpClient.patch('http://localhost:8080/furama/customer-update/' + customer.id, customer);
  }
}
