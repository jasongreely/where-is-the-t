import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinesComponent} from "./lines/lines.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {LineDetailComponent} from "./line-detail/line-detail.component";


const routes: Routes = [
  {
    path: 'lines',
    component: LinesComponent,
    data: {title : 'Lines Test'}
  },
  {
    path: 'lines/:id',
    component: LineDetailComponent,
    data: {title : 'Line Detail'}
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
