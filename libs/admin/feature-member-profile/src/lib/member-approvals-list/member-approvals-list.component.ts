import { ThisReceiver } from '@angular/compiler';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component, ElementRef,
  OnInit, ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  MemberProfilesEntity,
  MemberProfilesFacade,
} from '@membership-application/member-profiles/data-access';
import {MemberPackageEntity, MemberPackagesFacade} from "@membership-application/member-packages/data-access";
import jsPDF from "jspdf";
import * as XLSX from 'xlsx';
@Component({
  selector: 'membership-application-member-approvals-list',
  templateUrl: './member-approvals-list.component.html',
  styleUrls: ['./member-approvals-list.component.css'],
})
export class MemberApprovalsListComponent implements OnInit, AfterViewChecked {
  public isEdit = false;
  public isDelete = false;
  public isStatusChange = false;
  public selectedMemberProfile!: MemberProfilesEntity;
  public placeholderMessage = 'Member Profles';
  @ViewChild('htmlData')
  htmlData!: ElementRef;
  private memberTypeId!: number;

  constructor(
    public memberProfileFacade: MemberProfilesFacade,
    public memberPackagesFacade: MemberPackagesFacade,
    public router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit() {}

  getMemberProfiles(state: ClrDatagridStateInterface) {
    this.memberProfileFacade.getPaginatedMemberProfiles(state);
  }

  updateMemberProfile(memberProfile: MemberProfilesEntity) {
    this.router.navigate(['/member-profile/update', memberProfile?.id]);
    this.isEdit = false;
  }

  viewMemberProfile(memberProfile: MemberProfilesEntity) {
    this.memberTypeId = memberProfile?.memberType?.id;
    console.log("MemberProfilesListComponent", this.memberTypeId)
    this.memberPackagesFacade.getAllMemberPackagesByMemberType(this.memberTypeId);
    console.log("MemberProfilesListComponent", this.memberTypeId)
    this.router.navigate(['/member-profile/view-more', memberProfile?.id]);
  }

  public createMemberProfile() {
    this.router.navigate(['../create'], {
      relativeTo: this.route,
    });
  }

  promptDelete(profile: MemberProfilesEntity) {
    this.selectedMemberProfile = profile;
    this.isDelete = true;
  }
  public removeUnderscore(str: string) {
    return str.replace(/_/g, ' ');
  }
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.htmlData.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'MembersExportSheet.xlsx');
  }
  refresh() {
    this.isDelete = false;
    this.getMemberProfiles({});
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
