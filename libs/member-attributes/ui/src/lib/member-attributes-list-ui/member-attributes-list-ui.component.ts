import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { MemberAttributesEntity } from '@membership-application/member-attributes/data-access';

@Component({
  selector: 'membership-application-member-attributes-list-ui',
  templateUrl: './member-attributes-list-ui.component.html',
  styleUrls: ['./member-attributes-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberAttributesListUiComponent implements OnInit {
  @Input() memberAttributeList: MemberAttributesEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage!: string;
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<MemberAttributesEntity>();

  constructor() {}

  ngOnInit(): void {}
}
