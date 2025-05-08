import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'todo-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(public themeService: ThemeService) { }

  toggle(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  getBackgroundClass(): string {
    return this.checked
      ? this.themeService.getThemeClasses('accent') 
      : this.themeService.getThemeClasses('danger'); 
  }
}
