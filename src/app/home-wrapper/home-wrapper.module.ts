import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeWrapperRoutingModule } from './home-wrapper-routing.module';
import { DashobardComponent } from './dashobard/dashobard.component';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { SharedModule } from '../shared/shared.module';
import { HomeWrraperService } from './home-wrraper.service';

@NgModule({
  declarations: [DashobardComponent, HomeWrapperComponent],
  imports: [CommonModule, HomeWrapperRoutingModule, SharedModule],
  providers: [HomeWrraperService],
})
export class HomeWrapperModule {}
