import {Component} from '@angular/core';

@Component({
  selector: 'up-root',
  template: `
    <div class="container">
      <h1>Reactive Forms</h1>
      <up-create-user></up-create-user>
    </div>
  `,
})
export class AppComponent {
}
