import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector   : 'up-size',
  templateUrl: './size.component.html',
  providers  : [{
    provide    : NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SizeComponent),
    multi      : true
  }]
})
export class SizeComponent implements ControlValueAccessor {

  private _size: string;
  private onChange: Function;
  private onTouched: Function;

  constructor() {
    this._size     = '';
    this.onChange  = (_) => _;
    this.onTouched = () => '';
  }

  public set size(value: string) {
    this._size = value;
    this.onChange(this.size);
  }

  public get size(): string {
    return this._size;
  }

  writeValue(obj: any): void {
    this.size = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
