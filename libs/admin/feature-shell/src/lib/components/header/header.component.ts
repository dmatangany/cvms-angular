import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@membership-application/auth/data-access';
@Component({
  selector: 'membership-application-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authFacade: AuthFacade) {}

  ngOnInit(): void {}
}
