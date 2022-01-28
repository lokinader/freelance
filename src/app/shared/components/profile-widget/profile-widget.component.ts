import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.scss'],
})
export class ProfileWidgetComponent implements OnInit {
  public avatar = '../../../../assets/images/8.png';
  public user: { name: string; profilePic: string; role: string };

  constructor() {}

  ngOnInit(): void {}
}
