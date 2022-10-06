import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ServiceListComponent} from './component/facility/service-list/service-list.component';
import {ServiceCreateComponent} from './component/facility/service-create/service-create.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './component/customer/customer-edit/customer-edit.component';


const routes: Routes = [
  {path: 'furama', component: HomeComponent},
  {path: 'furama/facility', component: ServiceListComponent},
  {path: 'furama/facility/create', component: ServiceCreateComponent},
  {path: 'furama/customer', component: CustomerListComponent},
  {path: 'furama/customer/create', component: CustomerCreateComponent},
  {path: 'furama/customer/edit/:id', component: CustomerEditComponent},
  {path: 'furama/contract', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
