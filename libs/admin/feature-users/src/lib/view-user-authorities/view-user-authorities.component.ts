import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoritiesFacade } from '@membership-application/access-control/authorities/data-access';
import { UserAuthoritiesFacade } from '@membership-application/access-control/user-authorities/data-access';
import { UsersFacade } from '@membership-application/users/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-view-user-authorities',
  templateUrl: './view-user-authorities.component.html',
  styleUrls: ['./view-user-authorities.component.scss'],
})
export class ViewUserAuthoritiesComponent implements OnInit {
  private loadedSubscription = new Subscription();

  constructor(
    public userAuthoritiesFacade: UserAuthoritiesFacade,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public userFacade: UsersFacade,
    public authoritiesFacade: AuthoritiesFacade
  ) {}

  ngOnInit(): void {
    this.getUserAuthorities();
    this.authoritiesFacade.getAllAuthorities();
  }

  getUserAuthorities() {
    this.userAuthoritiesFacade.getAllUserAuthorities(
      this.route.snapshot.paramMap.get('userId')!
    );
    this.cdr.detectChanges();
  }

  onSubmit(userContext: any) {
    console.log(userContext);
    userContext.userId = this.route.snapshot.paramMap.get('userId')!;
    this.userAuthoritiesFacade.createUserAuthoritiesBundled(userContext);
  }

  close() {
    this.router.navigate(['/users']);
  }
}
