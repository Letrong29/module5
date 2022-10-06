import { Component, OnInit } from '@angular/core';
import {FacilityServiceService} from '../../../service/facility-service.service';
import {Facility} from '../../../model/facility';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  facilityList: Facility[] = []

  constructor(private facilityService: FacilityServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilityList => {
      this.facilityList = facilityList;
    })
  }
}
