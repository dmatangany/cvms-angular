import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'membership-application-total-amount-current-month',
  templateUrl: './total-amount-current-month.component.html',
  styleUrls: ['./total-amount-current-month.component.scss'],
})
export class TotalAmountCurrentMonthComponent implements OnChanges {
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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
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
