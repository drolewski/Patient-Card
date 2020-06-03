import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";

const MATERIAL_MODULES = [
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatTooltipModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatTableModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  declarations: []
})
export class MaterialModule { }
