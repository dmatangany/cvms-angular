import { Component, Input, OnInit } from '@angular/core';
import { EventPackagesEntity } from '@membership-application/event-packages/data-access';

@Component({
  selector: 'membership-application-packages-details',
  templateUrl: './event-packages-details.component.html',
  styleUrls: ['./event-packages-details.component.css'],
})
export class EventPackagesDetailsComponent implements OnInit {
  @Input() eventPackage!: EventPackagesEntity;
  constructor() {}

  ngOnInit() {}
}
