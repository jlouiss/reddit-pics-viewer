import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthorizationService } from '../authorization.service';
import { environment as env } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line
  public authorizationUrl = `${env.authBaseUrl}?client_id=${env.clientId}&response_type=code&state=${env.random_string}&redirect_uri=${env.redirect_uri}&duration=permanent&scope=read`;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    const { queryParams } = this.route.snapshot;

    if (queryParams.error || !queryParams.code || queryParams.state !== env.random_string || !localStorage.getItem('rpv_access_token'))
      this.router.navigate(['/home']);

    console.log(queryParams);
    console.log('passing', queryParams);

    this.authorizationService.handleAuthorizationGrant(queryParams.code)
      .subscribe(response => {
        this.router.navigate(['/pics']);
      }, error => {
        console.error(error);
        console.log('Please reload and try again.');
      });
  }
}


