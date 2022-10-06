import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CarService} from "../../../service/car.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../model/car";
import Swal from "sweetalert2";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  editFrom: FormGroup;
  car: Car = {};

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = +paramMap.get('id');
      this.carService.find(id).subscribe(car => {
        this.car = car;
        this.editFrom = new FormGroup({
          id: new FormControl(this.car.id),
          licensePlates: new FormControl(this.car.licensePlates, [Validators.required]),
          typeCar: new FormControl(this.car.typeCar, [Validators.required]),
          agency: new FormControl(this.car.agency, [Validators.required]),
          begin: new FormControl(this.car.begin, [Validators.required]),
          end: new FormControl(this.car.end, [Validators.required]),
          phone: new FormControl(this.car.phone, [Validators.required,
            Validators.pattern(/^(090|093|097)\d{7}$/)]),
          email: new FormControl(this.car.email, [Validators.required, Validators.email]),
          startTime: new FormControl(this.car.startTime, [Validators.required]),
          endTime: new FormControl(this.car.endTime, [Validators.required]),
        });
      })
    })
  }

  ngOnInit(): void {
  }

  update() {
    if (this.editFrom.valid){
      let car = this.editFrom.value;
      this.carService.update(car).subscribe(next => {
        this.router.navigateByUrl('my-exam');
        Swal.fire('success update', '', 'success');
      })
    }
  }

  get typeCard() {
    return this.editFrom.get('typeCar');
  }

  get agency() {
    return this.editFrom.get('agency');
  }

  get begin() {
    return this.editFrom.get('begin');
  }

  get end() {
    return this.editFrom.get('end');
  }

  get phone() {
    return this.editFrom.get('phone');
  }

  get email() {
    return this.editFrom.get('email');
  }

  get startTime() {
    return this.editFrom.get('startTime');
  }

  get endTime() {
    return this.editFrom.get('endTime');
  }
}
