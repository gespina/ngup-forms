import {Directive, forwardRef} from '@angular/core';
import {Validator, AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector : '[upUnique]',
  providers: [{
    provide    : NG_VALIDATORS,
    useExisting: forwardRef(() => UniqueDirective),
    multi      : true
  }]
})
export class UniqueDirective implements Validator {

  public validate(c: AbstractControl): ValidationErrors | any {
    const db = ['nir@nir.com'];

    if (db.indexOf(c.value) !== -1) {
      return {unique: false};
    }
    return null;
  }
}
