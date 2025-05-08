import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const modalAnimation = trigger('modalAnimation', [
    state('out', style({ transform: 'translateY(1000px)', opacity: 0 })),
    state('in', style({ transform: 'translateY(0)', opacity: 1 })),
    transition('void => in', [
    animate(
      '0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      keyframes([
        style({
          transform: 'rotateX(-100deg)',
          transformOrigin: 'top',
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'rotateX(0deg)',
          transformOrigin: 'top',
          opacity: 1,
          offset: 1
        })
      ])
    )
  ]),
  transition('in => out', [
    animate(
      '0.55s cubic-bezier(0.600, -0.280, 0.735, 0.045)',
      keyframes([
        style({
          transform: 'rotateX(0deg)',
          transformOrigin: 'top',
          opacity: 1,
          offset: 0
        }),
        style({
          transform: 'rotateX(70deg)',
          transformOrigin: 'top',
          opacity: 0,
          offset: 1
        })
      ])
    )
  ])
]);