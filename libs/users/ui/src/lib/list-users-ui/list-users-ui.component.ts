import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { UsersEntity } from '@membership-application/users/data-access';

@Component({
  selector: 'membership-application-list-users-ui',
  templateUrl: './list-users-ui.component.html',
  styleUrls: ['./list-users-ui.component.scss'],
})
export class ListUsersUiComponent implements OnInit {
  @Input() userList: UsersEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<UsersEntity>();
  @Output() viewSelected = new EventEmitter<UsersEntity>();
  @Output() changeSelectedUserStatus = new EventEmitter<UsersEntity>();
  @Output() changeSelectedUserPassword = new EventEmitter<UsersEntity>();
  @Output() viewUserAuthorities = new EventEmitter<string | number>();
  searchText = '';
  term: String = '';
  constructor() {}

  ngOnInit(): void {}
}
