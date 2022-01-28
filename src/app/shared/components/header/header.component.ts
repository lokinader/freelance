import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationMenu } from '../../enums/navigation-menu.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerTxt: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.headerTxt = NavigationMenu[this._router.url.split('?')[0].split('/').pop()];
  }

}
