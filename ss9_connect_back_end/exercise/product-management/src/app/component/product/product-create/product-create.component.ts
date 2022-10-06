import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/category';
import Swal from "sweetalert2";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
  });

  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showCategoryList();
  }

  save() {
    let product = this.createForm.value;
    this.productService.save(product).subscribe(next => {
      this.router.navigateByUrl('product');
      Swal.fire('successfully add new','','success')
    });
  }

  showCategoryList() {
    this.categoryService.getAll().subscribe(categoryList => {
      this.categoryList = categoryList
    });
  }
}
