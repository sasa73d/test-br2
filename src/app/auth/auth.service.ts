import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import {ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthService {
  readonly TOKEN_URL = 'http://localhost:8080/login';
  token: string;
  decodeToken: object;
  authAdmin = false;
  username: string;
  error: object;
  constructor(private http: HttpClient) { }

  attemptAuth(username: string, password: string) {
    const credentials = {username: username, password: password};
    this.http.post(this.TOKEN_URL, credentials, {responseType: 'text'})
      .subscribe(
        (token: string) => {
          localStorage.setItem('authToken', token);
          this.setToken();
          this.error = null;
        },
        (error) => {
          this.error = error;
        }
      );
  }

  setToken() {
    if (localStorage.getItem('authToken')) {
      this.token = localStorage.getItem('authToken');
      this.decodeToken = this.getDecodedAccessToken(this.token);
      this.username = this.decodeToken['sub'];
      for (const obj of this.decodeToken['scopes']) {
        if (obj['authority'] === 'ROLE_ADMIN') {
          this.authAdmin = true;
        }
      }
    }
  }

  logOut() {
    this.token = null;
    localStorage.removeItem('authToken');
    this.authAdmin = false;
  }

  checkAdminAuth() {
    return this.authAdmin;
  }

  isAuthenticate(route: ActivatedRouteSnapshot) {
    const promise = new Promise((resolve, reject) => {
        if (this.token) {
          if (route.url.toString() === 'edit' &&
            this.decodeToken['scopes'].find(x => x['authority'] === 'ROLE_USER')) {
            resolve(true);
          } else if (route.url.toString() === 'users' &&
            this.decodeToken['scopes'].find(x => x['authority'] === 'ROLE_ADMIN')) {
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      }
    );
    return promise;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
