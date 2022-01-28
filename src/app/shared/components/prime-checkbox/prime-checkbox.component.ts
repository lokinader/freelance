import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-prime-checkbox',
  templateUrl: './prime-checkbox.component.html',
  styleUrls: ['./prime-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimeCheckboxComponent),
      multi: true,
    },
  ],
})
export class PrimeCheckboxComponent implements OnInit {
  value: string;
  disabled: boolean;
  @Input('class') class?: string;
  @Input('label') label?: string;

  constructor() {}

  public onChange: any = () => {};
  public onTouch: any = () => {};

  ngOnInit() {}

  public onCheckboxStateChange(checkboxStatus: {
    checked: boolean;
    originalEvent: PointerEvent;
  }): void {
    this.onChange(checkboxStatus.checked);
  }

  // this method sets the value programmatically
  public writeValue(value: any): void {
    this.value = value;
  }

  // upon UI element value changes, this method gets triggered
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // upon touching the element, this method gets triggered
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
