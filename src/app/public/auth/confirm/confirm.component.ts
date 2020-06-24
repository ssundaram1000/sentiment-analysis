import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Auth } from 'aws-amplify';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  errorMessage: string;
  username: string;
  confirmationCode: string;
  sub: Subscription;

  constructor(public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.sub = this.route.params.subscribe(params => {
    //   this.username = params.username;
    // });
  }

  onConfirmRegistration(): void {
    console.log('username ' + this.username + ' ' + this.confirmationCode);
    Auth.confirmSignUp(this.username, this.confirmationCode,
      {forceAliasCreation: true}).then(data => {
      console.log(data);
    })
      .catch(err => console.log(err));

  }

}
