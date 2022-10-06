import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productDelete: Product = {};
  categoryList: Category[] = [];
  pageNum: number = 1;
  totalPage: number;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCategory();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.totalPage = products.length;
    });
  }

  showDeleteForm(product: Product) {
    this.productDelete = product;
  }

  delete(product: Product) {
    this.productService.delete(product).subscribe(next => this.getAll());
    Swal.fire('successful delete','', 'success')
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }

  search(name: string, id: string) {
    this.productService.search(name, id).subscribe(productList => {
      this.products = productList;
      this.totalPage = productList.length;
    });
  }
}
