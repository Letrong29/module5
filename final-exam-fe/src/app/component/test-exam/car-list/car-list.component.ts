import { Component, OnInit } from '@angular/core';
import {Car} from "../../../model/car";
import {CarService} from "../../../service/car.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carList: Car[] = []
  carDelete: Car;
  total: number;
  page: number = 0;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.carService.getAll().subscribe(carList => {
      this.carList = carList.content;
      this.total = carList.totalPages;
    })
  }

  deleteConfirm(car: Car) {
    this.carDelete = car;
  }

  delete(carDelete: Car) {
    this.carService.delete(carDelete).subscribe(next => this.getAll());
    Swal.fire('Poof! Your imaginary file has been deleted!', '', 'success');
  }

  previous() {
    if (this.page > 0){
      this.page = this.page - 1;
    }
  }

  next() {
    if (this.page < this.total - 1) {
      this.page = this.page + 1;
    }
  }
}
