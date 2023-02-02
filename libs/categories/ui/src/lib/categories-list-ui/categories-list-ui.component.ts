import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { CategoriesEntity } from '@membership-application/categories/data-access';

@Component({
  selector: 'membership-application-categories-list-ui',
  templateUrl: './categories-list-ui.component.html',
  styleUrls: ['./categories-list-ui.component.scss'],
})
export class CategoriesListUiComponent implements OnInit {
  @Input() categoriesList: CategoriesEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<CategoriesEntity>();
  @Output() deleteSelected = new EventEmitter<CategoriesEntity>();
  @Output() viewSelected = new EventEmitter<CategoriesEntity>();
  @Output() preview = new EventEmitter<CategoriesEntity>();

  constructor() {}

  ngOnInit(): void {}
}
