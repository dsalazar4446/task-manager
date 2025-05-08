import { Component, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Variant, ButtonType } from '../../types';

@Component({
  selector: 'todo-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  private _variant: Variant = 'primary';
  // @Input() variant: Variant = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
  
  @Input()
  public set variant(value : Variant) {
    const defaultValues: Array<Variant> = ['primary', 'secondary', 'accent', 'info', 'base', 'warning', 'danger'];
      this._variant = (defaultValues.includes(value)) ? value : 'primary';
  }
  get variant(): Variant {
    return this._variant;
  }

  
  constructor(private theme: ThemeService) { }
  get classes(): string {
    return this.theme.getThemeClasses(this.variant);
  }

}
