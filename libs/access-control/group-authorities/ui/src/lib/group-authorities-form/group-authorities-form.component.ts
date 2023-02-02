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

@Component({
  selector: 'membership-application-group-authorities-form',
  templateUrl: './group-authorities-form.component.html',
  styleUrls: ['./group-authorities-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupAuthoritiesFormComponent implements OnInit {
  @Input() btnState = ClrLoadingState.DEFAULT;
  @Input() unassignedAuthorities: any[] = [];
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
    this.selectedAuthoritiesToAssign = [];
  }

  public onSubmit() {
    this.formValue.emit(
      this.authoritiesToAssign.map((permission) => permission.id)
    );
  }
}
