import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'membership-application-total-amount-current-year',
  templateUrl: './total-amount-current-year.component.html',
  styleUrls: ['./total-amount-current-year.component.scss'],
})
export class TotalAmountCurrentYearComponent implements OnChanges, OnInit {
  @Input() data!: any[];
  myData: { name: any; value: any }[] = [];

  view: any = [200, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Currency';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  //myData: any;

  constructor() {
    Object.assign(this.myData);
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue) {
      console.log(this.data);
      this.data.forEach((element) => {
        this.myData.push({
          name: element?.currencyCode,
          value: parseInt(element?.amount),
        });
      });
      console.log(this.myData);
    }
  }
}
