import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashobardComponent } from './dashobard/dashobard.component';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: HomeWrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: DashobardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeWrapperRoutingModule {}
