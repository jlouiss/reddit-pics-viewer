import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment as env } from '../../environments/environment';


export type SubredditListingEndpoint = 'hot' | 'new' | 'random' | 'rising' | 'top' | 'controversial';

@Injectable({
  providedIn: 'root'
})
export class PicsService {

  get authorizationHeader() {
    return { 'Authorization': `bearer ${localStorage.getItem('rpv_access_token')}` };
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  public getInfo() {
    return this.http.get(`${env.redditAPIUrl}/r/pics/api/info`, { headers: this.authorizationHeader });
  }

  public getSubredditListing(listingType: SubredditListingEndpoint = 'random') {
    return this.http.get(`${env.redditAPIUrl}/r/pics/${listingType}`, { headers: this.authorizationHeader });
  }

}
