import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaryList: any[] = [];

  constructor(private dictionaryServiceService: DictionaryServiceService) {
    this.dictionaryList = dictionaryServiceService.getAll();
  }

  ngOnInit(): void {
  }
}
