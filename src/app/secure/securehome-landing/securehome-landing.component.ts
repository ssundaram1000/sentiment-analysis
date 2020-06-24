import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-securehome-landing',
  templateUrl: './securehome-landing.component.html',
  styleUrls: ['./securehome-landing.component.css']
})
export class SecurehomeLandingComponent implements OnInit {
  username: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
      .then(data => this.username = data.username)
      .catch(err => {
        this.router.navigate(['/home/login']);
      });
  }

  onLogOut() {
    Auth.signOut()
      .then(data => {
        console.log(data);
        console.log('You are successfully logged out');
        this.router.navigate(['/home/login']);
      })
      .catch(err => console.log(err));
  }
}
