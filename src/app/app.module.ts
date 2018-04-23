import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//import { Router } from '@angular/router';

import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';
import { BaseInfoComponent } from './base-info/base-info.component';
//import { MainInfoComponent } from './main-info/main-info.component';
//import { MatchesComponent } from './matches/matches.component';

import { WinLossService } from './services/win-loss.service';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseInfoComponent,
    MainHeaderComponent,
   // MainInfoComponent,
   // MatchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [WinLossService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
