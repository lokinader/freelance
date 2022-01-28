import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { LocalStorageService } from './services/local-storage.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TokenInterceptorService, LocalStorageService, HttpService],
})
export class CoreModule {}
