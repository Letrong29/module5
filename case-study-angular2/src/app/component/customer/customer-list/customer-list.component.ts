import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../../../service/customer-service.service';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];
  customer: Customer = {};

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
    })
  }

  deleteConfirm(customer: Customer) {
    this.customer = customer;
  }


  delete(customer: Customer) {
    this.customerService.delete(customer).subscribe(next => this.getAll())
  }
}
