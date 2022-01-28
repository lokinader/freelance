import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public navigationList = [
    {
      name: 'Dashboard',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Masters',
      icon: 'icon-home',
      expandable: true,
      subElement: ['Assigment', 'Employee', 'QR Code', 'Access Control'],
    },
    {
      name: 'Attendance',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'SOS Alerts',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Site Visits Schedule',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Site Inspection',
      icon: 'icon-home',
      expandable: true,
      subElement: [
        'Manage Checklist',
        'Inspection Reports',
        'Inspection Deviations',
      ],
    },
    {
      name: 'Leave Management',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Incident Management',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Site Patrolling',
      icon: 'icon-home',
      expandable: true,
      subElement: [
        'Dashboard',
        'Manage Posts',
        'Manage Tours',
        'Manage Questionnaire',
        'Tour Schedule',
        'Tour Reports',
        'Tour Deviation',
        'Compliance Report',
      ],
    },
    {
      name: 'Customer Contact',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Probabel Absconders',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Unauthorized Abscene',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Team Resignation',
      icon: 'icon-home',
      expandable: false,
    },
    {
      name: 'Message Broadcast',
      icon: 'icon-home',
      expandable: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
   
  }

  public toggleSubElement(index: number): void {
    this.navigationList[index]['hideSubElement'] =
      !this.navigationList[index]['hideSubElement'];
  }
}
