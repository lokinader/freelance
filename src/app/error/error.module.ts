import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { FiveHundredComponent } from './five-hundred/five-hundred.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';


@NgModule({
  declarations: [FiveHundredComponent, FourOFourComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
