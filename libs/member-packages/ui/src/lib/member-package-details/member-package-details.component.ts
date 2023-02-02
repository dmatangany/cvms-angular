import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { MemberPackageEntity } from '@membership-application/member-packages/data-access';

@Component({
  selector: 'membership-application-member-package-details',
  templateUrl: './member-package-details.component.html',
  styleUrls: ['./member-package-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberPackageDetailsComponent implements OnInit {
  @Input() memberPackage!: MemberPackageEntity;

  constructor() {}

  ngOnInit(): void {}
}
