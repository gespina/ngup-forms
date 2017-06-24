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

  validate(c: AbstractControl): ValidationErrors | any {
    if (c.value === 'nir@nir.com') {
      return {taken: true}
    }
    return null;
  }
}
