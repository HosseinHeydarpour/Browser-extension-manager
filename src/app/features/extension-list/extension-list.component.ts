import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '../../shared/theme-switch/theme-switch.component';
import { FilterButtonComponent } from '../../shared/filter-button/filter-button.component';

@Component({
  selector: 'app-extension-list',
  standalone: true,
  imports: [ThemeSwitchComponent, FilterButtonComponent],
  templateUrl: './extension-list.component.html',
  styleUrl: './extension-list.component.scss',
})
export class ExtensionListComponent {}
