import { Component } from '@angular/core';
import { ExtensionListComponent } from './features/extension-list/extension-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExtensionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'browser-extensions-manager';
}
