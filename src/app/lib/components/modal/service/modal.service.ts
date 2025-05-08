import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable } from '@angular/core';
import { ModalComponent } from '../component/modal.component';
import { map } from 'rxjs';

@Injectable()
export class ModalService {
  
  constructor(private appRef: ApplicationRef, private injector: EnvironmentInjector) { }
  
  create({ message, title, buttonOk = 'Aceptar', isOpen = false }: { message: string; title?: string, buttonOk?: string, isOpen?: boolean }) {
    const component = createComponent(ModalComponent, {
      environmentInjector: this.injector
    })

    component.instance.message = message;
    component.instance.title = title;
    component.instance.isOpen = isOpen;
    component.instance.buttonOk = buttonOk;
    

    return component
  }

  show(component: ComponentRef<ModalComponent>): Promise<any> {

    return new Promise((resolve, reject) => {
      this.appRef.attachView(component.hostView);
      document.body.appendChild(component.location.nativeElement);
      component.instance.isOpen = true;
     
      component.instance.onClose.subscribe((data: any) => {
        this.appRef.detachView(component.hostView);
        component.instance.isOpen = false;
        component.destroy();
        resolve(data);
      });

    })

  }
}
