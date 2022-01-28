import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-prime-input',
  templateUrl: './prime-input.component.html',
  styleUrls: ['./prime-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimeInputComponent),
      multi: true,
    },
  ],
})
export class PrimeInputComponent implements OnInit {
  value: string;
  @Input() disabled?: boolean;
  @Input() placeholder?: string;
  @Input() type = 'text';
  @Input() showError?: boolean;

  value3: string;

  constructor() {}

  public onChange: any = () => {};
  public onTouch: any = () => {};

  ngOnInit() {}

  public getInputValue(inputValue: string): void {
    this.onChange(inputValue);
  }

  // this method sets the value programmatically
  private writeValue(value: any): void {
    this.value = value;
  }

  // upon UI element value changes, this method gets triggered
  private registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // upon touching the element, this method gets triggered
  private registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  private setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
