import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary : Word[] = [
    {
      english: 'hello',
      vietnam: 'xin chào'
    },
    {
      english: 'goodbye',
      vietnam: 'tạm biệt'
    },
    {
      english: 'dog',
      vietnam: 'con chó'
    },
    {
      english: 'cat',
      vietnam: 'con mèo'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionary;
  }

  findByEnglishWord(word) {
    return this.dictionary.find(item => item.english === word);
  }
}
