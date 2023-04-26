import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function validateRange(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || isNaN(value)) {
      return null;
    }
    if (value < min || value > max) {
      return { range: { actual: value, expected: `between ${min} and ${max}` } };
    }
    return null;
  };
}
