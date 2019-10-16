import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
  lines:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getLines();
  }

  getLines() {
    this.lines = [];
    this.rest.getLines().subscribe((data: {}) => {
      console.log(data);
      this.lines = data;
    })
  }

}
