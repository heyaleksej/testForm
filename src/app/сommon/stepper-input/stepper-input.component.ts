import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stepper-input',
  templateUrl: './stepper-input.component.html',
  styleUrls: ['./stepper-input.component.css']
})
export class StepperInputComponent {
  @Input() label!: string
  value = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  onValueChange(newValue: number) {
    this.value = newValue;
  }
}
