import { Injectable, ApplicationRef, createComponent, EnvironmentInjector, ComponentRef } from '@angular/core'; 
import { ToastComponent } from '../component/toast.component';

@Injectable()
export class ToastService {

  constructor(private appRef: ApplicationRef, private injector: EnvironmentInjector) { }

  create({ message, duration = 2000, isVisible = true }: { message: string; duration?: number, isVisible?: boolean }) {
    const component = createComponent(ToastComponent, {
      environmentInjector: this.injector
    })

    component.instance.message = message;
    component.instance.duration = String(duration);
    component.instance.isVisible = isVisible;    
    return component
  }

  show(toast: ComponentRef<ToastComponent>) {
    this.appRef.attachView(toast.hostView);
    document.body.appendChild(toast.location.nativeElement);
    toast.instance.isVisible = true;
    toast.instance.state = 'in';

    let entered = false;

    toast.instance.onAnimationDone.subscribe((e: any) => {
      
      if (e.toState === 'in' && !entered) {
        entered = true;
        
        // ✅ Esperamos 3 segundos DESPUÉS de animar la entrada
        setTimeout(() => {
          
          toast.instance.state = 'out'; // esto activa la animación de salida
        }, Number(toast.instance.duration));
      }

      if (e.toState === 'out') {
        // ✅ Animación de salida terminada, limpiamos
        this.appRef.detachView(toast.hostView);
        toast.destroy();
      }
    });
  }
  
}
