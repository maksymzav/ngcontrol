import { Component, Input, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    selector: 'app-country-select',
    templateUrl: './country-select.component.html',
    styleUrls: ['./country-select.component.scss'],
})
export class CountrySelectComponent implements ControlValueAccessor {

    @Input() required = false;

    @ViewChild('select') select: HTMLSelectElement;

    onChange: (value: any) => void;
    onTouched: () => void;

    constructor(@Self() public controlDir: NgControl) {
      controlDir.valueAccessor = this;

    }

    writeValue(value: any): void {
      this.select.value = value;
    }

    registerOnChange(fn: (value: any) => void): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
    }
}
