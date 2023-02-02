import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'membership-application-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss'],
})
export class TransactionsContainerComponent implements OnInit {
  isLoadAccount = false;
  constructor() {}

  ngOnInit(): void {}

  refresh() {
    this.isLoadAccount = true;
  }
}
