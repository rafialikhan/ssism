import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ListComponent } from './list/list.component';
=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 57d2cc9fe1112129dfca1f8037b86eafb9e8ad0a

// @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');
@NgModule({
<<<<<<< HEAD
   declarations: [
      AppComponent,
      ListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
=======
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> 57d2cc9fe1112129dfca1f8037b86eafb9e8ad0a
})
export class AppModule { }
