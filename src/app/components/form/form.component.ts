import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  imageData: any = '';
  patientDetail = [
    { key: 'profilepic', value: '', lable: 'Profile Pic', required: true, validateType: 'file', error: false, errorMessage: 'Upload Profile-Pic', data: '' },
    { key: 'firstname', value: '', lable: 'Patient First Name', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid Name' },
    { key: 'middlename', value: '', lable: 'Patient Middle Name', required: false, validateType: 'string', error: false, errorMessage: 'Enter Valid Name' },
    { key: 'lastname', value: '', lable: 'Patient Last Name', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid Name' },
    { key: 'dob', value: '', lable: 'Date of Birth', required: true, validateType: 'date', error: false, errorMessage: 'Enter Valid Date' },
    { key: 'doadmit', value: '', lable: 'Date of Admit', required: true, validateType: 'date', error: false, errorMessage: 'Enter Valid Date' },
    { key: 'ssn', value: '', lable: 'Aathar', required: true, validateType: 'number', error: false, errorMessage: 'Enter Valid Number' },
    { key: 'street', value: '', lable: 'Street', required: true, validateType: 'string+number', error: false, errorMessage: 'Enter Valid Street' },
    { key: 'locality', value: '', lable: 'Locality', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid Locality' },
    { key: 'city', value: '', lable: 'City', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid City' },
    { key: 'state', value: '', lable: 'State', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid State' },
    { key: 'zip', value: '', lable: 'Zip', required: true, validateType: 'number', error: false, errorMessage: 'Enter Valid Zip' },
    { key: 'country', value: '', lable: 'Country', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid Country' },
    { key: 'phyfirstname', value: '', lable: 'Physician First Name', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid Name' },
    { key: 'phylastname', value: '', lable: 'Physician Last Name', required: true, validateType: 'string', error: false, errorMessage: 'Enter Valid Name' }
  ];

  constructor(private validateService: ValidateService, private dataService: DataService, private router: Router, private fileService: FileService) { }

  ngOnInit() {
    if (this.dataService.editmode && this.dataService.editPatientDetail) {
      this.patientDetail.map((elm) => {
        if (elm.key === 'profilepic') {
          elm.data = this.imageData = this.dataService.editPatientDetail[elm.key];
        }else{
          elm.value = this.dataService.editPatientDetail[elm.key];
        }
      });
    }
  }

  update(event: any, index: number, type: any) {
    if (type == 'file') {
      return;
    }
    this.patientDetail[index].value = String(event.target.value).trim();
  }

  setValue(value: any, type: any) {
    if (type !== 'file') {
      return value;
    }
  }

  submit() {
    var tempPatientData: any = {};
    for (var i = 0; i < this.patientDetail.length; i++) {
      if (this.validateService.validate(this.patientDetail[i].validateType, this.patientDetail[i].value, this.patientDetail[i].required, this.patientDetail[i].data) === false) {
        console.log(this.patientDetail[i].validateType, this.patientDetail[i].value, 'failed', i);
        this.patientDetail[i].error = true;
        var elm = document.getElementById(String(i));
        elm.scrollIntoView();
        return;
      } else {
        this.patientDetail[i].error = false;
        if(i===0){
          tempPatientData[this.patientDetail[i].key] = this.patientDetail[i].data;
        }else{
          tempPatientData[this.patientDetail[i].key] = this.patientDetail[i].value;
        }
      }
    }
    this.addOrUpdatePatientList(tempPatientData);
  }

  addOrUpdatePatientList(tempPatientData: any) {
    //console.log(tempPatientData);
    if (this.dataService.editmode && this.dataService.editIndex !== null) {
      this.dataService.patientList[this.dataService.editIndex] = tempPatientData;
    } else {
      this.dataService.patientList.push(tempPatientData);
    }
    //console.log(this.dataService.patientList);
    this.dataService.editIndex = null;
    this.dataService.editmode = false;
    this.dataService.editPatientDetail = null;
    this.router.navigateByUrl('patientlist');
  }

  onFileUpload(event: any, index: number, type: string) {
    if (type !== 'file') {
      return;
    }
    if (this.fileService.checkSupport()) {
      var file = event.target.files[0];
      if (file) {
        if (file.type.match("image.*")) {
          if (file.size <= 25600) {
            this.fileService.getAsImage(file).subscribe((res) => {
              this.patientDetail[index].data = String(res);
              this.patientDetail[index].error = false;
              this.imageData = res;
            });
          } else {
            alert('File size is over the limit, only less-than 25kb is allowed');
          }
          //alert("Name: " + file.name + "\n" + "Last Modified Date : " + file.lastModifiedDate+ "\n" +"FIle SIze : "+file.size);
        } else {
          this.fileService.getAsText(file).subscribe((res) => {
            //console.log(res);
          });
          //alert("Name: " + file.name + "\n" + "Last Modified Date :" + file.lastModifiedDate);
        }
      }
      event.stopPropagation();
      event.preventDefault();
    } else {
      alert('File API not support in this browser');
    }

  }
}
