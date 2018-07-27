import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
  allPatientDetail = [ ];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.allPatientDetail = JSON.parse(JSON.stringify(this.dataService.patientList));
  }

}
