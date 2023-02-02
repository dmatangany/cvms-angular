import { DashboardEntity } from './../../../../../dashboard/data-access/src/lib/+state/dashboard.models';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@membership-application/dashboard/data-access';

@Component({
  selector: 'membership-application-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css'],
})
export class DashboardContainerComponent implements OnInit {
  dashboardStats!: Observable<DashboardEntity>;

  constructor(private dashboardService: DashboardService) {
    // Object.assign(this.single);
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.dashboardStats = this.dashboardService.getDashBoardDetails();
  }
}
