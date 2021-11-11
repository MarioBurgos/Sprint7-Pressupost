import { DASHBOARD_DATA } from './../../data/dashboard.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public DATA = DASHBOARD_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
