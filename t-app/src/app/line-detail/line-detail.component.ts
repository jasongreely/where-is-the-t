import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {split} from "ts-node";

@Component({
  selector: 'app-line-detail',
  templateUrl: './line-detail.component.html',
  styleUrls: ['./line-detail.component.scss']
})
export class LineDetailComponent implements OnInit {

  stops: any = [];
  line: string;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let clean_id = this.route.snapshot.params['id'].split("-").pop();

    this.route.queryParams.subscribe(params => {
      this.line = params['long_name'];
    });
    console.log(this.line);

    this.rest.getStops(clean_id).subscribe((data: {}) => {
      this.stops = data;
      console.log(this.stops);
    })
  }
}
