import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector : 'up-size',
  providers: [{
    provide    : NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SizeComponent),
    multi      : true
  }],
  template : `
    <div class="form-group">
      <div class="btn-group">
        <button type="button"
                (click)="setSize('small')"
                [class.active]="size === 'small'"
                class="btn btn-secondary">small
        </button>
        <button type="button"
                (click)="setSize('medium')"
                [class.active]="size === 'medium'"
                class="btn btn-secondary">medium
        </button>
        <button type="button"
                (click)="setSize('large')"
                [class.active]="size === 'large'"
                class="btn btn-secondary">large
        </button>
      </div>
    </div>
  `,
})
export class SizeComponent implements ControlValueAccessor {

  private _size: string;
  private onChangeFn = (_) => _;

  constructor() {
    this.size = '';
  }

  public get size(): string {
    return this._size;
  }

  public set size(value: string) {
    this._size = value;
  }

  public setSize(size) {
    this.size = size;
    this.onChangeFn(this.size);
  }

  writeValue(obj: any): void {
    this.size = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
