import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { ListModule } from './list/list.module';
import { ModalModule } from './modal/modal.module';
import { ToastModule } from './toast/toast.module';
import { ButtonModule } from './button/button.module';
import { ToggleModule } from './toggle/toggle.module';
import { ChipModule } from './chip/chip.module';
import { CardModule } from './card/card.module';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { TabsModule } from './tabs/tabs.module';
import { ContentModule } from './content/content.module';



@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    ToastModule,
    ListModule,
    ToggleModule,
    ChipModule,
    CardModule,
    ListModule,
    HeaderModule,
    TabsModule,
    ContentModule
  ],
  exports: [
    ModalModule,
    ToastModule,
    ListModule,
    ButtonModule,
    ToggleModule,
    ChipModule,
    CardModule,
    ListModule,
    HeaderModule,
    TabsModule,
    ContentModule
  ]
})
export class ComponentsModule { }
