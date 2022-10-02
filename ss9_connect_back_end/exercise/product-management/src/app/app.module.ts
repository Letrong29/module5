import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CategoryListComponent } from './component/category/category-list/category-list.component';
import { CategoryCreateComponent } from './component/category/category-create/category-create.component';
import { CategoryEditComponent } from './component/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './component/category/category-delete/category-delete.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
