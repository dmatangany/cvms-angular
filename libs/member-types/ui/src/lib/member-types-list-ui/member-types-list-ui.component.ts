import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

import { MemberTypesEntity } from '@membership-application/member-types/data-access';

@Component({
  selector: 'membership-application-member-types-list-ui',
  templateUrl: './member-types-list-ui.component.html',
  styleUrls: ['./member-types-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberTypesListUiComponent implements OnInit {
  @Input() memberTypeList: MemberTypesEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<MemberTypesEntity>();
  @Output() deleteSelected = new EventEmitter<MemberTypesEntity>();
  @Output() addAttribute = new EventEmitter<MemberTypesEntity>();
  @Output() viewMemberAttribute = new EventEmitter<MemberTypesEntity>();

  constructor() {}

  ngOnInit(): void {}
}
