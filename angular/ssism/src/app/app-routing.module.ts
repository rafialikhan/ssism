import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
// import * as ProfileComponent_1 from "./profile/ProfileComponent";
=======
import { MoreDetailsComponent } from './more-details/more-details.component';
>>>>>>> ac561be6c4b2b4a027f47da6282d3e9d870330a5

export const routes: Routes = [
  { path: '', component: ListComponent },
<<<<<<< HEAD
  { path:'profile', component:ProfileComponent }
=======
  { path: 'list', component: ListComponent },
  { path: 'more-details', component: MoreDetailsComponent },
>>>>>>> ac561be6c4b2b4a027f47da6282d3e9d870330a5
];


// export class AppRoutingModule{}


