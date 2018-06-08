import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.attemptAuth(username, password);
    setTimeout( () => {
      if ( this.authService.error === null) {
        this.router.navigate(['']);
      }
    }, 1000);
  }

  getErrorMessage() {
    return this.authService.error != null;
  }

  getToken() {
    return this.authService.token != null;
  }

}
