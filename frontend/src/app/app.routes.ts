import { Routes } from '@angular/router';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [
  { path: 'feedback', component: MultiStepFormComponent },
  { path: 'dashboard', component: DashboardComponent }
];
