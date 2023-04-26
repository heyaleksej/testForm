import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sections-list',
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.css']
})
export class SectionsListComponent {
  devices: FormGroup[] = [];


  CreateDeviceFormGroup(): FormGroup {
    return new FormGroup({
      voltage: new FormControl(''),
      conditions: new FormControl(''),
      duration: new FormControl(''),
      ramp: new FormControl(''),
      repeat: new FormControl('')
    });
  }

  addDevice() {
    this.devices.push(this.CreateDeviceFormGroup());
  }
}

