import { trigger, transition, style, animate, AnimationTriggerMetadata, state } from "@angular/animations";

export const toastAnimation: AnimationTriggerMetadata =
    trigger('toastAnimation', [
        state('out', style({ transform: 'translateY(1000px)', opacity: 0 })),
        state('in', style({ transform: 'translateY(0)', opacity: 1 })),
        transition('void => in', [
            style({ transform: 'translateY(1000px)', opacity: 0 }),
            animate(
                '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                style({ transform: 'translateY(0)', opacity: 1 })
            )
        ]),
        transition('in => out', [
            animate(
                '0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)',
                style({ transform: 'translateY(1000px)', opacity: 0 })
            )
        ])
    ])
  

