import { modalAnimation } from './modal.animation';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  animations: [
    modalAnimation
  ]
})
export class ModalComponent {
  @Input() message: string | undefined = '';
  @Input() title: string | undefined = '';
  @Input() isOpen: boolean = false;
  @Input() buttonOk: string = 'Ok';
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onAnimationDone = new EventEmitter<AnimationEvent>();

  cerrarModal() {
    
    this.onClose.emit(null);
  }
  confirm() {
    this.onClose.emit(true);
  }
   animationDone(event: any) {
    this.onAnimationDone.emit(event);
  }

}
