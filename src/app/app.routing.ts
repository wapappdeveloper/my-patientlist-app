import { Routes } from '@angular/router';
import { PatientlistComponent } from './components/patientlist/patientlist.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
    { path: '', component: PatientlistComponent, pathMatch: 'full' },
    { path: 'add', component: FormComponent }
];
