import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { UniqueDirective } from './unique.directive';
import { SizeComponent } from './size/size.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
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
