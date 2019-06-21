import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'profile/:candidateId', component: ProfileComponent },
  { path: 'list', component: ListComponent },
  { path: 'more-details/:candidateId', component: MoreDetailsComponent },

]


export class AppRoutingModule{}


