import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector   : 'up-create-user',
  templateUrl: './create-user.component.html',
  styles     : [` input.ng-invalid {
    border-color: red
  } `]
})
export class CreateUserComponent {

  public userForm: FormGroup;

  constructor(builder: FormBuilder) {
    this.userForm = builder.group({
      name : null,
      email: null,
      size : null
    });

  }

  get name(): FormControl {
    return this.userForm.get('name') as FormControl
  }

  get email(): FormControl {
    return this.userForm.get('email') as FormControl
  }

  reset() {
    this.userForm.reset();
  }

  send() {
    console.log(this.userForm.value);
  }

}
