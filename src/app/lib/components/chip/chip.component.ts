import { Component, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Variant } from '../../types/variant.type';

@Component({
  selector: 'todo-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css'
})
export class ChipComponent {
    @Input() variant: Variant = 'primary';
    
    constructor(private themeService: ThemeService) { }
     
    getVariantClasses(): string {
      return this.themeService.getThemeClasses(this.variant);
    }
}
