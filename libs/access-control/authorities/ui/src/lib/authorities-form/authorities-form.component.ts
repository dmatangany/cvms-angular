import { GroupAuthoritiesEntity } from '@membership-application/access-control/group-authorities/data-access';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormGroup, FormBuilder } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { AuthoritiesEntity } from '@membership-application/access-control/authorities/data-access';
import { UserAuthoritiesEntity } from '@membership-application/access-control/user-authorities/data-access';

@Component({
  selector: 'membership-application-authorities-form',
  templateUrl: './authorities-form.component.html',
  styleUrls: ['./authorities-form.component.css'],
})
export class AuthoritiesFormComponent implements OnInit, OnChanges {
  @Input() authorities: AuthoritiesEntity[] = [];
  @Input() myAuthorities!: GroupAuthoritiesEntity | UserAuthoritiesEntity | any;
  @Input() groupId!: number;
  @Input() btnState!: ClrLoadingState;
  @Output() save = new EventEmitter();
  @Output() closePage = new EventEmitter();
  rolesForm!: UntypedFormGroup;

  checkedRoles: number[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['myAuthorities']?.currentValue) {
      this.myAuthorities?.forEach((element: any) => {
        this.checkedRoles.push(element.authority.id);
      });
    }
    if (changes['groupId']?.currentValue) {
      this.rolesForm.get('groupId')?.patchValue(this.groupId);
    }
  }

  ngOnInit(): void {
    this.rolesForm = this.fb.group({
      authorityIds: '',
      groupId: '',
      authorityId: '',
    });
  }

  isChecked(id: number) {
    return this.checkedRoles.some((r) => r === id);
  }

  pushToCheckedRoles(role: any) {
    console.log(role);
    const index = this.checkedRoles.indexOf(role.id);
    index === -1
      ? this.checkedRoles.push(role.id)
      : this.checkedRoles.splice(index, 1);
    console.log(this.checkedRoles);
  }

  isAllSelected() {
    return this.checkedRoles?.length === this.authorities?.length
      ? true
      : false;
  }

  pushAllRoles() {
    this.authorities.forEach((ele) => {
      this.checkedRoles.some((r) => r === ele.id)
        ? null
        : this.checkedRoles.push(ele.id);
    });
  }

  onSave() {
    this.rolesForm.get('authorityIds')?.patchValue(this.checkedRoles);
    this.save.emit(this.rolesForm.value);
    // console.log(this.rolesForm.value);
  }
}
