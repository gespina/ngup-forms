import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector   : 'up-user-form',
  templateUrl: './user-form.component.html',
  styles     : ['input.ng-invalid {border-color: red;}']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name : null,
      email: null,
      size : null,
    });
  }

  ngOnInit() {

  }

  get name(): FormControl {
    return this.userForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  send() {
    console.log(this.userForm.value);
  }

  reset() {
    this.userForm.reset()
  }

}
