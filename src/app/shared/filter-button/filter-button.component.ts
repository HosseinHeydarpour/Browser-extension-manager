import { Component } from '@angular/core';

@Component({
  selector: 'button[appFilterButton]',
  standalone: true,
  imports: [],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.scss',
  host: {
    class: 'btn-filter',
  },
})
export class FilterButtonComponent {}
