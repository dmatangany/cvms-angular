import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  MemberPackageEntity,
  MemberPackagesFacade,
} from '@membership-application/member-packages/data-access';

import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-delete-package',
  templateUrl: './delete-package.component.html',
  styleUrls: ['./delete-package.component.css'],
})
export class DeletePackageComponent implements OnInit, OnDestroy {
  @Input() memberPackage!: MemberPackageEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();

  constructor(public memberPackagesFacade: MemberPackagesFacade) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.memberPackagesFacade.deleteMemberPackage(this.memberPackage.id);
    this.sub = this.memberPackagesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }
}
