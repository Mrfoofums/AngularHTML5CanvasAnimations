import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { LandingComponent } from './landing/landing.component';
import { PrismsComponent } from './prisms/prisms.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPaneComponent,
    LeftPaneComponent,
    LandingComponent,
    PrismsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
