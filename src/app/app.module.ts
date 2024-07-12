import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrainiacsModule } from './brainiacs/brainiacs.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddBrainiacModalComponent } from './modals/add-brainiac-modal/add-brainiac-modal.component';
import { Notfound404Component } from './notfound404/notfound404.component';

@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrainiacsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
