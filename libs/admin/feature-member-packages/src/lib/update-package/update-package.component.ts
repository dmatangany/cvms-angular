import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CurrenciesFacade } from '@membership-application/currencies/data-access';
import { MemberTypesFacade } from '@membership-application/member-types/data-access';
import {
  MemberPackageEntity,
  MemberPackagesFacade,
} from '@membership-application/member-packages/data-access';
import { Subscription } from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'membership-application-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css'],
})
export class UpdatePackageComponent implements OnInit, OnDestroy {
  @Input() memberPackage!: MemberPackageEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();

  constructor(
    public memberPackagesFacade: MemberPackagesFacade,
    public memberTypesFacade: MemberTypesFacade,
    public currenciesFacade: CurrenciesFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.memberPackagesFacade.getMemberPackage(
      this.activatedRoute.snapshot.paramMap.get('packageId')!
    );
    this.currenciesFacade.getAllActiveCurrencies();
    this.memberTypesFacade.getAllMemberTypes();
  }

  onSubmit(memberPackage: MemberPackageEntity) {
    this.memberPackagesFacade.updateMemberPackage(memberPackage);
    this.sub = this.memberPackagesFacade.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/member-packages']) : null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
