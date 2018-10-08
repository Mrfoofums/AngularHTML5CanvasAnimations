import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPaneComponent,
    LeftPaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
