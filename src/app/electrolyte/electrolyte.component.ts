import {Component} from '@angular/core';
import {validateRange} from './../validate-helper'

@Component({
  selector: 'app-electrolyte',
  templateUrl: './electrolyte.component.html',
  styleUrls: ['./electrolyte.component.css']
})
export class ElectrolyteComponent {
  //slider
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  validateRange = validateRange;
  //radio
  selectedOption!: string;
  options = [
    {label: 'Commercial reagent', disabled: false},
    {label: 'Custom reagent', disabled: false},
  ]
}
