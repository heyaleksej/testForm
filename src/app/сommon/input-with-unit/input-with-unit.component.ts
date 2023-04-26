import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Component({
  selector: 'app-input-with-unit',
  templateUrl: './input-with-unit.component.html',
  styleUrls: ['./input-with-unit.component.css'],
})
export class InputWithUnitComponent {
  @Input() value: any;
  @Input() unit!: string;
  @Input() customWidth!: string;
  @Input() validator!: ValidatorFn;
  @Output() valueChange = new EventEmitter<number>();


  onInputChange(event: Event) {
    const newValue = parseFloat((event.target as HTMLInputElement).value);
    this.value = newValue;
    this.valueChange.emit(newValue);
  }}
