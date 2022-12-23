import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import { throwError } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  router: ActivatedRoute;
  sucess: boolean;
  message: string = '';

  constructor(r:ActivatedRoute) {
    this.router = r;
    this.sucess = false;
  }

  ngOnInit(){

    this.router.queryParams.subscribe(params => {
      this.sucess = params['sucess']
      this.message = params['message']
    })
  }
}
