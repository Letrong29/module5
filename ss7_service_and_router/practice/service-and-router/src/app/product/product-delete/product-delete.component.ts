import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = +paramMap.get('id')
      this.product = productService.findById(id);
      productService.deleteProduct(this.product);
      router.navigateByUrl('/product/list')
    });
  }

  ngOnInit(): void {
  }
}
