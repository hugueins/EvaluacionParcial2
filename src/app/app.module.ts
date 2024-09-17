// angular import
import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule, 
    SharedModule, 
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule ],
  bootstrap: [AppComponent]
})
export class AppModule {}

 

