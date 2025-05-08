import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './component/modal.component';
import { ModalService } from './service/modal.service';
import { ButtonModule } from '../button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ModalService],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
