import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validate(type: string, value: any, required:boolean, data?:any) {
    if(data){
      return true;
    }
    if(required===false && value===''){
      return true;
    }
    if (type === 'string') {
      return this.allLetter(value);
    }else if(type === 'number'){
      return this.allNumber(value);
    }else if(type === 'date'){
      return this.date(value);
    }else if(type === 'string+number' || type === 'number+string'){
      return this.allNumberAndLetter(value);
    }else if(type === 'file'){
      console.log(value);
      return this.allNumberAndLetter(value);
    }else{
      console.warn('unknown type =', type);
    }
  }

  allLetter(value: any) {
    var letters = /^[A-Za-z]+$/;
    if (value.match(letters)) {
      return true;
    } else {
      return false;
    }
  }

  allNumber(value: any) {
    var numbers = /^[0-9]+$/;
    if (value.match(numbers)) {
      return true;
    } else {
      return false;
    }
  }

  date(value:any){
    var letterandnumbers = /^[A-Za-z0-9/-]+$/;
    if (value.match(letterandnumbers)) {
      return true;
    } else {
      return false;
    }
  }

  allNumberAndLetter(value: any){
    var letterandnumbers = /^[A-Za-z0-9\s]+$/;
    if (value.match(letterandnumbers)) {
      return true;
    } else {
      return false;
    }
  }
}
