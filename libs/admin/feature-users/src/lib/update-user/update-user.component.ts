import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersFacade } from '@membership-application/users/data-access';
import { GroupsFacade } from '@membership-application/groups/data-access';

@Component({
  selector: 'membership-application-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public usersFacade: UsersFacade,
    private location: Location,
    public groupsFacade: GroupsFacade
  ) {}

  ngOnInit(): void {
    this.usersFacade.getUserById(this.route.snapshot.paramMap.get('userId')!);
    this.groupsFacade.getAllGroups();
  }

  public updateUser(user: any) {
    this.usersFacade.createNewUser(user);
    this.usersFacade.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/users']) : null;
    });
  }

  public goBack() {
    this.location.back();
  }
}
