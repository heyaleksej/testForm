import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
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

