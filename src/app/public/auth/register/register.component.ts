import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';
import {RegistrationUser} from '../../../model/RegistrationUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  router: Router;
  user: RegistrationUser;
  errorMessage: string;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    console.log('In on Init');
    this.user = new RegistrationUser();
    this.errorMessage = null;
  }

  onRegister() {
    console.log('Will Register ' + this.user.username + ' ' + this.user.password + ' '
      + this.user.attributes.name + ' ' + this.user.attributes.email);

    this.errorMessage = null;
    this.user.attributes.email = this.user.attributes.email.toLowerCase();
    this.user.username = this.user.username.toLowerCase();

    Auth.signUp(this.user)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));

  }



}
