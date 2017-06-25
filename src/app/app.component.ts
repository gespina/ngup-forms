import {Component} from '@angular/core';

@Component({
  selector: 'up-root',
  template: `
    <div class="container">
      <h1>Reactive Forms</h1>
      <up-user-form></up-user-form>
    </div>
  `,
})
export class AppComponent {
}
