import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { AuthoritiesEntity } from '@membership-application/access-control/authorities/data-access';
import { of } from 'rxjs';

@Component({
  selector: 'membership-application-user-authorities-form',
  templateUrl: './user-authorities-form.component.html',
  styleUrls: ['./user-authorities-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAuthoritiesFormComponent implements OnInit {
  @Input() btnState$ = of(ClrLoadingState.DEFAULT);
  @Input() unassignedAuthorities: AuthoritiesEntity[] = [];
  @Output() formValue = new EventEmitter();
  public selectedAuthoritiesToAssign: AuthoritiesEntity[] = [];
  public selectedAuthoritiesToRemove: AuthoritiesEntity[] = [];
  public authoritiesToAssign: AuthoritiesEntity[] = [];
  public opened = true;

  constructor() {}

  ngOnInit(): void {}

  public assignSelected() {
    this.authoritiesToAssign = this.authoritiesToAssign.concat(
      this.selectedAuthoritiesToAssign
    );
    this.unassignedAuthorities = this.unassignedAuthorities.filter(
      (permission) => !this.authoritiesToAssign.includes(permission)
    );
    this.selectedAuthoritiesToAssign = [];
  }

  public assignAll() {
    this.authoritiesToAssign = this.authoritiesToAssign.concat(
      this.unassignedAuthorities
    );
    this.unassignedAuthorities = [];
    this.selectedAuthoritiesToAssign = [];
  }

  public removeSelected() {
    this.unassignedAuthorities = this.unassignedAuthorities.concat(
      this.selectedAuthoritiesToRemove
    );
    this.authoritiesToAssign = this.authoritiesToAssign.filter(
      (permission) => !this.unassignedAuthorities.includes(permission)
    );
    this.selectedAuthoritiesToRemove = [];
  }

  public removeAll() {
    this.unassignedAuthorities = this.unassignedAuthorities.concat(
      this.authoritiesToAssign
    );
    this.authoritiesToAssign = [];
    this.selectedAuthoritiesToRemove = [];
  }

  public onSubmit() {
    this.formValue.emit(
      this.authoritiesToAssign.map((permission) => permission.id)
    );
  }
}
