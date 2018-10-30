// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authBaseUrl: 'https://www.reddit.com/api/v1/authorize',
  redditAPIUrl: 'https://oauth.reddit.com',
  clientId : 'zYpfAI2IwYY0uQ',
  secret : 'w7MuFk-NKEX-by7EyL_sQVQDGog',
  random_string : 'sQVQDGog',
  redirect_uri: 'http://localhost:4200/home'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
