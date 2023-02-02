import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersFacade } from '@membership-application/users/data-access';

@Component({
  selector: 'membership-application-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  constructor(
    public usersFacade: UsersFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usersFacade.getUserById(
      this.activatedRoute.snapshot.paramMap.get('userId')!
    );
  }
}
