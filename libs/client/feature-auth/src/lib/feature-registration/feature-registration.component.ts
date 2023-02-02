import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@membership-application/auth/data-access';
import { FileStorageService } from '@membership-application/file-manager';
import { UsersFacade } from '@membership-application/users/data-access';
@Component({
  selector: 'membership-application-feature-registration',
  templateUrl: './feature-registration.component.html',
  styleUrls: ['./feature-registration.component.scss'],
})
export class FeatureRegistrationComponent implements OnInit {
  isMakePayment = false;
  fileObject: any;
  uploadMessage = '';
  fileLoading = false;

  constructor(
    public usersFacade: UsersFacade,
    private router: Router,
    private fileStorageService: FileStorageService
  ) {}

  ngOnInit(): void {
  }

  register(credentials: any) {
    //this.authFacade.register(credentials);
  }

  forgotPassword() {
    this.router.navigate(['/auth/reset-password']);
  }

  public createNewMemberUser(user: any) {
    this.usersFacade.createNewMemberUser(user);
    this.usersFacade.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/auth/login']) : null;
    });
  }
  uploadFile(event: any) {
    console.log(event);
    this.fileLoading = true;
    this.uploadMessage = 'Saving document.Please wait...';
    this.fileStorageService.uploadFile(event.file.target.files[0]).subscribe({
      next: (res) => {
        this.fileObject = {
          fileName: res.fileName,
          index: event.index,
        };
      },
      error: () => {
        this.fileLoading = true;
        this.uploadMessage = "Failed to save document, try again'";
      },
      complete: () => {
        this.fileLoading = false;
        setTimeout(() => {
          this.uploadMessage = 'Document saved successfully';
        }, 6000);
      },
    });
  }
}
