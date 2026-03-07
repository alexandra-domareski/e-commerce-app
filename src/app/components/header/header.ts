import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <p>{{ title() }}</p> `,
  styles: ``,
})
export class Header {
  title = signal('My E-commerce App');
}
