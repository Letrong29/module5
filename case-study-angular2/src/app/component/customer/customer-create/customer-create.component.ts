import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {CustomerType} from '../../../model/customer-type';
import {CustomerServiceService} from '../../../service/customer-service.service';
import {Customer} from '../../../model/customer';
import {Router} from '@angular/router';
import {validatorAge} from '../../../util/validate-customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  creatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+))+$/)]),
    dateOfBirth: new FormControl('', [Validators.required, validatorAge]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9,12}$/)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(090|091)\d{7}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl(),
  });

  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerServiceService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  save() {
    if (this.creatForm.valid) {
      let customer: Customer = this.creatForm.value;
      this.customerService.save(customer).subscribe(next => {
        this.router.navigateByUrl('furama/customer');
      });
    }
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  get name() {
    return this.creatForm.get('name')
  }

  get dateOfBirth() {
    return this.creatForm.get('dateOfBirth');
  }

  get gender() {
    return this.creatForm.get('gender');
  }

  get idCard() {
    return this.creatForm.get('idCard');
  }

  get phoneNumber() {
    return this.creatForm.get('phoneNumber');
  }

  get email() {
    return this.creatForm.get('email');
  }

  get address() {
    return this.creatForm.get('address');
  }
}
