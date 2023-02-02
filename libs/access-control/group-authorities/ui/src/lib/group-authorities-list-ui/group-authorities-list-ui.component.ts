import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { of } from 'rxjs';
import { GroupAuthoritiesEntity } from '@membership-application/access-control/group-authorities/data-access';

@Component({
  selector: 'membership-application-group-authorities-list-ui',
  templateUrl: './group-authorities-list-ui.component.html',
  styleUrls: ['./group-authorities-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupAuthoritiesListUiComponent implements OnInit {
  @Input() groupName!: string;
  @Input() groupAuthoritiesList: GroupAuthoritiesEntity[] = [];
  @Input() total!: number;
  @Input() loading!: boolean;
  @Input()
  placeholderMessage!: string;
  @Input() deleteBtnState$ = of(ClrLoadingState.DEFAULT);
  @Output() deleteSelected = new EventEmitter<GroupAuthoritiesEntity[]>();
  @Output() assignAuthorities = new EventEmitter();
  public selectedAuthorities: any = [];

  constructor() {}

  ngOnInit(): void {}
}
