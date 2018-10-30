import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly clientId = 'zYpfAI2IwYY0uQ';
  private readonly secret = 'w7MuFk-NKEX-by7EyL_sQVQDGog\n';
  private readonly random_string = 'sQVQDGog';

  public authorizationUrl = `https://www.reddit.com/api/v1/authorize?client_id=${this.clientId}&response_type=code&state=${this.random_string}&redirect_uri=http://localhost:4200/home&duration=temporary&scope=read`;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    const { queryParams } = this.route.snapshot;

    if (!queryParams)
      return;

    this.authorizationService.handleAuthorizationGrant(queryParams.code)
      .subscribe(response => {
        this.router.navigate(['/pics']);
      }, console.error);
  }

}
