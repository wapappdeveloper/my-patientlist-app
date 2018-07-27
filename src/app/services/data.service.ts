import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  patientList: any = [
    [
      { key: 'firstname', value: 'Albert', lable: 'Patient First Name', required: true, validateType: 'string' },
      { key: 'middlename', value: '', lable: 'Patient MiddleName Name', required: false, validateType: 'string' },
      { key: 'lastname', value: 'Einstean', lable: 'Patient Last Name', required: true, validateType: 'string' },
      { key: 'dob', value: '12/12/1980', lable: 'Date of Birth', required: true, validateType: 'date' },
      { key: 'ssn', value: '123456', lable: 'Aathar', required: true, validateType: 'number' },
      { key: 'street', value: '', lable: 'Street', required: true, validateType: 'string+number' },
      { key: 'locality', value: '', lable: 'Locality', required: true, validateType: 'string' },
      { key: 'city', value: '', lable: 'City', required: true, validateType: 'string' },
      { key: 'state', value: '', lable: 'State', required: true, validateType: 'string' },
      { key: 'zip', value: '', lable: 'Zip', required: true, validateType: 'number' },
      { key: 'country', value: '', lable: 'Country', required: true, validateType: 'string' },
      { key: 'refphylastname', value: 'Doctor', lable: 'Physician Last Name', required: true, validateType: 'string' },
      { key: 'refphyfirstname', value: 'Bruce', lable: 'Physician First Name', required: true, validateType: 'string' }
    ]
  ];
  constructor() { }
}
