import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
