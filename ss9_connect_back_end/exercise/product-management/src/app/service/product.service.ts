import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/products");
  }

  search(name, id): Observable<any> {
    return this.httpClient.get('http://localhost:3000/products?name_like=' + name + '&category.id_like=' + id);
  }

  save(product: Product) {
    return this.httpClient.post('http://localhost:3000/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get('http://localhost:3000/products/' + id);
  }

  update(product: Product) {
    return this.httpClient.patch('http://localhost:3000/products/' + product.id, product);
  }

  delete(product: Product) {
    return this.httpClient.delete('http://localhost:3000/products/' + product.id);
  }
}
