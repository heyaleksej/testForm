import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-device-form',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],

})
export class DeviceFormComponent {
  deviceForm: FormGroup;
  devices: FormGroup[] = [];
  devicesList: string[] = ['newDevice'];

  constructor(
    private fb: FormBuilder,
  ) {
    const initialDeviceGroup = this.fb.group({
      voltage: '',
      conditions: '',
      duration: '',
      ramp: '',
      repeat: ''
    });
    this.devices.push(initialDeviceGroup);
    this.deviceForm = this.fb.group({
      device: this.fb.array([initialDeviceGroup])
    });
  }

  addDevice() {
    const deviceGroup = this.fb.group({
      voltage: '',
      conditions: '',
      duration: '',
      ramp: '',
      repeat: ''
    });
    this.devices.push(deviceGroup);
    this.devicesList.push('newDevice' + (this.devices.length + 1))
    this.deviceForm.setControl('device', this.fb.array(this.devices));
  }
  deleteDevice(index: number) {
    this.devices.splice(index, 1);
    this.devicesList.splice(index, 1);
    this.deviceForm.setControl('device', this.fb.array(this.devices));
  }
}
