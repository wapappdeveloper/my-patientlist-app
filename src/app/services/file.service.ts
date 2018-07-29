import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  apiSupport: boolean = true;

  constructor() {
    this.apiSupport = this.checkSupport();
  }

  checkSupport() {
    var _window: any = window;
    if (_window.File && _window.FileReader && _window.FileList && _window.Blob) {
      console.info('File API support');
      return true;
    } else {
      console.warn('File API not support');
      return false;
    }
  }
  getAsText(readFile): Observable<any> {
    if (this.apiSupport === false) {
      console.warn('File API not support by this browser');
      return;
    }
    var observable = new Observable((observer) => {
      var reader = new FileReader();
      reader.readAsText(readFile, "UTF-8");
      reader.onload = (event) => {
        observer.next(event.target.result);
      }
    });
    return observable;
  }
  getAsImage(readFile): Observable<any> {
    if (this.apiSupport === false) {
      console.warn('File API not support by this browser');
      return;
    }
    var observable = new Observable((observer) => {
      var reader = new FileReader();
      reader.readAsDataURL(readFile);
      reader.onload = (event) => {
        observer.next(event.target.result);
      }
    });
    return observable;
  }
}
