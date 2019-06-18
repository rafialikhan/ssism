import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MoreDetailsComponent } from './more-details/more-details.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'more-details', component: MoreDetailsComponent },
];


// export class AppRoutingModule{}


