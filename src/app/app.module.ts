import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UniqueDirective } from './user-form/unique.directive';
import { SizeComponent } from './user-form/size/size.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UniqueDirective,
    SizeComponent
  ],
  imports     : [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
