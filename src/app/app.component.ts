import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { DataService } from './services/data.service';
import { InteractService } from './services/interace.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test-app';
  url: string = 'assets/data/data.json';

  constructor(private router: Router, private dataService:DataService, private commonService: CommonService, private interactService:InteractService) {
  }

  ngOnInit() {
    this.commonService.loadJSON(this.url, this.jsonLoaded.bind(this), this.jsonFailed.bind(this));
    this.router.navigateByUrl('add');
  }

  jsonLoaded(res) {
    console.log(res);
    this.dataService.patientList = res;
    this.interactService.sendData(res);
  }

  jsonFailed(err) {
    console.log(err);
    this.dataService.patientList = this.dataService.patientListHardData;
    this.interactService.sendError(err);
  }
}
