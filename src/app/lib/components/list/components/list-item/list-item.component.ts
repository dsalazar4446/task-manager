import { Component, Input } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';
import { Variant } from '../../../../types';

@Component({
  selector: 'todo-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() clickable = false;
  @Input() selected = false;
  @Input() variant: Variant= 'base';
  @Input() icon?: string; // nombre de icono o URL

  constructor(public themeService: ThemeService) {}

  getVariantClasses(): string {
    return this.themeService.getThemeClasses(this.variant);
  }
}
