import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '../../shared/theme-switch/theme-switch.component';

@Component({
  selector: 'app-extension-list',
  standalone: true,
  imports: [ThemeSwitchComponent],
  templateUrl: './extension-list.component.html',
  styleUrl: './extension-list.component.scss',
})
export class ExtensionListComponent {}
