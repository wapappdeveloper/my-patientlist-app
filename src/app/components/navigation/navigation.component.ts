import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  clear(){
    this.dataService.editIndex = null;
    this.dataService.editmode = false;
    this.dataService.editPatientDetail = null;
  }

}
