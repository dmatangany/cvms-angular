import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild, ElementRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import {MemberProfilesEntity, MemberProfilesFacade} from '@membership-application/member-profiles/data-access';
import {
  MemberTypesEntity,
  MemberTypesFacade,
} from '@membership-application/member-types/data-access';
import { MemberPackagesFacade } from '@membership-application/member-packages/data-access';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';
import jsPDF from "jspdf";
import * as XLSX from 'xlsx';
@Component({
  selector: 'membership-application-list-member-profiles-by-approval',
  templateUrl: './list-member-profiles-by-approval.component.html',
  styleUrls: ['./list-member-profiles-by-approval.component.scss'],
})
export class ListMemberProfilesByApprovalComponent implements OnInit, AfterViewChecked {
  public isEdit = false;
  public isDelete = false;
  public isStatusChange = false;
  public isUpdate = false;
  public isApprove = false;
  public isChangeStatus = false;
  public selectedType!: MemberTypesEntity;
  public selectedMemberProfile!: MemberProfilesEntity;
  approved!: string | number;
  @Output() closeModal = new EventEmitter();
  sub = new Subscription();
  @ViewChild('htmlData')
  htmlData!: ElementRef;
  constructor(
    public memberProfilesFacade: MemberProfilesFacade,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.memberProfilesFacade.getAllMemberProfiles();
  }

  public getProfilesList(state: ClrDatagridStateInterface) {
    console.log("ListMemberProfilesByApprovalComponentX",this.approved, state)
    this.memberProfilesFacade.getPaginatedMemberProfilesByApproved(this.approved, state);
  }
  getMembersByStatus() {
    this.getProfilesList({});
  }

  onSubmit(approvalContext: any) {
    this.memberProfilesFacade.updateMemberApprovalProfile(approvalContext);
    this.refresh(true);
    this.sub = this.memberProfilesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }
  refresh(isRefresh: boolean) {
     this.isUpdate = false;
    this.isChangeStatus = false;
    this.isApprove = false;
    return isRefresh ? this.getProfilesList({}) : null;
  }
   updateMemberProfile(memberProfile: MemberProfilesEntity) {
    this.router.navigate(['/member-profile/update', memberProfile?.id]);
    this.isEdit = false;
  }

  viewMemberProfile(memberProfile: MemberProfilesEntity) {
    this.router.navigate(['/member-profile/view-more', memberProfile?.id]);
  }

  promptDelete(profile: MemberProfilesEntity) {
    this.selectedMemberProfile = profile;
    this.isDelete = true;
  }
  updateUser(profile: MemberTypesEntity) {
    this.router.navigate(['./update-user', profile.id], {
      relativeTo: this.route,
    });
  }

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.htmlData.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'MembersExportSheet.xlsx');
  }
  viewUser(profile: MemberTypesEntity) {
    this.router.navigate(['./user-details', profile.id], {
      relativeTo: this.route,
    });
  }

  createUser() {
    this.router.navigate(['./create-profile'], {
      relativeTo: this.route,
    });
  }

  changeUserStatus(profile: MemberTypesEntity) {
    this.selectedType = profile;
    this.isChangeStatus = true;
  }

  viewUserSubscriptions(memberId: string | number) {
  console.log('viewUserSubscriptions', memberId);
    this.router.navigateByUrl('subscriptions/member-subscriptions/2',{
    state: {memberId: memberId}
});
  }

  downloadPDF() {
    let options : any = {
      orientation: 'p',
      unit: 'px',
      format: 'a0',
    };
    let doc = new jsPDF(options);
    doc.setFontSize(10)
    doc.html(this.htmlData.nativeElement, {
      callback: function(pdf) {
        doc.output("dataurlnewwindow"); // preview pdf file when exported
      }
    });
    doc.save('angular-demo.pdf');
  }
}
