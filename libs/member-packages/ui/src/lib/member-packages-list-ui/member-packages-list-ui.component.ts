import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { MemberPackageEntity } from '@membership-application/member-packages/data-access';

@Component({
  selector: 'membership-application-member-packages-list-ui',
  templateUrl: './member-packages-list-ui.component.html',
  styleUrls: ['./member-packages-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberPackagesListUiComponent implements OnInit {
  @Input() memberPackageList: MemberPackageEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage!: string;
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<MemberPackageEntity>();
  @Output() deleteSelected = new EventEmitter<MemberPackageEntity>();
  @Output() viewSelected = new EventEmitter<MemberPackageEntity>();

  constructor() {}

  ngOnInit(): void {}
}
