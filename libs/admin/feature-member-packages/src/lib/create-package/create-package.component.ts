import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CurrenciesFacade } from '@membership-application/currencies/data-access';

import {
  MemberPackageEntity,
  MemberPackagesFacade,
} from '@membership-application/member-packages/data-access';
import {
  MemberTypesEntity,
  MemberTypesFacade,
} from '@membership-application/member-types/data-access';

import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css'],
})
export class CreatePackageComponent implements OnInit, OnDestroy {
  @Input() memberPackage!: MemberPackageEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();

  constructor(
    public memberPackagesFacade: MemberPackagesFacade,
	public memberTypesFacade: MemberTypesFacade,
    public currenciesFacade: CurrenciesFacade
  ) {}

  ngOnInit(): void {
    this.currenciesFacade.getAllActiveCurrencies();
	this.memberTypesFacade.getAllMemberTypes();
  }
  onSubmit(memberPackage: MemberPackageEntity) {
    this.memberPackagesFacade.createNewMemberPackage(memberPackage);
    this.sub = this.memberPackagesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
