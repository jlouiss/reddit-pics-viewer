import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.scss']
})
export class PicsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // public getInfo() {
  //   return this.http.get('https://www.reddit.com/r/pics/api/info');
  // }
  // export type SubredditListingEndpoint = 'hot' | 'new' | 'random' | 'rising' | 'top' | 'controversial';

  // public getSubredditListing(listingType: SubredditListingEndpoint = 'random') {
  //   return this.http.get(`https://www.reddit.com/r/pics/${listingType}`);
  // }
}
