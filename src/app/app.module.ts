import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { SectionsListComponent } from './sections-list/sections-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './сommon/button/button.component';
import { HeaderComponent } from './header/header.component';
import { BreakLineComponent } from './сommon/break-line/break-line.component';
import { CellComponent } from './cell/cell.component';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import { ElectrolyteComponent } from './electrolyte/electrolyte.component';
import {NgUnitsModule} from "ng-units";
import {MatSliderModule} from '@angular/material/slider';
import { InputWithUnitComponent } from './сommon/input-with-unit/input-with-unit.component';
import {MatRadioModule} from "@angular/material/radio";
import { SelectMenuComponent } from './сommon/select-menu/select-menu.component';
import {DeviceFormComponent} from './device/device.component';
import { StepperInputComponent } from './сommon/stepper-input/stepper-input.component';
import { SaveSectionComponent } from './save-section/save-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionsListComponent,
    ButtonComponent,
    HeaderComponent,
    BreakLineComponent,
    CellComponent,
    ElectrolyteComponent,
    InputWithUnitComponent,
    SelectMenuComponent,
    DeviceFormComponent,
    StepperInputComponent,
    SaveSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // other imports ...
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatSliderModule,
    MatRadioModule,
    NgUnitsModule.forRoot(),

  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
