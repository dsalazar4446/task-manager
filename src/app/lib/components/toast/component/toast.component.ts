import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toastAnimation } from './toast.animation';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  animations: [
   toastAnimation
  ]
})
export class ToastComponent {
  @Input() message = '';
  @Input() duration = '3000'; 
  @Output() onAnimationDone = new EventEmitter<AnimationEvent>();
  isVisible = false;
  state = 'void';


  toggleAnimation() {
    this.state = this.state === 'out' ? 'in' : 'out';    
  }

  animationDone(event: any) {
    this.onAnimationDone.emit(event);
  }
}
