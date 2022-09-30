import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../../service/dictionary-service.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Word} from '../../model/word';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  result: Word = {};

  constructor(private dictionaryServiceService: DictionaryServiceService,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let word = paramMap.get('word');
      this.result = dictionaryServiceService.findByEnglishWord(word);
    });
  }

  ngOnInit(): void {
  }
}
