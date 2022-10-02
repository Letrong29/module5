import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productDelete: Product = {};

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      // console.log(products);
      this.products = products;
    });
  }

  showDeleteForm(product: Product) {
    this.productDelete = product;
  }

  delete(product: Product) {
    this.productService.delete(product).subscribe(next => this.getAll());
  }
}
