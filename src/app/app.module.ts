import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationService } from './home/authorization.service';
import { HomeComponent } from './home/home.component';
import { PicsComponent } from './pics/pics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
