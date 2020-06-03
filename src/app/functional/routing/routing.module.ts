import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoutingConstants} from './RoutingConstants';
import {PatientsListComponent} from '../../pages/patients-list/patients-list.component';
import {PatientPageComponent} from '../../pages/patient-page/patient-page.component';
const appRoutes: Routes = [
  {path: RoutingConstants.PATIENTS, component: PatientsListComponent},
  {path: RoutingConstants.PATIENTS_DETAILS, component: PatientPageComponent},
  {path: '**', redirectTo: RoutingConstants.PATIENTS, pathMatch: 'full'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
