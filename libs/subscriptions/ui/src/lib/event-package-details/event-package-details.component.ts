import { Component, Input, OnInit } from '@angular/core';
import { MemberPackageEntity } from '@membership-application/member-packages/data-access';

@Component({
  selector: 'membership-application-event-package-details',
  templateUrl: './event-package-details.component.html',
  styleUrls: ['./event-package-details.component.css'],
})
export class EventPackageDetailsComponent implements OnInit {
  @Input() eventPackage!: MemberPackageEntity;

  constructor() {}

  ngOnInit() {}
}
