import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'membership-application-action-confirmation-form',
  templateUrl: './action-confirmation-form.component.html',
  styleUrls: ['./action-confirmation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionConfirmationFormComponent implements OnInit {
  @Input() btnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  @Input() actionButtonMessage = 'Yes';
  @Input() cancelButtonMessage = 'No';
  @Output() proceed = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public opened = true;

  constructor() {}

  ngOnInit(): void {}
}
