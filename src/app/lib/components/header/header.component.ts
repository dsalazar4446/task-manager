import { Component, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Variant } from '../../types';

@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() variant: Variant= 'base';

  constructor(public themeService: ThemeService) {}

  getVariantClasses(): string {
    return this.themeService.getThemeClasses(this.variant);
  }
}
