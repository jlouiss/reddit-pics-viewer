import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  handleAuthorizationGrant(code) {
    return this.getAccessToken(code)
      .pipe(
        tap(console.log),
        tap(({ access_token }: any) => localStorage.setItem('rpv_access_token', access_token))
      );
  }

  private getAccessToken(code) {
    return this.http.post(
      `https://www.reddit.com/api/v1/access_token`,
      `grant_type=authorization_code&code=${code}&redirect_uri=${env.redirect_uri}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${env.clientId}:${env.secret}`)}`
        })
      });
  }

}
