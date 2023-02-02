import { Component, OnInit } from '@angular/core';
//import { UsersFacade } from '@membership-application/users/data-access';

@Component({
  selector: 'membership-application-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor() //public usersFacade: UsersFacade
  {}

  ngOnInit(): void {
    //this.usersFacade.getUserProfile();
  }
}
