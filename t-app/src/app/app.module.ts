import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinesComponent } from './lines/lines.component';
import {HttpClientModule} from "@angular/common/http";
import { LineDetailComponent } from './line-detail/line-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    LineDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
