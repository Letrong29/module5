import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
   activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
     let id = +paramMap.get('id')
     this.product = productService.findById(id);
     this.productForm = new FormGroup({
       id: new FormControl(this.product.id),
       name: new FormControl(this.product.name),
       price: new FormControl(this.product.price),
       description: new FormControl(this.product.description)
     })
   })
  }

  ngOnInit(): void {
  }

  update() {
    this.product = this.productForm.value;
    this.productService.saveProduct(this.product);
    this.router.navigateByUrl('/product/list')
  }
}
