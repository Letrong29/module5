import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  fistNum = 0;
  lastNum = 0;
  operator = '';
  result = '';

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.result = eval(this.fistNum + this.operator + this.lastNum);
  }
}
