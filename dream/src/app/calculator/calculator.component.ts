import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  monthlyIncome:number;
  loanAmmount : number;

  p:number;
  n:number;
  emi:number;

  constructor() { }

  ngOnInit(): void {
  }


  elligibilityCal(){
    this.loanAmmount=60*(0.6*this.monthlyIncome);

  }

  emiCal(){

    let interest = 8.5/1200;
    let top = Math.pow((1+interest),this.n);
    let bottom = top - 1;
    let ratio = top/bottom;


    this.emi=Math.round(this.p*interest*ratio);

  }


}
