import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewChecked,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  UsersEntity,
  UsersFacade,
} from '@membership-application/users/data-access';

@Component({
  selector: 'membership-application-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit, AfterViewChecked {
  public isUpdate = false;
  public isChangeStatus = false;
  public selectedUser!: UsersEntity;

  constructor(
    public usersFacade: UsersFacade,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {}

  public getUserList(state: ClrDatagridStateInterface) {
    this.usersFacade.getPaginatesUsers(state);
  }

  refresh(isRefresh: boolean) {
    this.isUpdate = false;
    this.isChangeStatus = false;
    return isRefresh ? this.getUserList({}) : null;
  }

  updateUser(user: UsersEntity) {
    this.router.navigate(['./update-user', user.id], {
      relativeTo: this.route,
    });
  }

  viewUser(user: UsersEntity) {
    this.router.navigate(['./user-details', user.id], {
      relativeTo: this.route,
    });
  }

  createUser() {
    this.router.navigate(['./create-user'], {
      relativeTo: this.route,
    });
  }

  changeUserStatus(user: UsersEntity) {
    this.selectedUser = user;
    this.isChangeStatus = true;
  }

  viewUserAuthorities(userId: string | number) {
    this.router.navigate(['./view-user-authorities', userId], {
      relativeTo: this.route,
    });
  }
}
