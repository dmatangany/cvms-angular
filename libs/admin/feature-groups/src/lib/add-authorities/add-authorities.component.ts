import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupAuthoritiesFacade } from '@membership-application/access-control/group-authorities/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-add-authorities',
  templateUrl: './add-authorities.component.html',
  styleUrls: ['./add-authorities.component.scss'],
})
export class AddAuthoritiesComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  public sub = new Subscription();
  constructor(
    public groupAuthoritiesFacade: GroupAuthoritiesFacade,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.groupAuthoritiesFacade.getAdminUnassignedGroupAuthorities(
      this.route.snapshot.paramMap.get('groupId')!
    );
    this.cdr.detectChanges();
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  onSubmit(request: any) {
    this.groupAuthoritiesFacade.createGroupAuthoritiesBundled({
      groupId: this.route.snapshot.paramMap.get('groupId'),
      authorityIds: request,
    });
    this.sub = this.groupAuthoritiesFacade.loaded$.subscribe((res) => {
      if (res) {
        this.router.navigate([
          '/groups/view-authorities/',
          this.route.snapshot.paramMap.get('groupId'),
        ]);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
