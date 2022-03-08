import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home.component';
import { MarsRoverComponent } from './presentation/mars-rover/mars-rover.component';
import { NearEarthObjectsComponent } from './presentation/near-earth-objects/near-earth-objects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarsRoverComponent,
    NearEarthObjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
