import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeveloperInfoComponent } from './components/developer-info/developer-info.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'random'},
  {path: 'random', component: DashboardComponent},
  {path: 'developer', component: DeveloperInfoComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
