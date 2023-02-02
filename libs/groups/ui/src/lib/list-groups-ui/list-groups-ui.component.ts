import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupsEntity } from '@membership-application/groups/data-access';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'membership-application-list-groups-ui',
  templateUrl: './list-groups-ui.component.html',
  styleUrls: ['./list-groups-ui.component.scss'],
})
export class ListGroupsUiComponent implements OnInit {
  @Input() groupsList: GroupsEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() viewGroupPermissions = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit(): void {}
}
