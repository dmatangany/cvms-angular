import { ClrDatagridStateInterface } from '@clr/angular';
import { Component, ElementRef, ViewChild, Input, OnInit, EventEmitter,Output,Inject,LOCALE_ID } from '@angular/core';
import { MemberProfilesEntity } from '@membership-application/member-profiles/data-access';
import {formatCurrency} from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'membership-application-member-profiles-list-ui',
  templateUrl: './member-profiles-list-ui.component.html',
  styleUrls: ['./member-profiles-list-ui.component.css'],
})
export class MemberProfilesListUiComponent implements OnInit {
  @Input() memberProfiles: MemberProfilesEntity[] = [];
  @Input() total = 0;
  @Input() loading = false;
  @Output() viewMemberProfile = new EventEmitter();
  @Output() deleteSelected = new EventEmitter();
  @Output() updateSelected = new EventEmitter();
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() viewUserSubscriptions = new EventEmitter<string | number>();
  @Input() placeholderMessage = '';
  searchText = '';
  term: String = '';
  constructor() {}

  ngOnInit(): void {}
}
