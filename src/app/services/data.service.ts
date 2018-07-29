import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  patientListHardData: any = [
    {
      "profilepic": "",
      "firstname": "albert",
      "middlename": "",
      "lastname": "einstean",
      "dob": "2010-01-02",
      "doadmit":"2018-05-01",
      "ssn": "123456",
      "street": "2nd cross",
      "locality": "mayo",
      "city": "bangalore",
      "state": "karnataka",
      "zip": "560001",
      "country": "india",
      "phyfirstname": "doctor",
      "phylastname": "bruce"
    },
    {
      "profilepic": "",
      "firstname": "simon",
      "middlename": "",
      "lastname": "mand",
      "dob": "2010-01-02",
      "doadmit":"2018-05-01",
      "ssn": "135680",
      "street": "1st cross",
      "locality": "hsr",
      "city": "bangalore",
      "state": "karnataka",
      "zip": "560001",
      "country": "india",
      "phyfirstname": "doctor",
      "phylastname": "kelly"
    },
    {
      "profilepic": "",
      "firstname": "meen",
      "middlename": "",
      "lastname": "saar",
      "dob": "2010-01-02",
      "doadmit":"2018-05-01",
      "ssn": "134789",
      "street": "west road",
      "locality": "indra",
      "city": "bangalore",
      "state": "karnataka",
      "zip": "560001",
      "country": "india",
      "phyfirstname": "doctor",
      "phylastname": "bora"
    }
  ];
  patientList:any = [];
  editmode:boolean = false;
  editIndex:number = null;
  editPatientDetail:any = null;
  constructor() { }
}
