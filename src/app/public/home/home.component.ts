import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<p>This is about us"</p>'
})
export class AboutComponent {

}

@Component({
  selector: 'app-home',
  templateUrl: './landinghome.html'
})
export class HomeLandingComponent {
  constructor() {
    console.log('HomeLandingComponent constructor');
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
