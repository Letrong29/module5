import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {CarListComponent} from "./component/test-exam/car-list/car-list.component";
import {CarEditComponent} from "./component/test-exam/car-edit/car-edit.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'my-exam', component: CarListComponent},
  {path: 'my-exam/edit/:id', component: CarEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
