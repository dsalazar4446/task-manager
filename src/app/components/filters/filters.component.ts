import { Variant } from './../../lib/types/variant.type';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() filterActive: EventEmitter<string> = new EventEmitter<string>();
  filters = [
    { id: 1, name: 'Todas', codeName: 'all', isActive: true },
    { id: 2, name: 'Pendientes', codeName: 'pending', isActive: false },
    { id: 3, name: 'Completadas', codeName: 'completed', isActive: false }
  ];
  variant: Variant = 'base';
  constructor() { }

  setActiveFilter(filterName: string) {
    let isActive = false
    this.filters.forEach(filter => {

      filter.isActive = filter.name === filterName;
      isActive =  filter.isActive
    });

    this.getActiveFilter();
  }
  getActiveFilter() {
    
    this.filters.find(filter => filter.isActive)?.codeName
    this.filterActive.emit(this.filters.find(filter => filter.isActive)?.codeName);
  }

}
