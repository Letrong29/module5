import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customer-type';
import {CustomerServiceService} from '../../../service/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../../../model/customer';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {validatorAge} from '../../../util/validate-customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  updateForm: FormGroup;
  customer: Customer = {};
  customerType: CustomerType = {};
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerServiceService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = +paramMap.get('id');
      this.customerService.find(id).subscribe(customer => {
        this.customer = customer;
        this.updateForm = new FormGroup({
          id: new FormControl(this.customer.id),
          name: new FormControl(this.customer.name, [Validators.required, Validators.pattern(/^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+))+$/)]),
          dateOfBirth: new FormControl(this.customer.dateOfBirth, [Validators.required, validatorAge]),
          gender: new FormControl(this.customer.gender, [Validators.required]),
          idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern(/^\d{9,12}$/)]),
          phoneNumber: new FormControl(this.customer.phoneNumber, [Validators.required, Validators.pattern(/^(090|091)\d{7}$/)]),
          email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
          address: new FormControl(this.customer.address, [Validators.required]),
          customerType: new FormControl(this.customer.customerType.id),
        });
      });
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  update() {
    let customer = this.updateForm.value;
    this.customerTypeService.find(customer.customerType).subscribe(customerType => {
      customer.customerType = customerType
    },error => {},()=>{
      this.customerService.save(customer).subscribe(next => {
        this.router.navigateByUrl('furama/customer')
      })
    })
  }

  get name() {
    return this.updateForm.get('name')
  }

  get dateOfBirth() {
    return this.updateForm.get('dateOfBirth');
  }

  get gender() {
    return this.updateForm.get('gender');
  }

  get idCard() {
    return this.updateForm.get('idCard');
  }

  get phoneNumber() {
    return this.updateForm.get('phoneNumber');
  }

  get email() {
    return this.updateForm.get('email');
  }

  get address() {
    return this.updateForm.get('address');
  }
}
