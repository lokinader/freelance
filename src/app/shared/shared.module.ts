import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrimeInputComponent } from './components/prime-input/prime-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { PrimeCheckboxComponent } from './components/prime-checkbox/prime-checkbox.component';
import { DirectiveModule } from './directives/directives.module';
import { ProfileWidgetComponent } from './components/profile-widget/profile-widget.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderComponent,
    PrimeInputComponent,
    ButtonComponent,
    PrimeCheckboxComponent,
    ProfileWidgetComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
  ],
  exports: [
    SideMenuComponent,
    HeaderComponent,
    PrimeInputComponent,
    ButtonComponent,
    PrimeCheckboxComponent,
    ProfileWidgetComponent,
  ],
})
export class SharedModule {}
