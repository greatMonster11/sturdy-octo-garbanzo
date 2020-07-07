import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Component go here:
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
}

// ng
