import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairDashboardComponent } from './shared/component/fair-dashboard/fair-dashboard.component';
import { FairDetailsComponent } from './shared/component/fair-details/fair-details.component';
import { FairCardComponent } from './shared/component/fair-card/fair-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairDetailsComponent,
    FairCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
