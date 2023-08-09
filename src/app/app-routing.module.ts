import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatepageComponent } from './navigatepage/navigatepage.component';
import { NavwithmoduleviewComponent } from './navwithmoduleview/navwithmoduleview.component';

const routes: Routes = [
  { path: '', redirectTo: 'navigatepage', pathMatch: 'full' },
  { path: 'navigatepage', component: NavigatepageComponent },
  { path: 'navwithmoduleview', component: NavwithmoduleviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
