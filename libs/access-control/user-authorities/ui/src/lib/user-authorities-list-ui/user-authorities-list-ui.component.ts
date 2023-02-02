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
import { UserAuthoritiesEntity } from '@membership-application/access-control/user-authorities/data-access';

@Component({
  selector: 'membership-application-user-authorities-list-ui',
  templateUrl: './user-authorities-list-ui.component.html',
  styleUrls: ['./user-authorities-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAuthoritiesListUiComponent implements OnInit {
  @Input() userAuthoritiesList: UserAuthoritiesEntity[] = [];
  @Input() total: number | undefined;
  @Input() loading: boolean | undefined;
  @Input() placeholderMessage: string | undefined;
  @Input() deleteBtnState$ = of(ClrLoadingState.DEFAULT);
  @Output() deleteSelected = new EventEmitter<number[]>();
  @Output() assignAuthorities = new EventEmitter();
  public selectedAuthorities = [];

  constructor() {}

  ngOnInit(): void {}
}
