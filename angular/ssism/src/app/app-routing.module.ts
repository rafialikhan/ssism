import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path:'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
