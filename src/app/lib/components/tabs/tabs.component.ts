import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'todo-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;



  ngAfterContentInit() {

    const activeTab = this.tabs.find(tab => tab.active);
    if (!activeTab && this.tabs.first) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    this.tabs.forEach((tab, i) => tab.active = i === index);
  }
}
