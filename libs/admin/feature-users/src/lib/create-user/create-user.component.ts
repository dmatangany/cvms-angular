import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsersFacade } from '@membership-application/users/data-access';
import { GroupsFacade } from '@membership-application/groups/data-access';

@Component({
  selector: 'membership-application-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  constructor(
    public usersService: UsersFacade,
    private router: Router,
    public groupsFacade: GroupsFacade
  ) {}

  ngOnInit(): void {
    this.groupsFacade.getAllGroups();
  }

  public createUser(user: any) {
    this.usersService.createNewUser(user);
    this.usersService.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/users']) : null;
    });
  }
}
