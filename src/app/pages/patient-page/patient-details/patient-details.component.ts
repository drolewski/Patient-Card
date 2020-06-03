import {Component, Input, OnInit} from '@angular/core';
import {FlatPatient} from '../../models';
import {MatDialog} from "@angular/material/dialog";
import {DataService} from '../../../functional/data/data.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  @Input('patientId')
  patientId: string;

  patient: FlatPatient;

  languages: string;

  constructor(private dialog: MatDialog, private data: DataService) { }

  ngOnInit() {
    this.updatePatient();
  }

  updatePatient(patient = null) {
    this.getPatientData(patient).then(() => {
      this.languages = this.patient.communications
        .map(com => com.language.coding.map(c => c.display).join(', '))
        .join(', ');
    });
  }

  getPatientData(patient = null) {
    return (patient == null
      ? this.data.getPatientData(this.patientId, true)
      : Promise.resolve(patient)
    ).then(p => {
      console.log(p);
      return this.patient = FlatPatient.fromResource(p);
    });
  }
}
