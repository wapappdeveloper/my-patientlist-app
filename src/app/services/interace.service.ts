import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InteractService {
  constructor() { }
  /**Communicate between componens */
  private dataSource = new BehaviorSubject<any>(null);
  receiveData = this.dataSource.asObservable();
  sendData(data:any) {
    this.dataSource.next(data);
  }
  sendError(err:any, data?:any) {
    this.dataSource.error(err);
  }
  /**Communicate between componens */
}