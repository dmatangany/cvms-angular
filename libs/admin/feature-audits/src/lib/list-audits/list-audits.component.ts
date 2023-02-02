import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuditsFacade } from '@membership-application/audits/data-access';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'membership-application-list-audits',
  templateUrl: './list-audits.component.html',
  styleUrls: ['./list-audits.component.scss'],
})
export class ListAuditsComponent implements OnInit {
  constructor(
    public auditsFacade: AuditsFacade,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  public getAuditList(state: ClrDatagridStateInterface) {
    this.auditsFacade.getPaginatedAudits(state);
    this.cdr.detectChanges();
  }

  refresh(isRefresh: boolean) {
    return isRefresh ? this.getAuditList({}) : null;
  }
}
