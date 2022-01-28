import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiveHundredComponent } from './five-hundred/five-hundred.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

const routes: Routes = [
  {
    path: '404',
    component: FourOFourComponent,
  },
  {
    path: '500',
    component: FiveHundredComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
