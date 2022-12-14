import { Component, OnInit } from '@angular/core';
import {ContractServiceService} from '../../../service/contract-service.service';
import {Contract} from '../../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];

  constructor(private contractService: ContractServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe(contractList => {
      console.log(contractList);
      this.contractList = contractList;
    })
  }
}
