import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() title = '';
  @Input() active = false;
  @Input() route = '';

}
