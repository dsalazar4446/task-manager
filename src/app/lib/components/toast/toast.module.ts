import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './component/toast.component';
import { ToastService } from './service/toast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [ToastService],
  exports: [
    ToastComponent,
  ]
})
export class ToastModule { }
