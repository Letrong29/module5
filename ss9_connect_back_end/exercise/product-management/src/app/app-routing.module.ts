import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './component/product/product-list/product-list.component';
import {ProductCreateComponent} from './component/product/product-create/product-create.component';
import {ProductEditComponent} from './component/product/product-edit/product-edit.component';
import {CategoryListComponent} from './component/category/category-list/category-list.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'category',
    component: CategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
