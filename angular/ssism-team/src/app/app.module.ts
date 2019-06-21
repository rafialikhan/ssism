import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DetailsComponent } from './details/details.component';
=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentsListComponent } from './students-list/students-list.component';
>>>>>>> b2ed5f0ab9bccb7a4ea7dfe3e1558ff3392dbf30

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DetailsComponent
=======
    HeaderComponent,
    FooterComponent,
    StudentsListComponent
>>>>>>> b2ed5f0ab9bccb7a4ea7dfe3e1558ff3392dbf30
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
