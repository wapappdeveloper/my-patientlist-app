import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { InteractService } from '../../services/interace.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
  patientList = [];
  constructor(private dataService: DataService, private interactService: InteractService, private router: Router) { }

  ngOnInit() {
    this.patientList = this.dataService.patientList;
    this.interactService.receiveData.subscribe((res) => {
      this.patientList = this.dataService.patientList = res;
    }, (err) => {
      console.log(err);
      this.patientList = this.dataService.patientList = this.dataService.patientListHardData;
    })
  }
  ngOnChanges() {
    console.log('some thing changed');
  }

  edit(index: number) {
    this.dataService.editmode = true;
    this.dataService.editIndex = index;
    this.dataService.editPatientDetail = this.patientList[index];
    this.router.navigateByUrl('add');
  }

  delete(index: number) {
    this.patientList.splice(index, 1);
    this.dataService.patientList = this.patientList;
  }

  getAge(dob: any) {
    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();

    var birth = new Date(dob);
    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;

    var adult = true;

    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
      age = parseInt(String(age)) - 1;
    }
    if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
      adult = false;
    }
    return { age: age, adult: adult };
  }

  getDaysInTreatment(admitdate: any) {
    function parseDate(date){
      var ymd = date.split('-');
      return new Date(ymd[0], ymd[1], ymd[2]);
    }
    function datediff(first, second) {
      return Math.round((first - second) / (1000 * 60 * 60 * 24)) + 1;
    }
    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();

    var currentDate = nowyear+'-'+nowmonth+'-'+nowday;
    //console.log(currentDate, admitdate);
    return datediff(parseDate(currentDate), parseDate(admitdate));
  }
}
