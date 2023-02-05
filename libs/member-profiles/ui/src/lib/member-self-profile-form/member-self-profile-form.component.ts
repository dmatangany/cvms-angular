import { MemberTypesEntity } from '@membership-application/member-types/data-access';
import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { FileStorageService } from '@membership-application/file-manager';
import { UsersEntity } from '@membership-application/users/data-access';
import {
  MemberProfilesEntity,
  statuses,
} from '@membership-application/member-profiles/data-access';
import {SubscriptionsEntity} from "@membership-application/subscriptions/data-access";
import {MemberPackageEntity} from "@membership-application/member-packages/data-access";
import {formatDate} from '@angular/common';
@Component({
  selector: 'membership-application-member-self-profile-form',
  templateUrl: './member-self-profile-form.component.html',
  styleUrls: ['./member-self-profile-form.component.css'],
})
export class MemberSelfProfileFormComponent implements OnInit, OnChanges {
  @Output() formValue = new EventEmitter();
  @Output() memberTypeId = new EventEmitter();
  @Input() user!: UsersEntity;
  @Input() memberTypes: MemberTypesEntity[] = [];
  @Input() memberSubscriptions: SubscriptionsEntity[] = [];
  @Input() btnState!: ClrLoadingState;
  @Input() memberProfile!: MemberProfilesEntity;
  @Input() memberAttributes: any;
  @Input() btnTitle!: string;
  public memberProfileForm!: UntypedFormGroup;
  public statuses = statuses;
  // public memberAttributes: any;
  public isAlert = false;
  public isAddPhoneNumber = false;
  public isAddEmail = false;
  public isUpdatePhoneNumber = false;
  public isUpdateEmail = false;
  public message = false;
  public addState = ClrLoadingState.DEFAULT;

  public fileUploadStatus = false;
  public fileTextResult = '';
  public uploadFile: any;
  public proposedFileTextResult = '';
  public proposedFileUploadStatus = false;
  public fileName = '';
  public color = '';
  public attachedFileName!: string;

  public emails: any = [];
  public phoneNumbers: any = [];
  emailIndex: any;
  phoneNumberIndex: any;
  selectedPhoneNumber: any;
  selectedEmail: any;
  joinedDate: Date = new Date();
  @Output() userId = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private fileStorageService: FileStorageService
  ) {}

  ngOnInit() {
    this.createMemberProfileForm();
    if (this.memberProfile) {
      this.memberProfileForm.patchValue(this.memberProfile);
    }
  }

  private createMemberProfileForm() {
    const joinedDate = formatDate(this.joinedDate, 'dd/MM/yyyy', 'en-US');
    this.memberProfileForm = this.fb.group({
      name: '',
      dateJoined: joinedDate,
      emails: ['', [Validators.required, Validators.email]],
      mailingAddress: '',
      memberTypeAttributeValues: this.fb.array([]),
      memberTypeId: '',
      phoneNumbers: '',
      physicalAddress: '',
      profileImageFileName: '',
      status: 'ACTIVE',
      userId: this.user.id.toString(),
      id: ''
    });
  }

  get memberTypeAttributeValuesArray(): FormArray {
    return this.memberProfileForm?.get(
      'memberTypeAttributeValues'
    ) as FormArray;
  }

  close() {
    this.isAddEmail = false;
    this.isAddPhoneNumber = false;
    this.isUpdateEmail = false;
    this.isUpdatePhoneNumber = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['memberAttributes']?.currentValue &&
      this.memberTypeAttributeValuesArray
    ) {
      this.memberTypeAttributeValuesArray?.clear();
      this.loadMemberTypeAttributeValues();
    }
    if (changes['memberProfile']?.currentValue) {
      this.memberProfileForm.patchValue(this.memberProfile);
      this.memberProfileForm
        .get('status')
        ?.patchValue(this.memberProfile?.status);
      this.memberProfileForm
        .get('userId')
        ?.patchValue(this.memberProfile?.user?.id);
      this.memberProfile.emails.forEach((element: any) => {
        this.emails = [];
        this.emails.push(element);
      });
      this.memberProfile.phoneNumbers.forEach((element: any) => {
        this.phoneNumbers = [];
        this.phoneNumbers.push(element);
      });
    }
  }

  saveEmail(emailObject: any) {
    this.emails.push(emailObject.email);
    this.isAddEmail = false;
  }

  saveNumber(phoneNumberObject: any) {
    this.phoneNumbers.push(phoneNumberObject.phoneNumber);
    this.isAddPhoneNumber = false;
  }

  deleteEmails(element: any) {
    const index = this.emails.indexOf(element);
    if (index > -1) {
      return this.emails.splice(index, 1);
    }
  }

  deletePhoneNumbers(element: any) {
    const index = this.phoneNumbers.indexOf(element);
    if (index > -1) {
      return this.phoneNumbers.splice(index, 1);
    }
  }

  editEmails(element: any) {
    this.selectedEmail = { email: element };
    this.emailIndex = this.emails.indexOf(element);
    this.isUpdateEmail = true;
  }

  editPhoneNumbers(element: any) {
    this.selectedPhoneNumber = { phoneNumber: element };
    this.phoneNumberIndex = this.phoneNumbers.indexOf(element);
    this.isUpdatePhoneNumber = true;
  }

  updateEmails(emailObject: any) {
    this.emails[this.emailIndex] = emailObject.email;
    this.isUpdateEmail = false;
  }

  updatePhoneNumbers(phoneNumberObject: any) {
    this.phoneNumbers[this.phoneNumberIndex] = phoneNumberObject.phoneNumber;
    this.isUpdatePhoneNumber = false;
  }

  onSubmit() {
    this.memberProfileForm.patchValue({
      emails: this.emails,
      phoneNumbers: this.phoneNumbers,
    });
    this.formValue.emit(this.memberProfileForm.value);
  }

  public loadMemberTypeAttributeValues() {
    this.memberTypeAttributeValuesArray.patchValue([]);
    this.memberAttributes.forEach((element: { [x: string]: any }) => {
      this.memberTypeAttributeValuesArray.push(
        this.fb.group({
          attributeId: element['id'],
          fieldType: element['fieldType'],
          name: element['name'],
          displayName: element['displayName'],
          optional: element['optional'],
          value: new FormControl('', Validators.required),
        })
      );
    });
  }

  fileEvent(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.uploadFile = {
        file: event.target.files[0],
        fileName: '',
      };
      this.fileStorageService.uploadFiles(this.uploadFile).subscribe(
        (result: any) => {
          this.attachedFileName = result;
          this.fileUploadStatus = true;
          this.color = 'green';
          this.fileTextResult = 'Document saved successfully';
          setTimeout(() => {
            this.fileUploadStatus = false;
          }, 6000);
          this.fileName = result.fileName;
        },
        () => {
          this.fileUploadStatus = true;
          this.color = 'red';
          this.fileTextResult = 'Failed to save document, try again';
          setTimeout(() => {
            this.fileUploadStatus = false;
          }, 6000);
        }
      );
    }
  }
}
