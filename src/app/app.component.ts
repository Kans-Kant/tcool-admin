import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tcool-admin';

  constructor() {

  }

  ngOnInit(): void {
  }

  onActivate(event) {
    window.scroll(0,0);
  }
}
