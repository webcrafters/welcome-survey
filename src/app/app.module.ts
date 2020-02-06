import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantsComponent } from './components/participants/participants.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { HeaderComponent } from './components/header/header.component';
import { CloudsDecoComponent } from './components/clouds-deco/clouds-deco.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    RocketComponent,
    HeaderComponent,
    CloudsDecoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
