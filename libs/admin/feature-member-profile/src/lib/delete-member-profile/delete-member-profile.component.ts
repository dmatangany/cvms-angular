import { Subscription } from 'rxjs';

import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  MemberProfilesEntity,
  MemberProfilesFacade,
} from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-delete-member-profile',
  templateUrl: './delete-member-profile.component.html',
  styleUrls: ['./delete-member-profile.component.css'],
})
export class DeleteMemberProfileComponent implements OnInit, OnDestroy {
  @Input() selectedProfile!: MemberProfilesEntity;
  @Output() closeModal = new EventEmitter();
  sub = new Subscription();

  constructor(public memberProfileFacade: MemberProfilesFacade) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {}

  onSubmit() {
    /*this.memberProfileFacade.getMyMemberProfileMemberProfile(this.selectedProfile.id);
    this.sub = this.memberProfileFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });*/
  }
}
