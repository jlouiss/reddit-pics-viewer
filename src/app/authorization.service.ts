import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  handleAuthorizationGrant(code) {
    return this.getAccessToken(code)
      .pipe(
        tap(({ access_token }: any) => localStorage.setItem('rpv_access_token', access_token))
      );
  }

  private getAccessToken(code) {
    return this.http.post(`https://www.reddit.com/api/v1/access_token`, {
      grant_type: 'authorization_code',
      code,
      redirect_url: 'http://localhost:4200/home'
    });
  }

}
