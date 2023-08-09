import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavwithmoduleviewComponent } from './navwithmoduleview/navwithmoduleview.component';
import { NavigatepageComponent } from './navigatepage/navigatepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavwithmoduleviewComponent,
    NavigatepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
