import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'membership-application-total-amount-in-history',
  templateUrl: './total-amount-in-history.component.html',
  styleUrls: ['./total-amount-in-history.component.scss'],
})
export class TotalAmountInHistoryComponent implements OnChanges {
  @Input() data!: any[];
  chartData: { name: any; value: any }[] = [];
  myData!: any[];
  single!: any[];
  multi!: any[];

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
    domain: ['#5AA454', '#110542', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this.chartData);
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue) {
      this.data.forEach((element) => {
        this.chartData.push({
          name: element?.currencyCode,
          value: parseInt(element?.amount),
        });
      });
    }
  }
}
