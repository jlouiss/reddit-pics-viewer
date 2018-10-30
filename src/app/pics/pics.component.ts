import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PicsService } from './pics.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.scss']
})
export class PicsComponent implements OnInit {

  posts$: Observable<any[]>;

  constructor(private picsService: PicsService) {
  }

  ngOnInit() {
    this.posts$ = this.picsService.getSubredditListing('top')
      .pipe(map((response: any) => response.data.children));
  }

  getInfo() {
    return this.picsService.getInfo();
  }

  getListing() {
    return this.picsService.getSubredditListing();
  }


}
