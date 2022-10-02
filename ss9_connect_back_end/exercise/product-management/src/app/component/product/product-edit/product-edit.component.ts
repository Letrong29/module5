import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../../model/product';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  product: Product;
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = +paramMap.get('id')
      this.productService.findById(id).subscribe(product => {
        this.product = product;
        this.editForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
        })
      });
    })
  }

  ngOnInit(): void {
    this.showCategoryList();
  }

  update() {
    this.product = this.editForm.value;
    this.productService.update(this.product).subscribe(next => {
      this.router.navigateByUrl('product')
    });
  }

  showCategoryList() {
    this.categoryService.getAll().subscribe(categoryList => {
      console.log(categoryList);
      this.categoryList = categoryList
    });
  }
}
