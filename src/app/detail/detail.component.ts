import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  captured = false;

  constructor(
      private  route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    //add here a fetch pokemon data function
  }

  isCaptured() {
    return this.captured;
  }

  capture() {
    this.captured = true;
  }

  release() {
    this.captured = false;
  }

}
