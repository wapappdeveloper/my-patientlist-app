import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validate(type: string, data: any) {
    /*if (type === 'string') {
      return this.allLetter(data);
    }else if(type === 'number'){
      return this.allNumber(data);
    }else{
      return this.allNumberAndLetter(data);
    }*/
    return true;
  }

  allLetter(data: any) {
    var letters = /^[A-Za-z]+$/;
    if (data.match(letters)) {
      return true;
    } else {
      return false;
    }
  }

  allNumber(data: any) {
    var numbers = /^[0-9]+$/;
    if (data.match(numbers)) {
      return true;
    } else {
      return false;
    }
  }

  allNumberAndLetter(data: any){
    var letterandnumbers = /^[A-Za-z0-9]+$/;
    if (data.match(letterandnumbers)) {
      return true;
    } else {
      return false;
    }
  }
}
