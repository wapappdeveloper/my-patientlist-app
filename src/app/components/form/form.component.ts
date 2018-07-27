import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  patientDetail = [
    { key: 'firstname', value: '', lable: 'Patient First Name', required: true, validateType: 'string' },
    { key: 'middlename', value: '', lable: 'Patient MiddleName Name', required: false, validateType: 'string' },
    { key: 'lastname', value: '', lable: 'Patient Last Name', required: true, validateType: 'string' },
    { key: 'dob', value: '', lable: 'Date of Birth', required: true, validateType: 'date' },
    { key: 'ssn', value: '', lable: 'Aathar', required: true, validateType: 'number' },
    { key: 'street', value: '', lable: 'Street', required: true, validateType: 'string+number' },
    { key: 'locality', value: '', lable: 'Locality', required: true, validateType: 'string' },
    { key: 'city', value: '', lable: 'City', required: true, validateType: 'string' },
    { key: 'state', value: '', lable: 'State', required: true, validateType: 'string' },
    { key: 'zip', value: '', lable: 'Zip', required: true, validateType: 'number' },
    { key: 'country', value: '', lable: 'Country', required: true, validateType: 'string' },
    { key: 'refphylastname', value: '', lable: 'Physician Last Name', required: true, validateType: 'string' },
    { key: 'refphyfirstname', value: '', lable: 'Physician First Name', required: true, validateType: 'string' }
  ];

  allPatientDetail = [
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
  constructor(private validateService: ValidateService, private dataService:DataService) { }

  ngOnInit() {
    console.log(this.dataService.patientList);
    this.allPatientDetail = JSON.parse(JSON.stringify(this.dataService.patientList));
  }

  update(event: any, index: number) {
    //console.log(event.target.value, index);
    this.patientDetail[index].value = event.target.value;
  }

  submit() {
    for (var i = 0; i < this.patientDetail.length; i++) {
      console.log(this.validateService.validate(this.patientDetail[i].validateType, this.patientDetail[i].value));
      if (this.validateService.validate(this.patientDetail[i].validateType, this.patientDetail[i].value) === false) {
        console.log('failed');
        alert('some field are empty or error');
        return;
      }
    }
    this.allPatientDetail.push(this.patientDetail);
    this.dataService.patientList = JSON.parse(JSON.stringify(this.allPatientDetail));
    console.log(this.dataService.patientList);
  }
}
