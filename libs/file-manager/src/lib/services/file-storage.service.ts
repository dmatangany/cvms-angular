import { ApiService } from '@membership-application/shared/data-access';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileStorageService {
  constructor(private apiService: ApiService) {}

  uploadFile(fileItem: File) {
    // const formData: FormData = new FormData();
    // formData.append('file', fileItem, fileItem.name);

    return this.apiService.file(`/v1/files`, fileItem);
  }

  uploadFiles(upload: any): Observable<any> {
    return this.apiService.file(`/files`, upload.file);
  }

  getFile(fileName: any) {
    return this.apiService.getFile(`/v1/files?fileName=` + fileName);
  }

  deleteFile(fileName: string): Observable<any> {
    return this.apiService
      .delete(`files?fileName=${fileName}`)
      .pipe(map(() => ({ fileName: fileName })));
  }
}
