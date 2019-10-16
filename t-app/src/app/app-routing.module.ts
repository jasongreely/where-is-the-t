import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinesComponent} from "./lines/lines.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {
    path: 'lines',
    component: LinesComponent,
    data: {title : 'Lines Test'}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
