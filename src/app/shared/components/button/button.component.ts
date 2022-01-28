import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() class: string;
  @Input() disabled: boolean;
  @Input('showLoader') showLoader?: boolean | string;
  @Input('loadingTxt') loadingTxt?: string;

  @Output() clickEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  handleClick(): void {
    this.clickEvent.emit(true);
  }
}
