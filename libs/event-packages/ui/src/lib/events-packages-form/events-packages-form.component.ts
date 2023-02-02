import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UntypedFormGroup, FormBuilder } from "@angular/forms";
import { ClrLoadingState } from "@clr/angular";
import { CurrenciesEntity } from "@membership-application/currencies/data-access";
import { EventPackagesEntity, eventPackageStatus } from "@membership-application/event-packages/data-access";


@Component({
  selector: 'membership-application-events-packages-form',
  templateUrl: './events-packages-form.component.html',
  styleUrls: ['./events-packages-form.component.css'],
})
export class EventsPackagesFormComponent implements OnInit {
  @Input() eventId: any;
  @Input() currenciesList: CurrenciesEntity[]=[];
  @Input() eventPackage!: EventPackagesEntity;
  @Input() btnState!:ClrLoadingState;
  @Input() title='';
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public eventPackageForm!: UntypedFormGroup;
  public opened = true;
  statuses = eventPackageStatus;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.eventPackage) {
      this.eventPackageForm.patchValue(this.eventPackage);
    }
  }

  public createForm() {
    this.eventPackageForm = this.formBuilder.group({
      amount: '',
      currencyId: '',
      eventId: this.eventId,
      eventPackageStatus: '',
      latestDateOfPurchase: '',
      latestTimeOfPurchase: '',
      name: '',
      quantityAvailable: 0,
    });
  }
}
