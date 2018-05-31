import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  getUsername() {
    return this.authService.username;
  }

  getStatusToken() {
    return this.authService.token != null;
  }

  checkAdminAuth() {
    return this.authService.checkAdminAuth();
  }

  onLogout() {
    this.authService.token = null;
    this.authService.authAdmin = false;
    this.router.navigate(['']);
  }

}
