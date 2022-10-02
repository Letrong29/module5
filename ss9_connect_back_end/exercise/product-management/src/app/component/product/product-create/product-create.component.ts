import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/category';

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
    console.log(product);
    this.productService.save(product).subscribe(next => {
      this.router.navigateByUrl('product');
    });
  }

  showCategoryList() {
    this.categoryService.getAll().subscribe(categoryList => {
      console.log(categoryList);
      this.categoryList = categoryList
    });
  }
}
