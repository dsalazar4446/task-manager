import { Component } from '@angular/core';
import { ThemeService } from '../../lib/services/theme.service';

@Component({
  selector: 'todo-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private theming: ThemeService) {}
changeToggle(event: any) {
  const theme = !event ?  'dark' : 'light';
  this.theming.setTheme(theme);
}
}
