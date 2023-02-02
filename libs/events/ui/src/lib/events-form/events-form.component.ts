import { ClrLoadingState } from '@clr/angular';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';
import { CategoriesEntity } from '@membership-application/categories/data-access';
import { EventsEntity } from '@membership-application/events/data-access';

@Component({
  selector: 'membership-application-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css'],
})
export class EventsFormComponent implements OnInit {
  @Input() categoryList!: CategoriesEntity[];
  @Input() event!: EventsEntity;
  @Input() btnState$!: ClrLoadingState;
  @Input() title = '';
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public eventForm!: UntypedFormGroup;
  public opened = true;
  type = ['TRAINING', 'MEMBERSHIP', 'GENERAL', 'FUND_RAISING'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.event) {
      this.eventForm.patchValue(this.event);
    }
  }

  public createForm() {
    this.eventForm = this.formBuilder.group({
      categoryId: '',
      city: '',
      country: '',
      description: '',
      endDateOfEvent: '',
      endTimeOfEvent: '',
      latitude: 0,
      location: '',
      longitude: 0,
      maximumNumberOfAttendees: 0,
      name: '',
      startDateOfEvent: '',
      startTimeOfEvent: '',
      payable: '',
      type: '',
      forSubscribedMembers: '',
    });
  }
}
